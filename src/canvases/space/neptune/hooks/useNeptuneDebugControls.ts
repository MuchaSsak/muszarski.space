import { folder, useControls } from "leva";
import * as THREE from "three";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

function useNeptuneDebugControls() {
  const {
    uniforms: {
      uNeptuneAtmosphereDayColor,
      setUNeptuneAtmosphereDayColor,
      uNeptuneAtmosphereTwilightColor,
      setUNeptuneAtmosphereTwilightColor,
    },
  } = useSpaceContext();

  const controls = useControls(
    "Neptune 🔵",
    {
      Position: folder({
        "Spherical phi value": {
          min: 0,
          value: 1.56055,
          max: Math.PI,
        },

        "Spherical theta value": {
          min: -Math.PI,
          value: 1.68,
          max: Math.PI,
        },
      }),

      Atmosphere: folder({
        "Day color": {
          value: "#" + uNeptuneAtmosphereDayColor.getHexString(),
          onChange: (newValue) => {
            setUNeptuneAtmosphereDayColor(new THREE.Color(newValue));
          },
        },
        "Twilight color": {
          value: "#" + uNeptuneAtmosphereTwilightColor.getHexString(),
          onChange: (newValue) => {
            setUNeptuneAtmosphereTwilightColor(new THREE.Color(newValue));
          },
        },
      }),
    },
    { collapsed: true, color: "#5468FF" }
  );

  return controls;
}

export default useNeptuneDebugControls;
