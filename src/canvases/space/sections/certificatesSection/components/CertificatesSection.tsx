import JupiterModel from "@/canvases/space/jupiter/components/JupiterModel";
import CertificatesList from "@/canvases/space/sections/certificatesSection/components/CertificatesList";
import CertificatesTitle from "@/canvases/space/sections/certificatesSection/components/CertificatesTitle";

function CertificatesSection() {
  return (
    <>
      <JupiterModel />

      <CertificatesTitle />
      <CertificatesList />
    </>
  );
}

export default CertificatesSection;
