import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useThemeStore, type ButtonShape } from "../theme-logic/appStore";

const shapes: { id: ButtonShape; label: string; radius: string }[] = [
  { id: "rounded", label: "rounded_button", radius: "rounded-full" },
  { id: "square", label: "square_button", radius: "rounded-[12px]" },
  { id: "sharp", label: "sharp_button", radius: "rounded-none" },
];

export default function Buttons() {
  const { t } = useTranslation();
  const { buttonShape, setButtonShape } = useThemeStore();

  return (
    <div className="flex items-center gap-2 w-full" dir="rtl">
      {shapes.map((shape) => (
        <button
          key={shape.id}
          onClick={() => setButtonShape(shape.id)}
          className={cn(
            "flex-1 h-12 flex items-center justify-center border transition-all cursor-pointer text-[16px] font-medium",
            shape.radius,
            buttonShape === shape.id
              ? "bg-[#0089C7] border-[#0089C7] text-white shadow-sm"
              : "bg-white border-[#E5E7EB] text-[#595959] hover:border-[#0089C7]",
          )}
        >
          {t(`customizer.${shape.label}`)}
        </button>
      ))}
    </div>
  );
}
