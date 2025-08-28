import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

import { useSettingsContext } from "@/contexts/SettingsContext";

function useLoadSaturnTextures() {
  const { anisotropy } = useSettingsContext();

  const loadedTextures = useTexture([
    "/assets/textures/saturn/2k_saturn.jpg",
    "/assets/textures/saturn/2k_saturn_ring.png",
  ]);

  const textures = useMemo(() => {
    const [saturnTexture, saturnRingTexture] = loadedTextures;

    // Change colorSpace for diffuse textures
    saturnTexture.colorSpace = THREE.SRGBColorSpace;
    saturnRingTexture.colorSpace = THREE.SRGBColorSpace;

    // Change anisotropy according to the settings
    saturnTexture.anisotropy = anisotropy;
    saturnRingTexture.anisotropy = anisotropy;

    // Update the textures
    saturnTexture.needsUpdate = true;

    return [saturnTexture, saturnRingTexture];
  }, [loadedTextures, anisotropy]);

  return textures;
}

export default useLoadSaturnTextures;
