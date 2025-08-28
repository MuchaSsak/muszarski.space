import { useLingui } from "@lingui/react/macro";
import { useEffect, useState } from "react";

import { useSettingsContext } from "@/contexts/SettingsContext";
import { OLD_PORTFOLIO_WEBSITE_LINK } from "@/lib/constants";

import { Button } from "./ui/button";

const maxWidthForWarning = 900;

function MobileWarning() {
  const { t } = useLingui();
  const { dispatch, hasIgnoredMobileWarning } = useSettingsContext();
  const [isWarning, setIsWarning] = useState(
    () => window.innerWidth > maxWidthForWarning
  );

  function handleIgnoreWarning() {
    dispatch({ type: "experience/ignoreMobileWarning" });
    dispatch({ type: "state/save" });
  }

  // Show/hide component in appropriate times on resize
  useEffect(() => {
    function handleResize(e: UIEvent) {
      setIsWarning((e.target as Window).innerWidth > maxWidthForWarning);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isWarning || hasIgnoredMobileWarning) return;

  return (
    // Listen, I'm sorry for those z-indexes, however I was forced to put them so high because of <Html/> from Drei
    <div className="bg-background/60 backdrop-blur-md gap-5 flex flex-col justify-center items-center fixed z-[999999999999999] left-0 top-0 w-screen h-screen text-center">
      {/* Emoji and title */}
      <div className="flex flex-col gap-2 items-center">
        <span className="text-9xl">😞</span>
        <h1 className="text-5xl font-black">{t`Oops!`}</h1>
      </div>

      <div className="max-xs:px-4 gap-2 flex flex-col items-center text-sm xs:max-sm:px-16 sm:w-md text-card-foreground/85">
        {/* Description */}
        <p>{t`It appears that your device is incompatible with this experience. This warning is caused by your screen resolution being smaller in width than recommended. It's likely you're viewing this on a mobile device, which is problematic for this 3D web application mainly for two reasons:`}</p>
        <ul className="list-inside list-disc text-left px-16">
          <li>
            small devices have generally worse performance due to hardware
            limitations
          </li>
          <li>
            the resolution is too little to be able to view the majority of the
            content
          </li>
        </ul>
        <p className="text-balance">
          {t`For a more responsive and lighter website, `}
          <a
            className="font-bold hover:underline focus-visible:underline hover:text-foreground focus-visible:text-foreground"
            href={OLD_PORTFOLIO_WEBSITE_LINK}
          >{t`check out my older portfolio 🚀`}</a>
        </p>
        <p className="text-balance">
          {t`If you wish to ignore this warning and proceed anyway, `}
          <span
            tabIndex={0}
            onClick={handleIgnoreWarning}
            className="font-bold cursor-pointer hover:underline focus-visible:underline hover:text-foreground focus-visible:text-foreground"
          >{t`click here.`}</span>
        </p>

        {/* Visit old portfolio button link */}
        <a
          className="relative border-2 border-primary/50 hover:border-ring transition-all [&:hover_span]:text-primary [&:hover_span]:tracking-wide [&:hover_span]:text-2xl [&:focus-visible_span]:text-primary [&:focus-visible_span]:tracking-wide [&:focus-visible_span]:text-2xl focus-visible:border-ring outline-none focus-visible:ring-ring/50 focus-visible:ring-4 cursor-pointer w-full [&:hover_img]:scale-110 [&:focus-visible_img]:scale-110 rounded-md overflow-hidden h-32 mt-2 [&:hover_div]:to-75% [&:focus-visible_div]:to-75% [&:hover_span]:[text-shadow:color-mix(in_srgb,var(--primary)_40%,var(--background))_2px_2px_0rem] [&:focus-visible_span]:[text-shadow:color-mix(in_srgb,var(--primary)_40%,var(--background))_2px_2px_0rem]"
          href={OLD_PORTFOLIO_WEBSITE_LINK}
        >
          <img
            src="/assets/pictures/space_portfolio_thumbnail.jpg"
            alt="Preview thumbnail image of the old 2D space portfolio of muszarski.space"
            className="w-full h-full transition-transform object-cover duration-300 ease-in-out"
          />
          <div className="h-full w-full bg-gradient-to-t from-background to-transparent to-50% absolute left-0 bottom-0" />
          <span className="absolute bottom-2 transition-all duration-500 left-4 text-xl font-bold">{t`Visit old portfolio`}</span>
        </a>

        {/* Close corner button */}
        <Button
          variant="ghost"
          onClick={handleIgnoreWarning}
          className="fixed top-4 right-6 z-[999999999999999]"
          size="icon"
        >
          &#10006;
        </Button>
      </div>
    </div>
  );
}

export default MobileWarning;
