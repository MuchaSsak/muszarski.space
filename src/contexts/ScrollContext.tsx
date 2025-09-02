import { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

import { AVAILABLE_SCROLLING_SECTIONS } from "@/lib/constants";
import { debouncer } from "@/lib/utils";

/**
 * Options
 */
const scrollIncrementation = 1;
const minScrollProgress = 0;
const maxScrollProgress = AVAILABLE_SCROLLING_SECTIONS.length - 1;

/**
 * Types
 */
type ScrollContext = {
  scrollProgress: number;
  setScrollProgress: React.Dispatch<React.SetStateAction<number>>;
  previousScrollProgress: number;
  setPreviousScrollProgress: React.Dispatch<React.SetStateAction<number>>;
  isScrollingPaused: boolean;
  setIsScrollingPaused: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Initialization
 */
const initialScrollContext: ScrollContext = {
  scrollProgress: 0,
  setScrollProgress: () => {},
  previousScrollProgress: 0,
  setPreviousScrollProgress: () => {},
  isScrollingPaused: false,
  setIsScrollingPaused: () => {},
};

const ScrollContext = createContext<ScrollContext>(initialScrollContext);

/**
 * Provider
 */
export function ScrollContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [previousScrollProgress, setPreviousScrollProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingPaused, setIsScrollingPaused] = useState(false);
  const [updater, updateEffect] = useState(false);

  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (isScrollingPaused) return;

      const isScrollingDown = e.deltaY > 0;

      // You have no idea how much trouble and time this little wheel event firing too fast for state to update cost me. Debouncing is not enough. Trust me. Flush sync is the key.
      flushSync(() => {
        setScrollProgress((prev) => {
          setPreviousScrollProgress(prev);

          // Readd wheel event listener when it would otherwise be used up due to the option { once: true }
          if (
            prev === AVAILABLE_SCROLLING_SECTIONS.length - 1 &&
            isScrollingDown
          ) {
            updateEffect((updater) => !updater);
            return prev;
          }

          if (
            prev + scrollIncrementation <= maxScrollProgress &&
            isScrollingDown
          ) {
            setIsScrollingPaused(true);
            return prev + scrollIncrementation;
          }
          if (
            prev - scrollIncrementation >= minScrollProgress &&
            !isScrollingDown
          ) {
            setIsScrollingPaused(true);
            return prev - scrollIncrementation;
          }

          return prev;
        });
      });
    }

    // Prevent over firing the handleScroll event via debouncing
    debouncer(() => {
      window.addEventListener("wheel", handleScroll, { once: true });
    })?.();

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrollingPaused, updater]);

  return (
    <ScrollContext.Provider
      value={{
        scrollProgress,
        setScrollProgress,
        previousScrollProgress,
        setPreviousScrollProgress,
        isScrollingPaused,
        setIsScrollingPaused,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

/**
 * Hook
 */
export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (context === undefined)
    throw new Error(
      "useScrollContext was used outside of ScrollContextProvider!"
    );
  return context;
}
