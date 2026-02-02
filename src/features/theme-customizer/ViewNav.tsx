import { useTranslation } from "react-i18next";
import { useThemeStore } from "./appStore";
import type { Page } from "./appStore";

export default function ViewNav() {
  const { t } = useTranslation();
  const { activePage, setActivePage } = useThemeStore();

  return (
    <div className="flex items-center justify-between py-4 px-10">
      <div className="flex items-center gap-8">
        {[
          { id: "home", label: t("customizer.home") },
          { id: "categories", label: t("customizer.categories") },
          { id: "product-details", label: t("customizer.product_details") },
          { id: "cart", label: t("customizer.cart") },
        ].map((page) => (
          <button
            key={page.id}
            className={`text-[16px] relative py-2 transition-colors duration-300 group cursor-pointer ${
              activePage === page.id
                ? "text-[#1A0F04]"
                : "text-[#595959] hover:text-[#1A0F04]"
            }`}
            onClick={() => setActivePage(page.id as Page)}
          >
            {page.label}
            <div
              className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-[#0089C7] rounded-full transition-all duration-300 origin-center ${
                activePage === page.id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-[#E5F7FF] text-[#595959] px-4 py-3 rounded-[8px] cursor-pointer">
          <img src="/eye.svg" alt="" />
          {t("customizer.view")}
        </button>

        <button className="flex items-center gap-2 bg-[#0089C7] text-white px-4 py-3 rounded-[8px] cursor-pointer">
          <img src="/save.svg" alt="" />
          {t("customizer.save")}
        </button>
      </div>
    </div>
  );
}
