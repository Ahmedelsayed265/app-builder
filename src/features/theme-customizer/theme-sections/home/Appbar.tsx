import { cn } from "@/lib/utils";
import { useThemeStore } from "../../appStore";
import BarOne from "@/components/app-bar/BarOne";
import BarTwo from "@/components/app-bar/BarTwo";
import BarThree from "@/components/app-bar/BarThree";
import BarFour from "@/components/app-bar/BarFour";

export default function AppBar() {
  const { appBarStyle, setAppBarStyle } = useThemeStore();

  const options = [
    { id: "bar-one", Component: BarOne },
    { id: "bar-two", Component: BarTwo },
    { id: "bar-three", Component: BarThree },
    { id: "bar-four", Component: BarFour },
  ];

  return (
    <div className="flex flex-col gap-4">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            appBarStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setAppBarStyle(id)}
        >
          <input
            type="radio"
            name="app-bar"
            id={id}
            className="hidden"
            checked={appBarStyle === id}
            onChange={() => setAppBarStyle(id)}
          />
          <Component />
        </label>
      ))}
    </div>
  );
}
