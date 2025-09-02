import { useLingui } from "@lingui/react/macro";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import useSound from "use-sound";

import musicSound from "@/assets/music/music.ogg";
import airPressureReleaseSfx from "@/assets/sfx/air_pressure_release.ogg";
import sciFiDoorOpenSfx from "@/assets/sfx/sci_fi_door_close.ogg";
import AudioSettingButton from "@/components/AudioSettingButton";
import GraphicsSettingButton from "@/components/GraphicsSettingButton";
import LanguageSettingButton from "@/components/LanguageSettingButton";
import { Button } from "@/components/ui/button";
import { useSettingsContext } from "@/contexts/SettingsContext";
import { cn } from "@/lib/utils";

function StartupScreen() {
  const { t } = useLingui();
  const { dispatch, hasStartedExperience, isAudioEnabled, audioVolume } =
    useSettingsContext();
  const [playSciFiDoorOpenSfx] = useSound(sciFiDoorOpenSfx, {
    volume: isAudioEnabled ? audioVolume : 0,
  });
  const [playAirPressureReleaseSfx] = useSound(airPressureReleaseSfx, {
    volume: isAudioEnabled ? audioVolume : 0,
  });
  const [playMusicSound] = useSound(musicSound, {
    volume: isAudioEnabled ? audioVolume : 0,
  });
  const startupScreenContainerRef = useRef<HTMLDivElement>(null);
  const loadingTextContainerRef = useRef<HTMLHeadingElement>(null);
  const backgroundImageRef = useRef<HTMLImageElement>(null);
  const leftOverlayPanelRef = useRef<HTMLImageElement>(null);
  const rightOverlayPanelRef = useRef<HTMLImageElement>(null);
  const [hasLoadedBackgroundImage, setHasLoadedBackgroundImage] =
    useState(false);

  function handlePlayStartExperienceSounds() {
    gsap.delayedCall(0, playSciFiDoorOpenSfx);
    gsap.delayedCall(3.75, playAirPressureReleaseSfx);

    gsap.delayedCall(5, playMusicSound);
  }

  function handleStartExperience() {
    dispatch({ type: "experience/start" });
    handlePlayStartExperienceSounds();
  }

  // GSAP animations
  useEffect(() => {
    /**
     * On entry animations
     */
    // Fade in loading text
    if (!hasLoadedBackgroundImage) {
      gsap.fromTo(
        loadingTextContainerRef.current,
        { opacity: 0 },
        { opacity: 1 }
      );
    }

    // Fade in background image
    if (hasLoadedBackgroundImage)
      gsap.to(backgroundImageRef.current, {
        filter: "brightness(100%)",
        duration: 4,
        ease: "sine.inOut",
      });

    /**
     * On start experience animations
     */
    if (!hasStartedExperience) return;

    // Startup screen disappear when side panels are closed in
    gsap.to(startupScreenContainerRef.current, {
      display: "none",
      duration: 0.01,
      delay: 2.5,
    });

    // Left panel slide in
    gsap
      .timeline()
      .to(leftOverlayPanelRef.current, {
        x: 0,
        delay: 0.25,
        duration: 2.5,
        ease: "bounce.out",
      })
      .to(leftOverlayPanelRef.current, {
        x: "-100%",
        ease: "sine.inOut",
        delay: 1,
        duration: 2,
      })
      .to(leftOverlayPanelRef.current, { display: "none" });

    // Right panel slide in
    gsap
      .timeline()
      .to(rightOverlayPanelRef.current, {
        x: 0,
        delay: 0.25,
        duration: 2.5,
        ease: "bounce.out",
      })
      .to(rightOverlayPanelRef.current, {
        x: "100%",
        ease: "sine.inOut",
        delay: 1,
        duration: 2,
      })
      .to(rightOverlayPanelRef.current, { display: "none" });
  }, [
    hasStartedExperience,
    hasLoadedBackgroundImage,
    playSciFiDoorOpenSfx,
    playAirPressureReleaseSfx,
  ]);

  // Set hasLoadedBackgroundImage on image load
  useEffect(() => {
    backgroundImageRef.current.addEventListener("load", () =>
      setHasLoadedBackgroundImage(true)
    );
  }, []);

  return (
    <div
      ref={startupScreenContainerRef}
      className="w-screen h-screen left-0 top-0 z-50 absolute flex justify-center items-center"
    >
      {/* Loading text */}
      <div ref={loadingTextContainerRef}>
        <h1
          className={cn(
            "text-2xl transition-opacity duration-500 ease-in-out select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
            hasLoadedBackgroundImage ? "opacity-0!" : "opacity-100!"
          )}
        >
          {t`Deploying...`}
        </h1>
      </div>

      {/* Background image */}
      <img
        ref={backgroundImageRef}
        className={cn(
          "w-screen h-screen object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 brightness-0"
        )}
        src="/assets/pictures/startup_screen_background.jpg"
        alt="The control panel of your spaceship which will take you to a tour of Mateusz Muszarski's portfolio"
      />

      <div
        className={cn(
          "flex flex-col-reverse items-center justify-center gap-3 transition-opacity duration-[4000ms] [transition-delay:1500ms] ease-in-out",
          hasLoadedBackgroundImage ? "opacity-100!" : "opacity-0!"
        )}
      >
        {/* Start button */}
        <Button
          onClick={handleStartExperience}
          disabled={hasStartedExperience}
        >{t`START`}</Button>

        {/* Settings buttons */}
        <div className="gap-2 flex">
          <LanguageSettingButton />
          <GraphicsSettingButton />
          <AudioSettingButton />
        </div>
      </div>

      {/* Start animation side panels */}
      {createPortal(
        <>
          <img
            src="/assets/pictures/startup_screen_door.jpg"
            alt="The door side panels of your spaceship which will take you to a tour of Mateusz Muszarski's portfolio"
            ref={leftOverlayPanelRef}
            className="h-screen w-[50vw] absolute left-0 -translate-x-full top-0 z-50"
          />
          <img
            src="/assets/pictures/startup_screen_door.jpg"
            alt="The door side panels of your spaceship which will take you to a tour of Mateusz Muszarski's portfolio"
            ref={rightOverlayPanelRef}
            className="h-screen w-[50vw] absolute right-0 translate-x-full top-0 z-50"
          />
        </>,
        document.body
      )}
    </div>
  );
}

export default StartupScreen;
