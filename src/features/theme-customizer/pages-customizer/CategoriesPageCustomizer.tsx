import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslation } from "react-i18next";

export default function CategoriesPageCustomizer() {
  const { t } = useTranslation();

  return (
    <Accordion type="single" collapsible defaultValue="categories-page">
      <AccordionItem value="categories-page">
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
            {t("customizer.available_shapes")}
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 px-4 py-2 min-w-0">
          <ScrollArea className="h-full w-full pl-4 min-w-0">
           
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
