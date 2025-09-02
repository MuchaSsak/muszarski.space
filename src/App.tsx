import { Suspense } from "react";

import SpaceCanvas from "@/canvases/space/SpaceCanvas";
import AnimateDocumentTitle from "@/components/AnimateDocumentTitle";
import DebugUI from "@/components/DebugUI";
import MobileWarning from "@/components/MobileWarning";
import Providers from "@/components/Providers";
import ScrollIndicator from "@/components/ScrollIndicator";
import StartupScreen from "@/components/StartupScreen";
import Toaster from "@/components/Toaster";
import TopBar from "@/components/TopBar";

function App() {
  return (
    <Providers>
      {/* Leva debug UI */}
      <DebugUI />

      {/* Notifications toaster */}
      <Toaster />

      {/* TopBar */}
      <TopBar />

      {/* Startup loading/menu screen */}
      <StartupScreen />

      {/* 3D space canvas */}
      <Suspense>
        <SpaceCanvas />
      </Suspense>

      {/* Document title changer */}
      <AnimateDocumentTitle />

      {/* Bottom scroll indicator */}
      <ScrollIndicator />

      {/* Mobile warning overlay */}
      <MobileWarning />
    </Providers>
  );
}

export default App;
