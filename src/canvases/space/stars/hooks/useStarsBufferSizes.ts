import { useMemo } from "react";

function useStarsBufferSizes(starsCount: number) {
  const bufferSizes = useMemo(() => {
    const bufferSizes = [];

    for (let i = 0; i < starsCount; i++) {
      bufferSizes.push(Math.random() + 0.5);
    }

    return bufferSizes;
  }, [starsCount]);

  return new Float32Array(bufferSizes);
}

export default useStarsBufferSizes;
