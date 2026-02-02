import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { ScrollArea } from "@/components/ui/scroll-area";
import AppHeader from "../theme-sections/home/AppHeader";
import AppHeroBanner from "../theme-sections/home/AppHeroBanner";
import AppCategories from "../theme-sections/home/AppCategories";
import AppProductCard from "../theme-sections/home/AppProductCard";
import AppBar from "../theme-sections/home/Appbar";

export default function HomePageCustomizer() {
  const { t } = useTranslation();

  return (
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

        <AccordionContent className="flex flex-col gap-4 px-4 py-2 min-w-0">
          <ScrollArea className="h-80 w-full pl-4 min-w-0">
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
  );
}
