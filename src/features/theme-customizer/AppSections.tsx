import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";
import AppBar from "./theme-sections/Appbar";
import AppHeader from "./theme-sections/AppHeader";
import AppCategories from "./theme-sections/AppCategories";
import AppHeroBanner from "./theme-sections/AppHeroBanner";
import AppProductCard from "./theme-sections/AppProductCard";

export default function AppSections() {
  const { t } = useTranslation();

  return (
    <div className="flex-1 py-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 p-2">
        <button className="cursor-pointer">
          <img src="/arrow-left.svg" alt="arrow-right" />
        </button>

        <h1 className="text-[18px] flex items-center gap-2">
          <img src="/app.svg" alt="sidebar-left" />
          {t("customizer.app_sections")}
        </h1>
      </div>

      <Accordion type="single" collapsible defaultValue="app-header">
        <AccordionItem value="app-header">
          <AccordionTrigger className="text-[16px] text-[#1A0F04] px-3 py-4">
            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                <img src="/drag.svg" alt="drag" />
              </button>
              <button className="cursor-pointer">
                <img src="/view.svg" alt="view" />
              </button>
              <button className="cursor-pointer">
                <img src="/rectangular.svg" alt="rectangular" />
              </button>
              {t("customizer.app_bar")}
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4 px-4 py-2 min-w-0">
            <ScrollArea className="h-64 w-full pl-4 min-w-0">
              <AppHeader />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sliding-banner">
          <AccordionTrigger className="text-[16px] text-[#1A0F04] p-4">
            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                <img src="/drag.svg" alt="drag" />
              </button>
              <button className="cursor-pointer">
                <img src="/view.svg" alt="view" />
              </button>
              <button className="cursor-pointer">
                <img src="/rectangular.svg" alt="rectangular" />
              </button>
              {t("customizer.sliding_banner")}
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4 px-4 py-2 min-w-0">
            <ScrollArea className="h-64 w-full pl-4 min-w-0">
              <AppHeroBanner />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="categories">
          <AccordionTrigger className="text-[16px] text-[#1A0F04] p-4">
            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                <img src="/drag.svg" alt="drag" />
              </button>
              <button className="cursor-pointer">
                <img src="/view.svg" alt="view" />
              </button>
              <button className="cursor-pointer">
                <img src="/cats.svg" alt="rectangular" />
              </button>
              {t("customizer.categories_section")}
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4 px-4 py-2">
            <ScrollArea className="h-64 w-full pl-4">
              <AppCategories />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="product-card">
          <AccordionTrigger className="text-[16px] text-[#1A0F04] p-4">
            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                <img src="/drag.svg" alt="drag" />
              </button>
              <button className="cursor-pointer">
                <img src="/view.svg" alt="view" />
              </button>
              <button className="cursor-pointer">
                <img src="/rectangular.svg" alt="rectangular" />
              </button>
              {t("customizer.product_card")}
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4">
            <ScrollArea className="h-64 w-full pl-4 min-w-0 px-4">
              <AppProductCard />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bottom-bar">
          <AccordionTrigger className="text-[16px] text-[#1A0F04] p-4">
            <div className="flex items-center gap-2">
              <button className="cursor-pointer">
                <img src="/drag.svg" alt="drag" />
              </button>
              <button className="cursor-pointer">
                <img src="/view.svg" alt="view" />
              </button>
              <button className="cursor-pointer">
                <img src="/rectangular.svg" alt="rectangular" />
              </button>
              {t("customizer.bottom_bar")}
            </div>
          </AccordionTrigger>

          <AccordionContent className="px-4 py-2">
            <ScrollArea className="h-64 w-full pl-4">
              <AppBar />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
