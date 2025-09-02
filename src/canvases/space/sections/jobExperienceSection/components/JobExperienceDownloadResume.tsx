import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { jobExperienceDownloadResumeScrollProgress } from "@/canvases/space/components/CameraControls";
import { Linkedin } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollContext } from "@/contexts/ScrollContext";
import { LINKEDIN_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

function JobExperienceDownloadResume() {
  const { t } = useLingui();
  const { language } = useLanguage();
  const { scrollProgress } = useScrollContext();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  const isRendered = useAnimateObjectVisibility(
    materialsToHideRefs,
    [
      jobExperienceDownloadResumeScrollProgress,
      jobExperienceDownloadResumeScrollProgress,
    ],
    [
      jobExperienceDownloadResumeScrollProgress,
      jobExperienceDownloadResumeScrollProgress,
    ]
  );
  if (!isRendered) return;

  return (
    <Html wrapperClass="z-[1424429000]" center position={[3, 0, -80]}>
      <div
        className={cn(
          "flex flex-col gap-4 w-90",
          scrollProgress !== jobExperienceDownloadResumeScrollProgress
            ? "pointer-events-none select-none"
            : ""
        )}
      >
        {/* Download resume */}
        <a
          href={`/Mateusz_Muszarski_résumé_${language}.pdf`}
          tabIndex={-1}
          target="_blank"
          download
        >
          <Button
            ref={(el) => {
              materialsToHideRefs.current.push(el as HTMLButtonElement);
            }}
            tabIndex={
              scrollProgress !== jobExperienceDownloadResumeScrollProgress
                ? -1
                : undefined
            }
            variant="outline"
            className="text-2xl py-7 px-10 bg-foreground/25! w-full border-foreground/40! hover:bg-foreground/40! focus-visible:bg-foreground/40! border-2 "
          >
            {t`Download résumé`}
            <span className="font-emoji">📝</span>
          </Button>
        </a>

        {/* Or separator */}
        <div
          ref={(el) => {
            materialsToHideRefs.current.push(el as HTMLDivElement);
          }}
          className="flex items-center gap-5 text-foreground/50"
        >
          <hr className="bg-foreground/50 flex-grow" />
          <span>{t`OR`}</span>
          <hr className="bg-foreground/50 flex-grow" />
        </div>

        {/* Visit Linkedin */}
        <a href={LINKEDIN_LINK} tabIndex={-1} target="_blank">
          <Button
            tabIndex={
              scrollProgress !== jobExperienceDownloadResumeScrollProgress
                ? -1
                : undefined
            }
            ref={(el) => {
              materialsToHideRefs.current.push(el as HTMLButtonElement);
            }}
            variant="outline"
            className="text-2xl py-7 px-10 w-full border-background/30! bg-blue-500/80! hover:bg-blue-500! focus-visible:bg-blue-500! border-2 "
          >
            {t`Visit LinkedIn`}
            <Linkedin className="size-6 fill-foreground stroke-[0.5] bg-blue-600 p-[3px] rounded-sm" />
          </Button>
        </a>
      </div>
    </Html>
  );
}

export default JobExperienceDownloadResume;
