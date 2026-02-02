import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "../theme-logic/appStore";

const fonts = [
  { value: "Poppins", label: "Poppins" },
  { value: "Inter", label: "Inter" },
  { value: "Roboto", label: "Roboto" },
  { value: "Arial", label: "Arial" },
  { value: "Verdana", label: "Verdana" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Georgia", label: "Georgia" },
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
