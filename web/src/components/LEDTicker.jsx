import React from "react";

const TEXT =
  "Bu web sitesi gösterim amacıyla hazırlanmış bir demo sayfasıdır — Mustafa Öner | MK Digital Systems";

function LEDTicker() {
  return (
    <div
      className="led-ticker relative z-[60] overflow-hidden bg-black py-2 text-center"
      role="marquee"
      aria-label="Demo bildirimi"
    >
      <div className="led-ticker-inner flex w-max items-center gap-16">
        <span className="led-text font-mono text-amber-400 whitespace-nowrap text-sm tracking-widest tabular-nums">
          {TEXT}
        </span>
        <span className="led-text font-mono text-amber-400 whitespace-nowrap text-sm tracking-widest tabular-nums">
          {TEXT}
        </span>
      </div>
    </div>
  );
}

export default LEDTicker;
