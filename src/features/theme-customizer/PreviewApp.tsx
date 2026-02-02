import { useThemeStore } from "./appStore";
import MobileAppContent from "./mobile-content/MobileAppContent";

export default function PreviewApp() {
  const { colors } = useThemeStore();

  return (
    <div className="flex-2 bg-[#F9FAFB] flex items-center justify-center p-8 overflow-hidden">
      <div className="relative h-full aspect-430/870">
        <img
          src="/phone-frame.png"
          alt="phone-frame"
          className="absolute inset-0 w-full h-full z-20 pointer-events-none select-none scale-[1.03]"
        />

        <div
          className="absolute inset-0 w-full h-full z-10 overflow-hidden rounded-[44px]"
          style={{ backgroundColor: colors.app_bg }}
        >
          <div className="w-full h-full overflow-y-auto scrollbar-hide pt-[44px] pb-[20px]">
            <MobileAppContent />
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[5px] bg-black/10 rounded-full z-30" />
      </div>
    </div>
  );
}
