import { Toaster as Sonner } from "sonner";

function Toaster() {
  return (
    <Sonner
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      position="top-center"
      richColors
      theme="dark"
    />
  );
}

export default Toaster;
