import { useLingui } from "@lingui/react/macro";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function CreditsDialogButton() {
  const { t } = useLingui();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="size-8">
          🏅
        </Button>
      </DialogTrigger>

      <DialogContent className="z-[500000001]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t`Credits 💖`}
          </DialogTitle>

          <DialogDescription asChild className="py-2">
            <ul className="flex list-disc list-inside flex-col gap-2">
              <li>
                {t`Planet textures by`}{" "}
                <a
                  href="https://www.solarsystemscope.com/textures/"
                  target="_blank"
                  className="hover:underline focus-visible:underline font-bold"
                >
                  Solar System Scope
                </a>{" "}
                {t`are licensed under`}{" "}
                <a
                  className="hover:underline focus-visible:underline font-bold"
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                >
                  Creative Commons Attribution
                </a>
              </li>

              <li>
                {t`Music by`}{" "}
                <a
                  href="https://www.youtube.com/channel/UC2lHxFyHL96NPhdU9XyXnPQ"
                  target="_blank"
                  className="hover:underline focus-visible:underline font-bold"
                >
                  Reed Mathis
                </a>{" "}
                {t`from`}{" "}
                <a
                  className="hover:underline focus-visible:underline font-bold"
                  href="https://www.youtube.com/audiolibrary"
                  target="_blank"
                >
                  YouTube Audio Library
                </a>
              </li>

              <li>
                {t`Sound Effect by`}{" "}
                <a
                  href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6451"
                  target="_blank"
                  className="hover:underline focus-visible:underline font-bold"
                >
                  freesound_community
                </a>{" "}
                {t`from`}{" "}
                <a
                  className="hover:underline focus-visible:underline font-bold"
                  href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6451"
                  target="_blank"
                >
                  Pixabay
                </a>
              </li>

              <li>
                {t`Sound Effect by`}{" "}
                <a
                  href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=29600"
                  target="_blank"
                  className="hover:underline focus-visible:underline font-bold"
                >
                  freesound_community
                </a>{" "}
                {t`from`}{" "}
                <a
                  className="hover:underline focus-visible:underline font-bold"
                  href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=29600"
                  target="_blank"
                >
                  Pixabay
                </a>
              </li>

              <li>
                {t`Sound Effect by`}{" "}
                <a
                  href="https://pixabay.com/users/floraphonic-38928062/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=200424"
                  target="_blank"
                  className="hover:underline focus-visible:underline font-bold"
                >
                  floraphonic
                </a>{" "}
                {t`from`}{" "}
                <a
                  className="hover:underline focus-visible:underline font-bold"
                  href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=29600"
                  target="_blank"
                >
                  Pixabay
                </a>
              </li>

              <li>
                "Wandering Asteroids Of Andromeda" {t`by`}{" "}
                <a
                  href="https://skfb.ly/psECZ"
                  target="_blank"
                  className="hover:underline focus-visible:underline font-bold"
                >
                  ARCTIC WOLVES™
                </a>{" "}
                {t`is licensed under`}{" "}
                <a
                  className="hover:underline focus-visible:underline font-bold"
                  href="http://creativecommons.org/licenses/by/4.0/"
                  target="_blank"
                >
                  Creative Commons Attribution
                </a>
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>

        <DialogClose className="ml-auto" asChild>
          <Button>{t`Cheers to them!`}</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default CreditsDialogButton;
