import { useEffect, useState } from "react";

import { projectsListScrollProgress } from "@/canvases/space/components/CameraControls";
import { useScrollContext } from "@/contexts/ScrollContext";

const scrollIncrementation = 0.005;
const minScrollProgress = 0;
const maxScrollProgress = 1;

const scrollDelayMs = 3000;
let scrollDelayTimeout: NodeJS.Timeout;

function useProjectsScroll() {
  const { scrollProgress, setIsScrollingPaused } = useScrollContext();
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
  }, [scrollProgress, setIsScrollingPaused]);

  useEffect(() => {
    // Unpause global scrolling on fully scrolled up / down in the list (with some additional +0.1 margin)
    if (
      listScrollProgress >= maxScrollProgress + 0.1 ||
      listScrollProgress <= minScrollProgress - 0.1
    )
      return setIsScrollingPaused(false);

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
    setIsScrollingPaused,
    listScrollProgress,
    scrollProgress,
    isScrollingOnDelay,
  ]);

  return listScrollProgress;
}

export default useProjectsScroll;
