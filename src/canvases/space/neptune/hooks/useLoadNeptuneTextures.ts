import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

import { useSettingsContext } from "@/contexts/SettingsContext";

function useLoadNeptuneTextures() {
  const { anisotropy } = useSettingsContext();

  const loadedTextures = useTexture([
    "/assets/textures/neptune/2k_neptune.jpg",
  ]);

  const textures = useMemo(() => {
    const [neptuneTexture] = loadedTextures;

    // Change colorSpace for diffuse textures
    neptuneTexture.colorSpace = THREE.SRGBColorSpace;

    // Change anisotropy according to the settings
    neptuneTexture.anisotropy = anisotropy;

    // Update the textures
    neptuneTexture.needsUpdate = true;

    return [neptuneTexture];
  }, [loadedTextures, anisotropy]);

  return textures;
}

export default useLoadNeptuneTextures;
