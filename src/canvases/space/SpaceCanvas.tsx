import { LensFlare } from "@andersonmancini/lens-flare";
import { Canvas } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import { lazy, Suspense } from "react";

// Lazy imports for code splitting
import useLensFlareDebugControls from "@/canvases/hooks/useLensFlareDebugControls";
import { useSettingsContext } from "@/contexts/SettingsContext";
const CameraControls = lazy(
  () => import("@/canvases/space/components/CameraControls")
);
const Lighting = lazy(() => import("@/canvases/space/components/Lighting"));
const SpaceContextProvider = lazy(() =>
  import("@/canvases/space/contexts/SpaceContext").then((module) => ({
    default: module.SpaceContextProvider,
  }))
);
const StarsModel = lazy(
  () => import("@/canvases/space/stars/components/StarsModel")
);
const HeroSection = lazy(
  () => import("@/canvases/space/sections/heroSection/components/HeroSection")
);
const JobExperienceSection = lazy(
  () =>
    import(
      "@/canvases/space/sections/jobExperienceSection/components/JobExperienceSection"
    )
);
const CertificatesSection = lazy(
  () =>
    import(
      "@/canvases/space/sections/certificatesSection/components/CertificatesSection"
    )
);
const ProjectsSection = lazy(
  () =>
    import(
      "@/canvases/space/sections/projectsSection/components/ProjectsSection"
    )
);
const ContactSection = lazy(
  () =>
    import("@/canvases/space/sections/contactSection/components/ContactSection")
);

function SpaceCanvas() {
  const { toneMapping, depth, antialias, multisampling } = useSettingsContext();
  const lensFlareControls = useLensFlareDebugControls();
  const isDebugMode = window.location.hash === "#debug";

  return (
    <Canvas
      gl={{
        toneMapping,
        antialias,
        depth,
      }}
      camera={{
        fov: 45,
        far: 3000,
        position: [0.51, 0.6, -19.85],
        rotation: [0.0, 2.78, 0.0],
      }}
    >
      {/* Camera controls */}
      <CameraControls />

      {/* Lighting */}
      <Lighting />

      {/* Performance monitor */}
      {isDebugMode && <Perf position="top-left" />}

      {/* Post processing */}
      <EffectComposer multisampling={multisampling}>
        <>
          {/* Lens flare */}
          <LensFlare
            {...lensFlareControls}
            dirtTextureFile="/assets/textures/sun/lens_dirt_texture.jpg"
          />
        </>
      </EffectComposer>

      <Suspense fallback={null}>
        <SpaceContextProvider>
          {/* Models */}
          <StarsModel />

          {/* Sections */}
          <HeroSection />
          <JobExperienceSection />
          <CertificatesSection />
          <ProjectsSection />
          <ContactSection />
        </SpaceContextProvider>
      </Suspense>
    </Canvas>
  );
}

export default SpaceCanvas;
