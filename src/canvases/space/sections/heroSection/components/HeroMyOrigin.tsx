import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { heroMyOriginScrollProgress } from "@/canvases/space/components/CameraControls";
import { Instagram } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScrollContext } from "@/contexts/ScrollContext";
import { INSTAGRAM_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

const COUNTRIES_VISITED_EMOJIS = ["🇱🇹", "🇱🇻", "🇬🇪", "🇬🇷", "🇬🇧", "🇹🇷"];

function HeroMyOrigin() {
  const { t } = useLingui();
  const { scrollProgress } = useScrollContext();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  useAnimateObjectVisibility(materialsToHideRefs, [
    heroMyOriginScrollProgress,
    heroMyOriginScrollProgress,
  ]);

  return (
    <group>
      <Html
        className="select-none flex flex-col items-center pointer-events-none"
        center
        position={[0.2, -0.05, -16.26]}
      >
        {/* Title */}
        <h3
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="text-center text-gold-gradient opacity-0 text-4xl flex items-center gap-2 font-bold"
        >
          <span>{t`I originate from Poland`}</span>
          <span className="font-emoji text-foreground text-2xl">🇵🇱</span>
        </h3>

        {/* Other countries subtitle */}
        <h4
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="font-semibold text-gold-gradient text-2xl opacity-0 leading-7 tracking-[-0.0125em] py-4 text-center flex flex-col items-center"
        >
          <span>{t`But I've been to a bunch of`}</span>
          {/* Other countries tooltip */}
          <Tooltip>
            <TooltipTrigger
              className={
                scrollProgress !== heroMyOriginScrollProgress
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              }
              tabIndex={
                scrollProgress !== heroMyOriginScrollProgress ? -1 : undefined
              }
            >
              <span className="underline font-bold cursor-default text-[#DEC27C] hover:text-[#ffde8c] focus-visible:text-[#ffde8c] transition-colors underline-offset-2">
                {t`other countries too!`}
              </span>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "text-2xl flex z-[500000000] flex-wrap max-w-72 justify-center gap-3",
                scrollProgress !== heroMyOriginScrollProgress
                  ? "pointer-events-none opacity-0"
                  : "pointer-events-auto"
              )}
              sideOffset={6}
              side="bottom"
            >
              {COUNTRIES_VISITED_EMOJIS.map((country) => (
                <span key={country} className="font-emoji">
                  {country}
                </span>
              ))}
            </TooltipContent>
          </Tooltip>
        </h4>

        {/* Instagram subtitle */}
        <h4
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLHeadingElement);
          }}
          className="font-semibold text-gold-gradient opacity-0 text-2xl leading-7 tracking-[-0.0125em] w-[28rem] text-center"
        >
          <span>{t`Check out my `}</span>
          <span>
            <a
              target="_blank"
              href={INSTAGRAM_LINK}
              className={cn(
                "font-bold inline-flex gap-1 hover:text-[#ffde8c] focus-visible:text-[#ffde8c] transition-colors translate-y-[0.185rem] items-center text-[#DEC27C] underline",
                scrollProgress !== heroMyOriginScrollProgress
                  ? "pointer-events-none opacity-0"
                  : "pointer-events-auto"
              )}
              tabIndex={
                scrollProgress !== heroMyOriginScrollProgress ? -1 : undefined
              }
            >
              <Instagram />
              {t`Instagram`}
            </a>
          </span>
          <span>{t` for amateur photography of those places `}</span>
          <span className="font-emoji text-white">😉</span>
        </h4>
      </Html>
    </group>
  );
}

export default HeroMyOrigin;
