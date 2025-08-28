import { Leva } from "leva";

function DebugUI() {
  return (
    <div className="w-[30vw] max-h-[75vh] overflow-y-scroll fixed right-0 top-0 z-[100]">
      <Leva
        hidden={window.location.hash !== "#debug"}
        collapsed
        oneLineLabels
        titleBar={{ title: "Debug UI 🛠️" }}
        fill
      />
    </div>
  );
}

export default DebugUI;
