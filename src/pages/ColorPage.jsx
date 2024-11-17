import { useState } from "react";
import CommonLayout from "../components/layout/CommonLayout";

// List of Tailwind CSS colors and shades with HEX values
const colors = {
  slate: [
    { shade: "50", hex: "#f8fafc" },
    { shade: "100", hex: "#f1f5f9" },
    { shade: "200", hex: "#e2e8f0" },
    { shade: "300", hex: "#cfd8e3" },
    { shade: "400", hex: "#a5b4b8" },
    { shade: "500", hex: "#6b7280" },
    { shade: "600", hex: "#4b5563" },
    { shade: "700", hex: "#374151" },
    { shade: "800", hex: "#1f2937" },
    { shade: "900", hex: "#0f172a" },
    { shade: "950", hex: "#020617" },
  ],
  gray: [
    { shade: "50", hex: "#fafafa" },
    { shade: "100", hex: "#f4f4f5" },
    { shade: "200", hex: "#e4e4e7" },
    { shade: "300", hex: "#d4d4d8" },
    { shade: "400", hex: "#a1a1aa" },
    { shade: "500", hex: "#6b6b6b" },
    { shade: "600", hex: "#525252" },
    { shade: "700", hex: "#404040" },
    { shade: "800", hex: "#262626" },
    { shade: "900", hex: "#171717" },
    { shade: "950", hex: "#0a0a0a" },
  ],
  zinc: [
    { shade: "50", hex: "#fafafa" },
    { shade: "100", hex: "#f4f4f5" },
    { shade: "200", hex: "#e4e4e7" },
    { shade: "300", hex: "#d4d4d8" },
    { shade: "400", hex: "#a1a1aa" },
    { shade: "500", hex: "#6b6b6b" },
    { shade: "600", hex: "#525252" },
    { shade: "700", hex: "#404040" },
    { shade: "800", hex: "#262626" },
    { shade: "900", hex: "#171717" },
    { shade: "950", hex: "#0a0a0a" },
  ],
  neutral: [
    { shade: "50", hex: "#fafafa" },
    { shade: "100", hex: "#f5f5f5" },
    { shade: "200", hex: "#e5e5e5" },
    { shade: "300", hex: "#d4d4d4" },
    { shade: "400", hex: "#a3a3a3" },
    { shade: "500", hex: "#737373" },
    { shade: "600", hex: "#525252" },
    { shade: "700", hex: "#404040" },
    { shade: "800", hex: "#262626" },
    { shade: "900", hex: "#171717" },
    { shade: "950", hex: "#0a0a0a" },
  ],
  stone: [
    { shade: "50", hex: "#fafaf9" },
    { shade: "100", hex: "#f5f5f4" },
    { shade: "200", hex: "#e7e5e4" },
    { shade: "300", hex: "#d6d3d1" },
    { shade: "400", hex: "#a8a29e" },
    { shade: "500", hex: "#78716c" },
    { shade: "600", hex: "#57534e" },
    { shade: "700", hex: "#44403c" },
    { shade: "800", hex: "#292524" },
    { shade: "900", hex: "#1c1917" },
    { shade: "950", hex: "#0f0d0b" },
  ],
  red: [
    { shade: "50", hex: "#fef2f2" },
    { shade: "100", hex: "#fee2e2" },
    { shade: "200", hex: "#fecaca" },
    { shade: "300", hex: "#fca5a5" },
    { shade: "400", hex: "#f87171" },
    { shade: "500", hex: "#ef4444" },
    { shade: "600", hex: "#dc2626" },
    { shade: "700", hex: "#b91c1c" },
    { shade: "800", hex: "#991b1b" },
    { shade: "900", hex: "#7f1d1d" },
    { shade: "950", hex: "#450a0a" },
  ],
  orange: [
    { shade: "50", hex: "#fff7ed" },
    { shade: "100", hex: "#ffedd5" },
    { shade: "200", hex: "#fed7aa" },
    { shade: "300", hex: "#fdba74" },
    { shade: "400", hex: "#fb923c" },
    { shade: "500", hex: "#f97316" },
    { shade: "600", hex: "#ea580c" },
    { shade: "700", hex: "#c2410c" },
    { shade: "800", hex: "#9a3412" },
    { shade: "900", hex: "#7c2d12" },
    { shade: "950", hex: "#3f1e0e" },
  ],
  amber: [
    { shade: "50", hex: "#fffbeb" },
    { shade: "100", hex: "#fef3c7" },
    { shade: "200", hex: "#fde68a" },
    { shade: "300", hex: "#fcd34d" },
    { shade: "400", hex: "#fbbf24" },
    { shade: "500", hex: "#f59e0b" },
    { shade: "600", hex: "#d97706" },
    { shade: "700", hex: "#b45309" },
    { shade: "800", hex: "#9a3c0c" },
    { shade: "900", hex: "#7e2a1d" },
    { shade: "950", hex: "#441d03" },
  ],
  yellow: [
    { shade: "50", hex: "#fefce8" },
    { shade: "100", hex: "#fef9c3" },
    { shade: "200", hex: "#fef08a" },
    { shade: "300", hex: "#fde047" },
    { shade: "400", hex: "#facc15" },
    { shade: "500", hex: "#eab308" },
    { shade: "600", hex: "#ca8a04" },
    { shade: "700", hex: "#a16207" },
    { shade: "800", hex: "#854d0e" },
    { shade: "900", hex: "#713f12" },
    { shade: "950", hex: "#422006" },
  ],
  lime: [
    { shade: "50", hex: "#f7fee7" },
    { shade: "100", hex: "#ecfccb" },
    { shade: "200", hex: "#d9f99d" },
    { shade: "300", hex: "#bef264" },
    { shade: "400", hex: "#a3e635" },
    { shade: "500", hex: "#84cc16" },
    { shade: "600", hex: "#65a30d" },
    { shade: "700", hex: "#4d7c0f" },
    { shade: "800", hex: "#3f6212" },
    { shade: "900", hex: "#365314" },
    { shade: "950", hex: "#1e2a1a" },
  ],
  green: [
    { shade: "50", hex: "#f0fdf4" },
    { shade: "100", hex: "#dcfce7" },
    { shade: "200", hex: "#bbf7d0" },
    { shade: "300", hex: "#86efac" },
    { shade: "400", hex: "#4ade80" },
    { shade: "500", hex: "#22c55e" },
    { shade: "600", hex: "#16a34a" },
    { shade: "700", hex: "#15803d" },
    { shade: "800", hex: "#166534" },
    { shade: "900", hex: "#14532d" },
    { shade: "950", hex: "#083d1d" },
  ],
  emerald: [
    { shade: "50", hex: "#d1fae5" },
    { shade: "100", hex: "#a7f3d0" },
    { shade: "200", hex: "#6ee7b7" },
    { shade: "300", hex: "#34d399" },
    { shade: "400", hex: "#10b981" },
    { shade: "500", hex: "#059669" },
    { shade: "600", hex: "#047857" },
    { shade: "700", hex: "#065f46" },
    { shade: "800", hex: "#064e3b" },
    { shade: "900", hex: "#033d29" },
    { shade: "950", hex: "#012e1b" },
  ],
  teal: [
    { shade: "50", hex: "#f0fdfa" },
    { shade: "100", hex: "#ccfbf1" },
    { shade: "200", hex: "#99f6e4" },
    { shade: "300", hex: "#5eead4" },
    { shade: "400", hex: "#26d9a4" },
    { shade: "500", hex: "#14b8a6" },
    { shade: "600", hex: "#0d9488" },
    { shade: "700", hex: "#0f766e" },
    { shade: "800", hex: "#115e59" },
    { shade: "900", hex: "#134e4a" },
    { shade: "950", hex: "#062a24" },
  ],
  cyan: [
    { shade: "50", hex: "#ecfeff" },
    { shade: "100", hex: "#cffafe" },
    { shade: "200", hex: "#a5f3fc" },
    { shade: "300", hex: "#67e8f9" },
    { shade: "400", hex: "#22d3ee" },
    { shade: "500", hex: "#06b6d4" },
    { shade: "600", hex: "#0891b2" },
    { shade: "700", hex: "#0e7490" },
    { shade: "800", hex: "#155e75" },
    { shade: "900", hex: "#164e63" },
    { shade: "950", hex: "#083044" },
  ],
  sky: [
    { shade: "50", hex: "#f0f9ff" },
    { shade: "100", hex: "#e0f2fe" },
    { shade: "200", hex: "#bae6fd" },
    { shade: "300", hex: "#7dd3fc" },
    { shade: "400", hex: "#38bdf8" },
    { shade: "500", hex: "#0ea5e9" },
    { shade: "600", hex: "#0284c7" },
    { shade: "700", hex: "#0369a1" },
    { shade: "800", hex: "#075985" },
    { shade: "900", hex: "#0c4a6e" },
    { shade: "950", hex: "#082f49" },
  ],
  blue: [
    { shade: "50", hex: "#eff6ff" },
    { shade: "100", hex: "#dbeafe" },
    { shade: "200", hex: "#bfdbfe" },
    { shade: "300", hex: "#93c5fd" },
    { shade: "400", hex: "#60a5fa" },
    { shade: "500", hex: "#3b82f6" },
    { shade: "600", hex: "#2563eb" },
    { shade: "700", hex: "#1d4ed8" },
    { shade: "800", hex: "#1e40af" },
    { shade: "900", hex: "#1e3a8a" },
    { shade: "950", hex: "#172554" },
  ],
  indigo: [
    { shade: "50", hex: "#eef2ff" },
    { shade: "100", hex: "#e0e7ff" },
    { shade: "200", hex: "#c7d2fe" },
    { shade: "300", hex: "#a5b4fc" },
    { shade: "400", hex: "#818cf8" },
    { shade: "500", hex: "#6366f1" },
    { shade: "600", hex: "#4f46e5" },
    { shade: "700", hex: "#4338ca" },
    { shade: "800", hex: "#3730a3" },
    { shade: "900", hex: "#312e81" },
    { shade: "950", hex: "#1e1b4b" },
  ],
  violet: [
    { shade: "50", hex: "#f5f3ff" },
    { shade: "100", hex: "#ede9fe" },
    { shade: "200", hex: "#ddd6fe" },
    { shade: "300", hex: "#c4b5fd" },
    { shade: "400", hex: "#a78bfa" },
    { shade: "500", hex: "#8b5cf6" },
    { shade: "600", hex: "#7c3aed" },
    { shade: "700", hex: "#6d28d9" },
    { shade: "800", hex: "#5b21b6" },
    { shade: "900", hex: "#4c1d95" },
    { shade: "950", hex: "#2e1065" },
  ],
  purple: [
    { shade: "50", hex: "#f5f3ff" },
    { shade: "100", hex: "#ede9fe" },
    { shade: "200", hex: "#ddd6fe" },
    { shade: "300", hex: "#c4b5fd" },
    { shade: "400", hex: "#a78bfa" },
    { shade: "500", hex: "#8b5cf6" },
    { shade: "600", hex: "#7c3aed" },
    { shade: "700", hex: "#6d28d9" },
    { shade: "800", hex: "#5b21b6" },
    { shade: "900", hex: "#4c1d95" },
    { shade: "950", hex: "#2e1065" },
  ],
};

