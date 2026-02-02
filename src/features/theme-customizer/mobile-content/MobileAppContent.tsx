import { useThemeStore } from "../appStore";
import BarOne from "@/components/app-bar/BarOne";
import BarTwo from "@/components/app-bar/BarTwo";
import BarThree from "@/components/app-bar/BarThree";
import BarFour from "@/components/app-bar/BarFour";
import HomePage from "./HomePage";

export default function MobileAppContent() {
  const { appBarStyle, font, activePage } = useThemeStore();

  return (
    <div
      className="flex flex-col w-full min-h-full"
      style={{ fontFamily: `"${font}", sans-serif` }}
    >
      {activePage === "home" && <HomePage />}

      <div className="h-20" />

      <div className="absolute bottom-0 left-2 z-20 right-2 p-2 overflow-hidden bg-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
        {appBarStyle === "bar-one" && <BarOne className="rounded-full" />}
        {appBarStyle === "bar-two" && <BarTwo />}
        {appBarStyle === "bar-three" && <BarThree />}
        {appBarStyle === "bar-four" && <BarFour />}
      </div>
    </div>
  );
}
