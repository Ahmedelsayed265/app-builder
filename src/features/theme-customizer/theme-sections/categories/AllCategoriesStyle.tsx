import { cn } from "@/lib/utils";
import { useThemeStore } from "../../appStore";
import CategoriesStyleOne from "./CategoriesStyleOne";
import CategoriesStyleTwo from "./CategoriesStyleTwo";
import CategoriesStyleThree from "./CategoriesStyleThree";
import CategoriesStyleFour from "./CategoriesStyleFour";
import CategoriesStyleSix from "./CategoriesStyleSix";

export default function AllCategoriesStyle() {
  const { allCategoriesStyle, setAllCategoriesStyle } = useThemeStore();

  const options = [
    { id: "style1", Component: CategoriesStyleOne },
    { id: "style2", Component: CategoriesStyleTwo },
    { id: "style3", Component: CategoriesStyleThree },
    { id: "style4", Component: CategoriesStyleFour },
    { id: "style6", Component: CategoriesStyleSix },
  ];

  return (
    <div className="flex flex-col gap-4">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            allCategoriesStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setAllCategoriesStyle(id)}
        >
          <input
            type="radio"
            name="all-categories"
            id={id}
            className="hidden"
            checked={allCategoriesStyle === id}
            onChange={() => setAllCategoriesStyle(id)}
          />
          <Component />
        </label>
      ))}
    </div>
  );
}
