import { useEffect, useState } from "react";

import {
  contactFormScrollProgress,
  projectsListScrollProgress,
  projectsTitleScrollProgress,
} from "@/canvases/space/components/CameraControls";
import { useScrollContext } from "@/contexts/ScrollContext";

const scrollIncrementation = 0.005;
const minScrollProgress = -1;
const maxScrollProgress = 1;

const scrollDelayMs = 6000;
let scrollDelayTimeout: NodeJS.Timeout;

function useProjectsScroll() {
  const { scrollProgress, setScrollProgress } = useScrollContext();
  const [listScrollProgress, setListScrollProgress] = useState(0);
  const [isScrollingOnDelay, setIsScrollingOnDelay] = useState(true);

  useEffect(() => {
    // Pause global scrolling
    setListScrollProgress(0);

    // Only allow list scrolling after camera animation finishes
    setIsScrollingOnDelay(true);
    scrollDelayTimeout = setTimeout(() => {
      setIsScrollingOnDelay(false);
    }, scrollDelayMs);

    return () => clearTimeout(scrollDelayTimeout);
  }, [scrollProgress]);

  useEffect(() => {
    // Unpause global scrolling on fully scrolled up / down in the list
    if (listScrollProgress >= maxScrollProgress)
      return setScrollProgress(contactFormScrollProgress);
    if (listScrollProgress <= minScrollProgress)
      return setScrollProgress(projectsTitleScrollProgress);

    function handleScroll(e: WheelEvent) {
      if (scrollProgress !== projectsListScrollProgress || isScrollingOnDelay)
        return;

      // Update scroll progress
      const isScrollingDown = e.deltaY > 0;

      if (isScrollingDown)
        return setListScrollProgress((prev) => prev + scrollIncrementation);
      else return setListScrollProgress((prev) => prev - scrollIncrementation);
    }

    window.addEventListener("wheel", handleScroll);

    // Cleanup
    return () => window.removeEventListener("wheel", handleScroll);
  }, [
    setScrollProgress,
    listScrollProgress,
    scrollProgress,
    isScrollingOnDelay,
  ]);

  return listScrollProgress;
}

export default useProjectsScroll;
