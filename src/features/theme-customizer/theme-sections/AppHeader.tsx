import { cn } from "@/lib/utils";
import { useThemeStore } from "../theme-logic/appStore";
import AppHeaderOne from "@/components/app-header/AppHeaderOne";
import AppHeaderTwo from "@/components/app-header/AppHeaderTwo";
import AppHeaderThree from "@/components/app-header/AppHeaderThree";
import AppHeaderFour from "@/components/app-header/AppHeaderFour";
import AppHeaderFive from "@/components/app-header/AppHeaderFive";

export default function AppHeader() {
  const { appHeaderStyle, setHeaderStyle } = useThemeStore();

  const options = [
    { id: "header-one", Component: AppHeaderOne },
    { id: "header-two", Component: AppHeaderTwo },
    { id: "header-three", Component: AppHeaderThree },
    { id: "header-four", Component: AppHeaderFour },
    { id: "header-five", Component: AppHeaderFive },
  ];

  return (
    <div className="flex flex-col gap-4 pb-3">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            appHeaderStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setHeaderStyle(id)}
        >
          <input
            type="radio"
            name="header"
            id={id}
            className="hidden"
            checked={appHeaderStyle === id}
            onChange={() => setHeaderStyle(id)}
          />
          <Component />
        </label>
      ))}
    </div>
  );
}
