import { Fragment } from "react/jsx-runtime";
import { useThemeStore } from "./theme-logic/appStore";
import BarOne from "@/components/app-bar/BarOne";
import BarTwo from "@/components/app-bar/BarTwo";
import BarThree from "@/components/app-bar/BarThree";
import BarFour from "@/components/app-bar/BarFour";
import AppHeaderOne from "@/components/app-header/AppHeaderOne";
import AppHeaderTwo from "@/components/app-header/AppHeaderTwo";
import AppHeaderThree from "@/components/app-header/AppHeaderThree";
import AppHeaderFour from "@/components/app-header/AppHeaderFour";
import AppHeaderFive from "@/components/app-header/AppHeaderFive";
import AppCategoriesOne from "@/components/app-categories/AppCategoriesOne";
import AppCategoriesTwo from "@/components/app-categories/AppCategoriesTwo";
import AppCategoriesThree from "@/components/app-categories/AppCategoriesThree";
import AppCategoriesFour from "@/components/app-categories/AppCategoriesFour";
import HeroBannerOne from "@/components/hero-banner/HeroBannerOne";
import HeroBannerTwo from "@/components/hero-banner/HeroBannerTwo";
import HeroBannerThree from "@/components/hero-banner/HeroBannerThree";
import ProductCardOne from "@/components/product-cards/ProductCardOne";
import ProductCardTwo from "@/components/product-cards/ProductCardTwo";
import ProductCardThree from "@/components/product-cards/ProductCardThree";

export default function MobileAppContent() {
  const {
    appBarStyle,
    appHeaderStyle,
    appCategoriesStyle,
    appHeroBannerStyle,
    appProductCardStyle,
    colors,
  } = useThemeStore();

  return (
    <div className="flex flex-col w-full min-h-full font-cairo">
      {/* top header */}
      {appHeaderStyle === "header-one" && <AppHeaderOne />}
      {appHeaderStyle === "header-two" && <AppHeaderTwo />}
      {appHeaderStyle === "header-three" && <AppHeaderThree />}
      {appHeaderStyle === "header-four" && <AppHeaderFour />}
      {appHeaderStyle === "header-five" && <AppHeaderFive />}

      {/* Hero Banner */}
      {appHeroBannerStyle === "banner-one" && <HeroBannerOne />}
      {appHeroBannerStyle === "banner-two" && <HeroBannerTwo />}
      {appHeroBannerStyle === "banner-three" && <HeroBannerThree />}

      {/* Categories */}
      {appCategoriesStyle === "categories-one" && <AppCategoriesOne />}
      {appCategoriesStyle === "categories-two" && <AppCategoriesTwo />}
      {appCategoriesStyle === "categories-three" && <AppCategoriesThree />}
      {appCategoriesStyle === "categories-four" && <AppCategoriesFour />}

      {/* Products Grid */}
      {appProductCardStyle && (
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#161616] text-[16px] font-bold">
              الأكثر مبيعاً
            </h3>
            <button
              className="underline text-sm"
              style={{ color: colors.primary }}
            >
              عرض الكل
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4].map((i) => (
              <Fragment key={i}>
                {appProductCardStyle === "card-one" && <ProductCardOne />}
                {appProductCardStyle === "card-two" && <ProductCardTwo />}
                {appProductCardStyle === "card-three" && <ProductCardThree />}
              </Fragment>
            ))}
          </div>
        </div>
      )}

      <div className="h-20" />

      {/* bottom bar */}
      <div className="absolute bottom-0 left-2 z-20 right-2 p-2 overflow-hidden bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
        {appBarStyle === "bar-one" && <BarOne className="rounded-full" />}
        {appBarStyle === "bar-two" && <BarTwo />}
        {appBarStyle === "bar-three" && <BarThree />}
        {appBarStyle === "bar-four" && <BarFour />}
      </div>
    </div>
  );
}
