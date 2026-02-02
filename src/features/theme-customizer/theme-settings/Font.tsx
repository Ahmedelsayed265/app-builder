import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../appStore";

const fonts = [
  { value: "Rubik", label: "Rubik" },
  { value: "Cairo", label: "Cairo" },
  { value: "Tajawal", label: "Tajawal" },
  { value: "Almarai", label: "Almarai" },
  { value: "Noto Sans Arabic", label: "Noto Sans Arabic" },
  { value: "IBM Plex Sans Arabic", label: "IBM Plex Sans Arabic" },
  { value: "Noto Kufi Arabic", label: "Noto Kufi Arabic" },
  { value: "Changa", label: "Changa" },
  { value: "Amiri", label: "Amiri" },
  { value: "Noto Naskh Arabic", label: "Noto Naskh Arabic" },
  { value: "El Messiri", label: "El Messiri" },
  { value: "Mada", label: "Mada" },
];

export default function Font() {
  const { t } = useTranslation();
  const { font, setFont } = useThemeStore();

  return (
    <Select value={font} onValueChange={setFont}>
      <SelectTrigger className="w-full px-4 h-[48px]! rounded-[8px] border-[#f4f4f4] bg-[#fafafa]">
        <SelectValue placeholder={t("customizer.font")} />
      </SelectTrigger>
      <SelectContent>
        {fonts.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
