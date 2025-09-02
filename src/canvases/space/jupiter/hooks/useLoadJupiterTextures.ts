import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

import { useSettingsContext } from "@/contexts/SettingsContext";

function useLoadJupiterTextures() {
  const { anisotropy } = useSettingsContext();

  const loadedTextures = useTexture([
    "/assets/textures/jupiter/2k_jupiter.jpg",
  ]);

  const textures = useMemo(() => {
    const [jupiterTexture] = loadedTextures;

    // Change colorSpace for diffuse textures
    jupiterTexture.colorSpace = THREE.SRGBColorSpace;

    // Change anisotropy according to the settings
    jupiterTexture.anisotropy = anisotropy;

    // Update the textures
    jupiterTexture.needsUpdate = true;

    return [jupiterTexture];
  }, [loadedTextures, anisotropy]);

  return textures;
}

export default useLoadJupiterTextures;
