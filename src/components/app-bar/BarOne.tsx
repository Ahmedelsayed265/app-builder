import { useThemeStore } from "@/features/theme-customizer/theme-logic/appStore";

export default function BarOne({ className }: { className?: string }) {
  const { colors } = useThemeStore();

  return (
    <div
      className={`py-3 px-4 flex items-center justify-between gap-2 ${className}`}
      style={{ backgroundColor: colors.primary }}
    >
      <div
        className="flex items-center gap-1 rounded-full bg-white p-3 font-bold text-sm"
        style={{ color: colors.primary }}
      >
        <img src="/bar-icons/home.svg" alt="home" />
        الرئيسية
      </div>

      <div
        className="h-12 w-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <img
          src="/bar-icons/shopping-bag.svg"
          alt="shopping-bag"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
      <div
        className="h-12 w-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <img
          src="/bar-icons/dashboard-square.svg"
          alt="dashboard-square"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
      <div
        className="h-12 w-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <img
          src="/bar-icons/menu-circle.svg"
          alt="menu-circle"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    </div>
  );
}
