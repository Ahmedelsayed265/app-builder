import { cn } from "@/lib/utils";
import { useThemeStore } from "@/features/theme-customizer/appStore";
import HeroBannerOne from "@/components/hero-banner/HeroBannerOne";
import HeroBannerTwo from "@/components/hero-banner/HeroBannerTwo";
import HeroBannerThree from "@/components/hero-banner/HeroBannerThree";

export default function AppHeroBanner() {
  const { appHeroBannerStyle, setHeroBannerStyle } = useThemeStore();

  const options = [
    { id: "banner-one", Component: HeroBannerOne },
    { id: "banner-two", Component: HeroBannerTwo },
    { id: "banner-three", Component: HeroBannerThree },
  ];

  return (
    <div className="flex flex-col gap-4 pb-3">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            appHeroBannerStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setHeroBannerStyle(id)}
        >
          <input
            type="radio"
            name="app-hero-banner"
            id={id}
            className="hidden"
            checked={appHeroBannerStyle === id}
            onChange={() => setHeroBannerStyle(id)}
          />
          <div className="w-0 min-w-full overflow-hidden">
            <Component />
          </div>
        </label>
      ))}
    </div>
  );
}
