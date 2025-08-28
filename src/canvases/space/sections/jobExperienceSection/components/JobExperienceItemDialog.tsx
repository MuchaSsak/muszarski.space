import { useLingui } from "@lingui/react/macro";
import { Html } from "@react-three/drei";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollContext } from "@/contexts/ScrollContext";
import type { JobExperienceItemDialogData } from "@/lib/constants";

type JobExperienceItemDialogProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  jobExperienceData?: JobExperienceItemDialogData;
};

function JobExperienceItemDialog({
  isOpen,
  setIsOpen,
  jobExperienceData,
}: JobExperienceItemDialogProps) {
  const { t } = useLingui();
  const { setIsScrollingPaused } = useScrollContext();

  function handleOpenDialog(newIsOpen: boolean) {
    setIsScrollingPaused(newIsOpen);
    setIsOpen(newIsOpen);
  }

  if (!jobExperienceData) return;
  const {
    logoImgSrc,
    learnMoreUrl,
    countryEmoji,
    Occupation,
    Description,
    Location,
    company,
    StartedDate,
    EndedDate,
    SkillsNeeded,
    Responsibilities,
  } = jobExperienceData;

  return (
    <Html wrapperClass="z-[500000001]">
      <Dialog open={isOpen} onOpenChange={handleOpenDialog}>
        <DialogContent className="z-[500000001]">
          <DialogHeader className="overflow-y-scroll max-h-[80vh]">
            <div className="flex gap-4 items-center">
              {/* Logo */}
              <img src={logoImgSrc} className="size-20 object-contain" />

              <div className="flex-grow">
                <DialogTitle className="text-2xl font-bold">
                  {/* Occupation */}
                  {<Occupation />}
                </DialogTitle>

                <h4 className="text-sm text-muted-foreground flex items-center justify-between flex-wrap">
                  {/* Company */}
                  <span>{company}</span>

                  {/* Dates */}
                  <span>
                    <StartedDate /> - <EndedDate />
                  </span>
                </h4>

                <h4 className="text-sm text-muted-foreground">
                  {/* Location */}
                  <span>
                    <Location />{" "}
                    <span className="font-emoji">{countryEmoji}</span>{" "}
                  </span>
                </h4>
              </div>
            </div>

            <DialogDescription className="py-2">
              {/* Description */}
              <h3 className="text-lg font-medium text-foreground pb-1">
                <Description />
              </h3>

              {/* Responsibilities */}
              <div className="py-3">
                <h4 className="font-medium text-foreground">
                  Responsibilities:
                </h4>
                <ul className="list-disc list-inside">
                  {<Responsibilities />}
                </ul>
              </div>

              {/* Skills needed */}
              <div className="pt-3">
                <h4 className="font-medium text-foreground">Skills needed:</h4>
                <ul className="list-disc list-inside">{<SkillsNeeded />}</ul>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="justify-end flex items-center">
            <a href={learnMoreUrl} target="_blank" tabIndex={-1}>
              <Button
                size="sm"
                className=""
                variant="secondary"
              >{t`Learn more`}</Button>
            </a>

            <DialogClose asChild>
              <Button size="sm" className="">{t`Close`}</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Html>
  );
}

export default JobExperienceItemDialog;
