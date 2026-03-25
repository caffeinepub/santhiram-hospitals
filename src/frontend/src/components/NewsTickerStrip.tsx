import { Rss } from "lucide-react";

const newsItems = [
  "Santhiram Hospital launches new Robotic Surgery Unit — Nandyal's first",
  "WHO: Early cancer screening reduces mortality by 30% — Book your screening today",
  "New Cardiac ICU wing now operational — 24/7 specialist coverage",
  "Health tip: Regular blood pressure checks can prevent 50% of strokes",
  "Santhiram wins 'Best Hospital in Rayalaseema' award 2024",
  "Free diabetes screening camp this Sunday — Register now",
  "New MRI scanner installed — Faster & more accurate diagnostics",
  "World Heart Day: Santhiram cardiologists offer free consultations",
];

const doubled = [...newsItems, ...newsItems];

export function NewsTickerStrip() {
  return (
    <div
      className="relative overflow-hidden py-1.5"
      style={{ background: "linear-gradient(90deg, #0A4D8C 0%, #4DA8DA 100%)" }}
      data-ocid="news_ticker.panel"
    >
      <div className="flex items-center">
        {/* Label */}
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-white/20 px-3 py-0.5 z-10 mr-3">
          <Rss className="w-3 h-3 text-white" />
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            Health News
          </span>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-animate">
            {doubled.map((item, idx) => (
              <span
                key={`ticker-${idx}-${item.slice(0, 10)}`}
                className="text-white text-xs font-medium px-6 flex-shrink-0"
              >
                <span className="text-white/60 mr-2">●</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
