import { useTranslation } from "react-i18next";
import { useThemeStore } from "./appStore";
import HomePageCustomizer from "./pages-customizer/HomePageCustomizer";
import CategoriesPageCustomizer from "./pages-customizer/CategoriesPageCustomizer";
import ProductDetailsPageCustomizer from "./pages-customizer/ProductDetailsPageCustomizer";
import CartPageCustomizer from "./pages-customizer/CartPageCustomizer";

export default function PagesCustomizer() {
  const { t } = useTranslation();
  const { activePage } = useThemeStore();

  return (
    <div className="flex-1 py-6 flex flex-col gap-6">
      <div className="flex items-center gap-4 p-2">
        <button className="cursor-pointer">
          <img src="/arrow-left.svg" alt="arrow-right" />
        </button>

        <h1 className="text-[18px] flex items-center gap-2">
          <img src="/app.svg" alt="sidebar-left" />
          {activePage === "home" && t("customizer.app_sections")}
          {activePage === "categories" && t("customizer.categories_customizer")}
          {activePage === "product-details" &&
            t("customizer.product_details_customizer")}
          {activePage === "cart" && t("customizer.cart_customizer")}
        </h1>
      </div>

      {activePage === "home" && <HomePageCustomizer />}
      {activePage === "categories" && <CategoriesPageCustomizer />}
      {activePage === "product-details" && <ProductDetailsPageCustomizer />}
      {activePage === "cart" && <CartPageCustomizer />}
    </div>
  );
}
