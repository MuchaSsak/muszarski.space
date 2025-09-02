import { useEffect, useState } from "react";

import { certificatesListScrollProgress } from "@/canvases/space/components/CameraControls";
import { useScrollContext } from "@/contexts/ScrollContext";

export const htmlContainerElScrollToY = 350;

const scrollDelayMs = 1500;
let scrollDelayTimeout: NodeJS.Timeout;

function useCertificatesScroll(htmlContainerEl: HTMLDivElement) {
  const { scrollProgress, setPreviousScrollProgress, setScrollProgress } =
    useScrollContext();
  const [isScrollingOnDelay, setIsScrollingOnDelay] = useState(false);

  useEffect(() => {
    if (!htmlContainerEl || scrollProgress !== certificatesListScrollProgress)
      return;

    // Disable list scrolling
    if (isScrollingOnDelay) {
      htmlContainerEl.style.overflowY = "hidden";
      return;
    } else {
      htmlContainerEl.style.overflowY = "scroll";
    }

    function handleScroll(e: WheelEvent) {
      const scrollContainerEl = e.target as HTMLDivElement;
      const hasScrolledFullyUp = scrollContainerEl.scrollTop <= 0;
      const hasScrolledFullyDown =
        scrollContainerEl.scrollTop >=
        scrollContainerEl.scrollHeight - scrollContainerEl.offsetHeight - 25; // -25 is a slight margin of error (sometimes it just barely doesn't reach this value)

      // Unpause global scrolling on fully scrolled up / down in the list
      if (hasScrolledFullyUp) {
        setPreviousScrollProgress(certificatesListScrollProgress);
        setScrollProgress((prev) => prev - 1);
        return;
      }
      if (hasScrolledFullyDown) {
        setPreviousScrollProgress(certificatesListScrollProgress);
        setScrollProgress((prev) => prev + 1);
        return;
      }
    }

    // Add event imperatively so that it bubbles up when the children divs scroll. Handlers like onClick and onScroll on the R3D Html component don't seem to work for some reason.
    htmlContainerEl.addEventListener("scroll", handleScroll);

    return () => htmlContainerEl.removeEventListener("scroll", handleScroll);
  }, [
    setScrollProgress,
    setPreviousScrollProgress,
    htmlContainerEl,
    scrollProgress,
    isScrollingOnDelay,
  ]);

  // Reset container scroll to top
  useEffect(() => {
    if (!htmlContainerEl || scrollProgress !== certificatesListScrollProgress)
      return;
    htmlContainerEl.scrollTo(0, htmlContainerElScrollToY);

    // Only allow list scrolling after camera animation finishes
    setIsScrollingOnDelay(true);
    scrollDelayTimeout = setTimeout(() => {
      setIsScrollingOnDelay(false);
    }, scrollDelayMs);

    return () => clearTimeout(scrollDelayTimeout);
  }, [htmlContainerEl, scrollProgress]);
}

export default useCertificatesScroll;
