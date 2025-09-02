import EarthModel from "@/canvases/space/earth/components/EarthModel";
import HeroAboutMe from "@/canvases/space/sections/heroSection/components/HeroAboutMe";
import HeroMyOrigin from "@/canvases/space/sections/heroSection/components/HeroMyOrigin";
import HeroWelcomeText from "@/canvases/space/sections/heroSection/components/HeroWelcomeText";

function HeroSection() {
  return (
    <>
      <EarthModel />

      <HeroWelcomeText />
      <HeroAboutMe />
      <HeroMyOrigin />
    </>
  );
}

export default HeroSection;
