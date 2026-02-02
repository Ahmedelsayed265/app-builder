import { colors_fields } from "@/utils/constants";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../theme-logic/appStore";

export default function Colors() {
  const { t } = useTranslation();
  const { colors, setColor } = useThemeStore();

  const handleColorChange = (name: string, value: string) => {
    setColor(name, value);
  };

  return (
    <>
      {colors_fields.map((field) => (
        <div
          key={field.field}
          className="flex items-center gap-4 border border-[#F3F4F6] bg-[#FAFAFA] rounded-full p-2 px-3"
        >
          <div className="relative w-12 h-12 shrink-0">
            <input
              type="color"
              name={field.field}
              id={field.field}
              value={colors[field.field]}
              onChange={(e) => handleColorChange(field.field, e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div
              className="w-full h-full rounded-full border border-[#E5E7EB] shadow-sm"
              style={{ backgroundColor: colors[field.field] }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <h6 className="text-[#1A0F04] text-[16px] font-medium leading-tight">
              {t(`customizer.${field.field}`)}
            </h6>
            <p className="text-[#595959] text-[14px] mt-1 leading-tight">
              {t(`customizer.${field.field}_desc`)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
