import { t } from "@lingui/core/macro";

import { projectsListScrollProgress } from "@/canvases/space/components/CameraControls";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ProjectData } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProjectsItemCardProps = {
  projectData: ProjectData;
  scrollProgress: number;
};

function ProjectsItemCard({
  projectData: {
    Title,
    Description,
    Icons,
    codeLink,
    liveLink,
    thumbnailImgUrl,
  },
  scrollProgress, // Retrieving scrollProgress as prop because the <Html /> component by Drei will portal this component out of ScrollContextProvider and therefore return invalid values
}: ProjectsItemCardProps) {
  return (
    <Card
      className={cn(
        "w-[36rem] [&:hover_img]:scale-110 gap-4 overflow-hidden bg-card/50 relative backdrop-blur-sm hover:[box-shadow:0_0_1rem_var(--primary),0_0_0.125rem_var(--foreground)] transition-[box-shadow] p-0",
        scrollProgress !== projectsListScrollProgress
          ? "pointer-events-none select-none"
          : "pointer-events-auto"
      )}
    >
      {/* Thumbnail image */}
      <a
        tabIndex={-1}
        target="_blank"
        href={liveLink}
        className={cn(
          "h-64 w-full overflow-hidden relative",
          scrollProgress !== projectsListScrollProgress
            ? "pointer-events-none"
            : "pointer-events-auto"
        )}
      >
        <img
          src={thumbnailImgUrl}
          className="h-64 w-full transition-transform absolute left-0 top-0 duration-300 object-cover"
        />
      </a>

      <CardHeader>
        {/* Icons */}
        <ul className="flex items-center gap-3 pt-2">
          <Icons />
        </ul>

        {/* Title */}
        <CardTitle className="text-4xl max-w-[90%] pt-3">
          <Title />
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Description */}
        <CardDescription className="text-xl text-card-foreground/80">
          <Description />
        </CardDescription>
      </CardContent>

      <CardFooter className="justify-between text-muted-foreground pb-6 pt-2">
        {/* Soure code link button */}
        <a
          href={codeLink}
          tabIndex={-1}
          target="_blank"
          className={
            scrollProgress !== projectsListScrollProgress
              ? "pointer-events-none"
              : "pointer-events-auto"
          }
        >
          <Button
            variant="outline"
            className="p-7 text-foreground rounded-xl text-xl"
            tabIndex={-1}
          >{t`Source code 💻`}</Button>
        </a>

        {/* View it live link button */}
        <a
          href={liveLink}
          tabIndex={-1}
          target="_blank"
          className={
            scrollProgress !== projectsListScrollProgress
              ? "pointer-events-none"
              : "pointer-events-auto"
          }
        >
          <Button
            className={
              "p-7 bg-primary/60 border-[color-mix(in_srgb,var(--primary)_80%,var(--foreground))] border rounded-xl text-xl"
            }
            tabIndex={-1}
          >{t`View it live 🚀`}</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default ProjectsItemCard;
