import { useLingui } from "@lingui/react/macro";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { useScrollContext } from "@/contexts/ScrollContext";
import { useSettingsContext } from "@/contexts/SettingsContext";
import { AVAILABLE_SCROLLING_SECTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ScrollIndicator() {
  const { t } = useLingui();
  const { scrollProgress } = useScrollContext();
  const { hasStartedExperience } = useSettingsContext();
  const scrollIndicatorContainerRef = useRef<HTMLDivElement>(null);

  // GSAP animations
  useEffect(() => {
    /**
     * On start experience animations
     */
    if (!hasStartedExperience) return;

    // Fade in scroll indicator on start experience
    gsap.to(scrollIndicatorContainerRef.current, {
      opacity: 1,
      duration: 2,
      delay: 3.25,
    });
  }, [hasStartedExperience]);

  return (
    <div
      ref={scrollIndicatorContainerRef}
      className="fixed opacity-0 bottom-2 left-1/2 z-50 -translate-x-1/2 flex flex-col items-center gap-1 select-none"
    >
      {/* Scroll text */}
      <span
        className={cn(
          "tracking-widest transition-opacity duration-500 [transition-timing-function:ease] text-xs",
          scrollProgress > 0 ? "" : "[animation:pulse_5s_infinite]",
          scrollProgress > 0 ? "opacity-0" : "opacity-100"
        )}
      >
        {t`SCROLL`}
      </span>

      {/* Sections indicators */}
      <div
        className={cn(
          "flex items-center justify-center gap-1 transition-opacity duration-500 [transition-timing-function:ease]",
          scrollProgress > 0 ? "opacity-100" : "opacity-0"
        )}
      >
        {AVAILABLE_SCROLLING_SECTIONS.map((section, i) => (
          <div
            key={i}
            style={{
              backgroundColor: section,
            }}
            className={cn(
              "rounded-full h-0.5 w-3 transition-opacity duration-500 [transition-timing-function:ease]",
              scrollProgress >= i ? "opacity-100" : "opacity-25"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default ScrollIndicator;
