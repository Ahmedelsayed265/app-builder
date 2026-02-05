import { Fragment } from "react/jsx-runtime";
import { useThemeStore } from "../appStore";
import AppCategoriesFour from "@/components/app-categories/AppCategoriesFour";
import AppCategoriesOne from "@/components/app-categories/AppCategoriesOne";
import AppCategoriesThree from "@/components/app-categories/AppCategoriesThree";
import AppCategoriesTwo from "@/components/app-categories/AppCategoriesTwo";
import AppHeaderFive from "@/components/app-header/AppHeaderFive";
import AppHeaderFour from "@/components/app-header/AppHeaderFour";
import AppHeaderOne from "@/components/app-header/AppHeaderOne";
import AppHeaderThree from "@/components/app-header/AppHeaderThree";
import AppHeaderTwo from "@/components/app-header/AppHeaderTwo";
import ProductCardOne from "@/components/product-cards/ProductCardOne";
import ProductCardThree from "@/components/product-cards/ProductCardThree";
import ProductCardTwo from "@/components/product-cards/ProductCardTwo";
import HeroBannerOne from "@/components/hero-banner/HeroBannerOne";
import HeroBannerTwo from "@/components/hero-banner/HeroBannerTwo";

export default function HomePage() {
  const {
    appHeaderStyle,
    appHeroBannerStyle,
    appCategoriesStyle,
    appProductCardStyle,
    colors,
  } = useThemeStore();

  return (
    <>
      {appHeaderStyle === "header-one" && <AppHeaderOne />}
      {appHeaderStyle === "header-two" && <AppHeaderTwo />}
      {appHeaderStyle === "header-three" && <AppHeaderThree />}
      {appHeaderStyle === "header-four" && <AppHeaderFour />}
      {appHeaderStyle === "header-five" && <AppHeaderFive />}

      {appHeroBannerStyle === "banner-one" && <HeroBannerOne />}
      {appHeroBannerStyle === "banner-two" && <HeroBannerTwo />}

      {appCategoriesStyle === "categories-one" && <AppCategoriesOne />}
      {appCategoriesStyle === "categories-two" && <AppCategoriesTwo />}
      {appCategoriesStyle === "categories-three" && <AppCategoriesThree />}
      {appCategoriesStyle === "categories-four" && <AppCategoriesFour />}

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
    </>
  );
}
