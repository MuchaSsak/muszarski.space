import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

import { useSettingsContext } from "@/contexts/SettingsContext";

function useLoadEarthTextures() {
  const { anisotropy } = useSettingsContext();

  const loadedTextures = useTexture([
    "/assets/textures/earth/2k_earth_daymap.jpg",
    "/assets/textures/earth/2k_earth_nightmap.jpg",
    "/assets/textures/earth/2k_earth_specular_clouds.jpg",
  ]);

  const textures = useMemo(() => {
    const [earthDayTexture, earthNightTexture, earthSpecularCloudsTexture] =
      loadedTextures;

    // Change colorSpace for diffuse textures
    earthDayTexture.colorSpace = THREE.SRGBColorSpace;
    earthNightTexture.colorSpace = THREE.SRGBColorSpace;

    // Change anisotropy according to the settings
    earthDayTexture.anisotropy = anisotropy;
    earthNightTexture.anisotropy = anisotropy;
    earthSpecularCloudsTexture.anisotropy = anisotropy;

    // Update the textures
    earthDayTexture.needsUpdate = true;
    earthNightTexture.needsUpdate = true;
    earthSpecularCloudsTexture.needsUpdate = true;

    return [earthDayTexture, earthNightTexture, earthSpecularCloudsTexture];
  }, [loadedTextures, anisotropy]);

  return textures;
}

export default useLoadEarthTextures;
