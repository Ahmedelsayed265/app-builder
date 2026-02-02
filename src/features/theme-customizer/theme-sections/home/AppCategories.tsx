import { cn } from "@/lib/utils";
import { useThemeStore } from "@/features/theme-customizer/appStore";
import AppCategoriesOne from "@/components/app-categories/AppCategoriesOne";
import AppCategoriesTwo from "@/components/app-categories/AppCategoriesTwo";
import AppCategoriesThree from "@/components/app-categories/AppCategoriesThree";
import AppCategoriesFour from "@/components/app-categories/AppCategoriesFour";

export default function AppCategories() {
  const { appCategoriesStyle, setCategoriesStyle } = useThemeStore();

  const options = [
    { id: "categories-one", Component: AppCategoriesOne },
    { id: "categories-two", Component: AppCategoriesTwo },
    { id: "categories-three", Component: AppCategoriesThree },
    { id: "categories-four", Component: AppCategoriesFour },
  ];

  return (
    <div className="flex flex-col gap-4 pb-3">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            appCategoriesStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setCategoriesStyle(id)}
        >
          <input
            type="radio"
            name="header"
            id={id}
            className="hidden"
            checked={appCategoriesStyle === id}
            onChange={() => setCategoriesStyle(id)}
          />
          <div className="w-0 min-w-full overflow-hidden">
            <Component />
          </div>
        </label>
      ))}
    </div>
  );
}
