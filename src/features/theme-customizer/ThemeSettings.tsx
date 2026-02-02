import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import Colors from "./theme-settings/Colors";
import Font from "./theme-settings/Font";
import Buttons from "./theme-settings/Buttons";

export default function ThemeSettings() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 py-8 px-4 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-[18px] flex items-center gap-2">
          <img src="/sidebar-left.svg" className="w-6 h-6" alt="sidebar-left" />
          {t("customizer.theme_style_settings")}
        </h1>

        <button className="cursor-pointer">
          <img src="/arrow-right.svg" className="w-6 h-6" alt="arrow-right" />
        </button>
      </div>

      <Accordion type="single" collapsible defaultValue="theme-color">
        <AccordionItem value="theme-color">
          <AccordionTrigger className="text-[16px] text-[#1A0F04]">
            <div className="flex items-center gap-2">
              <img src="/color.svg" alt="color" />
              {t("customizer.theme_color")}
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4">
            <Colors />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="theme-font">
          <AccordionTrigger className="text-[16px] text-[#1A0F04]">
            <div className="flex items-center gap-2">
              <img src="/font.svg" alt="font" />
              {t("customizer.theme_font")}
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <Font />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="theme-buttons-shape">
          <AccordionTrigger className="text-[16px] text-[#1A0F04]">
            <div className="flex items-center gap-2">
              <img src="/square.svg" alt="square" />
              {t("customizer.theme_buttons_shape")}
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <Buttons />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
