import { Float, Html } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import useAnimateObjectVisibility from "@/canvases/hooks/useAnimateObjectVisibility";
import { projectsListScrollProgress } from "@/canvases/space/components/CameraControls";
import ProjectsItemCard from "@/canvases/space/sections/projectsSection/components/ProjectsItemCard";
import useProjectsItemCardPositions from "@/canvases/space/sections/projectsSection/hooks/useProjectsItemCardPositions";
import useProjectsScroll from "@/canvases/space/sections/projectsSection/hooks/useProjectsScroll";
import { useScrollContext } from "@/contexts/ScrollContext";
import { PROJECTS_LIST } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ProjectsList() {
  const { scrollProgress } = useScrollContext();

  // Hide text when the current section viewed is not appriopriate for it to appear
  const materialsToHideRefs = useRef<(THREE.Material | HTMLElement)[]>([]);
  const isVisibleThreshold: [number, number] = useMemo(
    () => [projectsListScrollProgress, projectsListScrollProgress],
    []
  );
  const showOptions = useMemo(() => ({ delay: 3.5 }), []);
  useAnimateObjectVisibility(
    materialsToHideRefs,
    isVisibleThreshold,
    undefined,
    showOptions,
    { delay: 0.5 }
  );

  const listScrollProgress = useProjectsScroll();

  const cardsPositions = useProjectsItemCardPositions(listScrollProgress);

  return (
    <group rotation={[Math.PI * -0.025, 0, Math.PI * 0.1]}>
      {PROJECTS_LIST.map((project, i) => (
        <Float
          speed={0.5}
          rotationIntensity={0.005}
          floatIntensity={0.0002}
          floatingRange={[0.0001, 0.0002]}
          key={i}
        >
          <Html
            ref={(el) => {
              materialsToHideRefs.current.push(el as HTMLDivElement);
            }}
            position={[
              cardsPositions[i]?.x - 680,
              cardsPositions[i]?.y + 45,
              cardsPositions[i]?.z + 1455,
            ]}
            occlude
            rotation={[0.2, Math.PI - 0.075, -0.015]}
            scale={2}
            transform
            className={cn(
              "opacity-0",
              scrollProgress !== projectsListScrollProgress
                ? "select-none pointer-events-none"
                : "pointer-events-auto"
            )}
          >
            <ProjectsItemCard
              projectData={project}
              scrollProgress={scrollProgress}
            />
          </Html>
        </Float>
      ))}
    </group>
  );
}

export default ProjectsList;
