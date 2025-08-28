import { useEffect } from "react";

import { useSpaceContext } from "@/canvases/space/contexts/SpaceContext";

function useUpdateShaderUniforms(shaderMaterialRef: React.RefObject<any>) {
  const { uniforms } = useSpaceContext();

  useEffect(() => {
    if (!shaderMaterialRef.current) return;

    for (const [key, value] of Object.entries(uniforms)) {
      shaderMaterialRef.current[key] = value;
    }
  }, [shaderMaterialRef, uniforms]);
}

export default useUpdateShaderUniforms;
