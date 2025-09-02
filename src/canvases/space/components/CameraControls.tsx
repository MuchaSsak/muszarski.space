import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useState } from "react";

import { useScrollContext } from "@/contexts/ScrollContext";

export const heroWelcomeTextScrollProgress = 0;
export const heroAboutMeScrollProgress = 2;
export const heroMyOriginScrollProgress = 3;
export const jobExperienceTitleScrollProgress = 4;
export const jobExperienceListScrollProgress = 5;
export const jobExperienceDownloadResumeScrollProgress = 6;
export const certificatesTitleScrollProgress = 7;
export const certificatesListScrollProgress = 8;
export const projectsTitleScrollProgress = 9;
export const projectsListScrollProgress = 10;
export const contactFormScrollProgress = 11;

function CameraControls() {
  const { camera } = useThree();
  const {
    scrollProgress,
    previousScrollProgress,
    setIsScrollingPaused,
    isScrollingPaused,
  } = useScrollContext();
  const [lastAnimationPlayed, setLastAnimationPlayed] = useState(0);

  // Timeline camera animation
  useEffect(() => {
    function handleUnpauseScrolling() {
      setIsScrollingPaused(false);
    }

    switch (scrollProgress) {
      /**
       * Neptune contact form
       */
      case contactFormScrollProgress: {
        if (lastAnimationPlayed === contactFormScrollProgress) return;

        const totalAnimationDuration =
          previousScrollProgress < contactFormScrollProgress ? 8 : 0.5;

        // Unpause further scrolling when animation is finished
        gsap.killTweensOf(handleUnpauseScrolling);
        gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

        gsap.to(camera.position, {
          ease: "power2.inOut",
          x: 1942,
          y: 20,
          z: -199,
          duration: 8,
        });

        gsap.to(camera.rotation, {
          ease: "sine.out",
          x: -Math.PI * 2,
          y: -Math.PI * 3.78,
          z: 0,
          duration: 8,
        });

        setLastAnimationPlayed(contactFormScrollProgress);
        break;
      }

      /**
       * Saturn projects list
       */
      case projectsListScrollProgress: {
        if (lastAnimationPlayed === projectsListScrollProgress) return;

        setIsScrollingPaused(true);
        gsap.killTweensOf(handleUnpauseScrolling);
        // Not unpausing scrolling because it's handled in useProjectsScroll

        gsap.to(camera.position, {
          ease: "sine.inOut",
          x: -680,
          y: 20,
          z: 1330,
          duration: 7,
        });

        gsap.to(camera.rotation, {
          ease: "sine.inOut",
          x: -Math.PI * 2 + 0.2,
          y: -Math.PI * 3,
          z: -0.32,
          duration: 7,
        });

        setLastAnimationPlayed(projectsListScrollProgress);
        break;
      }

      /**
       * Saturn projects title
       */
      case projectsTitleScrollProgress: {
        if (lastAnimationPlayed === projectsTitleScrollProgress) return;

        // Change reverse animation
        if (previousScrollProgress === projectsListScrollProgress) {
          const totalAnimationDuration = 5;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap.to(camera.position, {
            ease: "sine.inOut",
            x: -780,
            y: 0.6,
            z: 1470,
            duration: 5,
          });

          gsap.to(camera.rotation, {
            ease: "sine.inOut",
            x: -Math.PI * 2,
            y: -0.75,
            z: 0,
            duration: 5,
          });
        } else {
          const totalAnimationDuration = 8;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap.to(camera.position, {
            ease: "power2.inOut",
            x: -780,
            y: 0.6,
            z: 1470,
            duration: 8,
          });

          gsap
            .timeline()
            .to(camera.rotation, {
              ease: "sine.in",
              y: -1.5,
              duration: 2,
            })
            .to(camera.rotation, {
              ease: "sine.out",
              x: -Math.PI * 2,
              y: -0.75,
              z: 0,
              duration: 6,
            });
        }

        setLastAnimationPlayed(projectsTitleScrollProgress);
        break;
      }

      /**
       * Jupiter certificates list
       */
      case certificatesListScrollProgress: {
        if (lastAnimationPlayed === certificatesListScrollProgress) return;
        // Not unpausing scrolling because it's handled in useCertificatesScroll

        gsap.to(camera.position, {
          ease: "sine.inOut",
          x: -280,
          y: 0.6,
          z: -560,
          duration: 3,
        });

        gsap.to(camera.rotation, {
          ease: "sine.inOut",
          y: -1.8,
          duration: 3,
        });

        setLastAnimationPlayed(certificatesListScrollProgress);
        break;
      }

      /**
       * Jupiter certificates title
       */
      case certificatesTitleScrollProgress: {
        if (lastAnimationPlayed === certificatesTitleScrollProgress) return;

        // Change reverse animation
        if (previousScrollProgress === certificatesListScrollProgress) {
          const totalAnimationDuration = 2;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap.to(camera.position, {
            ease: "sine.inOut",
            x: -150,
            y: 0.6,
            z: -450,
            duration: 2,
          });

          gsap.to(camera.rotation, {
            ease: "sine.inOut",
            y: 0,
            duration: 2,
          });
        } else {
          const totalAnimationDuration = 5;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap
            .timeline()
            .to(camera.position, {
              ease: "sine.in",
              x: -50,
              y: 0.6,
              z: -220,
              duration: 3,
            })
            .to(camera.position, {
              ease: "sine.out",
              x: -150,
              y: 0.6,
              z: -450,
              duration: 2,
            });

          gsap.to(camera.rotation, {
            ease: "power4.out",
            y: 0,
            delay: 1.5,
            duration: 5,
          });
        }

        setLastAnimationPlayed(certificatesTitleScrollProgress);
        break;
      }

      /**
       * Mars job experience download resume
       */
      case jobExperienceDownloadResumeScrollProgress: {
        if (lastAnimationPlayed === jobExperienceDownloadResumeScrollProgress)
          return;

        const totalAnimationDuration = 1.75;

        // Unpause further scrolling when animation is finished
        gsap.killTweensOf(handleUnpauseScrolling);
        gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

        gsap.to(camera.position, {
          ease: "sine.inOut",
          x: 8,
          y: 0,
          z: -92,
          duration: 1.75,
        });

        gsap.to(camera.rotation, {
          ease: "sine.inOut",
          y: Math.PI,
          delay: 1.5,
          duration: 1.5,
        });

        setLastAnimationPlayed(jobExperienceDownloadResumeScrollProgress);
        break;
      }

      /**
       * Mars job experience list
       */
      case jobExperienceListScrollProgress: {
        if (lastAnimationPlayed === jobExperienceListScrollProgress) return;

        // Change reverse animation
        if (
          previousScrollProgress === jobExperienceDownloadResumeScrollProgress
        ) {
          const totalAnimationDuration = 1.75;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap.to(camera.position, {
            ease: "sine.inOut",
            x: 10,
            y: 0,
            z: -100,
            duration: 1.75,
          });

          gsap.to(camera.rotation, {
            ease: "sine.inOut",
            y: Math.PI,
            duration: 1.5,
          });
        } else {
          const totalAnimationDuration = 3.5;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap
            .timeline()
            .to(camera.position, {
              ease: "sine.in",
              x: 10,
              y: 5,
              z: -90,
              duration: 1.75,
            })
            .to(camera.position, {
              ease: "sine.out",
              x: 10,
              y: 0,
              z: -100,
              duration: 1.75,
            });

          gsap
            .timeline()
            .to(camera.rotation, {
              ease: "sine.in",
              x: -Math.PI / 2,
              duration: 1.75,
            })
            .to(camera.rotation, {
              ease: "sine",
              x: -Math.PI * 2,
              duration: 1.75,
            });

          gsap.to(camera.rotation, {
            ease: "sine.inOut",
            y: Math.PI,
            delay: 1.5,
            duration: 1.5,
          });
        }

        setLastAnimationPlayed(jobExperienceListScrollProgress);
        break;
      }

      /**
       * Mars job experience title
       */
      case jobExperienceTitleScrollProgress: {
        if (lastAnimationPlayed === jobExperienceTitleScrollProgress) return;

        // Change reverse animation
        if (previousScrollProgress === jobExperienceListScrollProgress) {
          const totalAnimationDuration = 3.5;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap
            .timeline()
            .to(camera.position, {
              ease: "sine.in",
              x: 10,
              y: 5,
              z: -90,
              duration: 1.75,
            })
            .to(camera.position, {
              ease: "sine.out",
              x: 10,
              y: 0.6,
              z: -83,
              duration: 1.75,
            });

          gsap.to(camera.rotation, {
            ease: "sine.inOut",
            x: 0,
            delay: 0.75,
            duration: 3,
          });

          gsap.to(camera.rotation, {
            ease: "sine.inOut",
            y: 0,
            delay: 1.5,
            duration: 1.5,
          });
        } else {
          const totalAnimationDuration = 3.5;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap.to(camera.position, {
            ease: "sine.inOut",
            x: 10,
            y: 0.6,
            z: -83,
            duration: totalAnimationDuration,
          });

          gsap.to(camera.rotation, {
            ease: "sine.out",
            x: 0,
            y: 0,
            z: 0,
            duration: totalAnimationDuration,
          });
        }

        setLastAnimationPlayed(jobExperienceTitleScrollProgress);
        break;
      }

      /**
       * Earth hero my origin
       */
      case heroMyOriginScrollProgress: {
        if (lastAnimationPlayed === heroMyOriginScrollProgress) return;

        const totalAnimationDuration = 2.25;

        // Unpause further scrolling when animation is finished
        gsap.killTweensOf(handleUnpauseScrolling);
        gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

        gsap.to(camera.position, {
          ease: "sine.out",
          x: 2.4,
          y: 0.6,
          z: -17.25,
          duration: totalAnimationDuration,
        });

        gsap.to(camera.rotation, {
          ease: "sine.out",
          x: 0.14,
          y: 2,
          z: -0.08,
          duration: totalAnimationDuration,
        });

        setLastAnimationPlayed(heroMyOriginScrollProgress);
        break;
      }

      /**
       * Earth hero about me
       */
      case heroAboutMeScrollProgress: {
        if (lastAnimationPlayed === heroAboutMeScrollProgress) return;

        // Change reverse animation
        if (previousScrollProgress === heroMyOriginScrollProgress) {
          const totalAnimationDuration = 3.5;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap
            .timeline()
            .to(camera.position, {
              ease: "power1.in",
              x: 2,
              y: 1,
              z: -16,
              duration: 1.75,
            })
            .to(camera.position, {
              ease: "power1.out",
              x: -4.62,
              y: -0.28,
              z: -7.44,
              duration: 1.75,
            });

          gsap.to(camera.rotation, {
            ease: "sine.out",
            x: 0.06,
            y: -0.46,
            z: 0,
            duration: totalAnimationDuration,
          });
        } else {
          const totalAnimationDuration = 3.5;

          // Unpause further scrolling when animation is finished
          gsap.killTweensOf(handleUnpauseScrolling);
          gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

          gsap.to(camera.position, {
            ease: "power4.out",
            x: -4.62,
            y: -0.28,
            z: -7.44,
            duration: totalAnimationDuration,
          });

          gsap.to(camera.rotation, {
            ease: "power4.out",
            x: 0.06,
            y: -0.46,
            z: 0.0,
            duration: totalAnimationDuration,
          });
        }

        setLastAnimationPlayed(heroAboutMeScrollProgress);
        break;
      }

      /**
       * Earth hero welcome text closeup
       */
      case heroWelcomeTextScrollProgress + 1: {
        if (lastAnimationPlayed === heroWelcomeTextScrollProgress + 1) return;

        const totalAnimationDuration = 1;

        // Unpause further scrolling when animation is finished
        gsap.killTweensOf(handleUnpauseScrolling);
        gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

        gsap.to(camera.position, {
          ease: "sine.inOut",
          x: 0.55,
          y: 0.6,
          z: -11.91,
          duration: totalAnimationDuration,
        });

        gsap.to(camera.rotation, {
          ease: "sine.inOut",
          x: 0.0,
          y: 3.3,
          z: 0.0,
          duration: totalAnimationDuration,
        });

        setLastAnimationPlayed(heroWelcomeTextScrollProgress + 1);
        break;
      }

      /**
       * Earth hero welcome text overview
       */
      case heroWelcomeTextScrollProgress: {
        const totalAnimationDuration = 1;

        // Unpause further scrolling when animation is finished
        gsap.killTweensOf(handleUnpauseScrolling);
        gsap.delayedCall(totalAnimationDuration, handleUnpauseScrolling);

        gsap.to(camera.position, {
          ease: "sine.inOut",
          x: 0.51,
          y: 0.6,
          z: -19.85,
          duration: totalAnimationDuration,
        });

        gsap.to(camera.rotation, {
          ease: "sine.inOut",
          x: 0.0,
          y: 2.78,
          z: 0.0,
          duration: totalAnimationDuration,
        });

        break;
      }
    }
  }, [
    camera,
    scrollProgress,
    lastAnimationPlayed,
    setIsScrollingPaused,
    previousScrollProgress,
    isScrollingPaused,
  ]);

  return null;
}

export default CameraControls;