export default function ColorPage() {
  const [copied, setCopied] = useState("");

  // Copy to clipboard function
  const handleCopy = (value) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value)
        .then(() => {
          setCopied(value);
          setTimeout(() => setCopied(""), 2000);
        })
        .catch((err) => {
          console.error("Clipboard API failed: ", err);
        });
    } else {
      // Fallback for browsers that don't support Clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(value);
      setTimeout(() => setCopied(""), 2000);
    }
  };
  

  return (
    <CommonLayout>
      <div className="w-full flex flex-col gap-8 my-10">
        <div className="border-b border-neutral-800 pb-2">
          <h1 className="text-2xl font-bold mb-2">Tailwind Colors</h1>
          <p className="text-sm text-neutral-400">
            Tailwind CSS colors in className and HEX formats.
          </p>
        </div>
        <div className="w-full flex flex-col gap-6">
          {Object.keys(colors).map((color) => (
            <div key={color} className="mb-4 border rounded-lg border-neutral-800 p-4 min-h-56 pb-8">
              <h2 className="font-medium mb-2">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-11 gap-10 lg:gap-4">
                {colors[color].map(({ shade, hex }) => (
                  <div
                    key={`${color}-${shade}`}
                    className="h-32 w-full lg:w-28 text-center"
                  >
                    <button
                      onClick={() => handleCopy(hex)}
                      className={`h-full rounded-lg w-full ${`bg-${color}-${shade}`}`}
                      title={`${color}-${shade}`}
                    >
                      {copied === hex ? "Copied!" : hex}
                    </button>
                    <span className="text-xs text-neutral-400">{`${color}-${shade}`}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
}
