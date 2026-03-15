import React from "react";
import { cn } from "@/lib/utils";

function SectionBackground({ image, children, className, overlayClassName }) {
  return (
    <section className={cn("relative py-24", className)}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="section-bg-image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className={cn("section-bg-overlay", overlayClassName)} />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export default SectionBackground;

