import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

import { useSettingsContext } from "@/contexts/SettingsContext";

function useLoadMarsTextures() {
  const { anisotropy } = useSettingsContext();

  const loadedTextures = useTexture(["/assets/textures/mars/2k_mars.jpg"]);

  const textures = useMemo(() => {
    const [marsTexture] = loadedTextures;

    // Change colorSpace for diffuse textures
    marsTexture.colorSpace = THREE.SRGBColorSpace;

    // Change anisotropy according to the settings
    marsTexture.anisotropy = anisotropy;

    // Update the textures
    marsTexture.needsUpdate = true;

    return [marsTexture];
  }, [loadedTextures, anisotropy]);

  return textures;
}

export default useLoadMarsTextures;
