import { useThemeStore } from "../appStore";
import CategoriesStyleOne from "../theme-sections/categories/CategoriesStyleOne";
import CategoriesStyleTwo from "../theme-sections/categories/CategoriesStyleTwo";
import CategoriesStyleThree from "../theme-sections/categories/CategoriesStyleThree";
import CategoriesStyleFour from "../theme-sections/categories/CategoriesStyleFour";
import CategoriesStyleFive from "../theme-sections/categories/CategoriesStyleFive";
import CategoriesStyleSix from "../theme-sections/categories/CategoriesStyleSix";

export default function CategoriesPage() {
  const { allCategoriesStyle } = useThemeStore();

  return (
    <>
      {allCategoriesStyle === "style1" && <CategoriesStyleOne />}
      {allCategoriesStyle === "style2" && <CategoriesStyleTwo />}
      {allCategoriesStyle === "style3" && <CategoriesStyleThree />}
      {allCategoriesStyle === "style4" && <CategoriesStyleFour />}
      {allCategoriesStyle === "style5" && <CategoriesStyleFive />}
      {allCategoriesStyle === "style6" && <CategoriesStyleSix />}
    </>
  );
}
