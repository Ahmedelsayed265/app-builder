import { useThemeStore } from "@/features/theme-customizer/theme-logic/appStore";

export default function BarOne({ className }: { className?: string }) {
  const { colors } = useThemeStore();

  return (
    <div
      className={`py-3 px-4 flex items-center justify-between gap-2 ${className}`}
      style={{ backgroundColor: colors.primary }}
    >
      <div className="flex items-center gap-1 rounded-full bg-white p-3">
        <img src="/bar-icons/home.svg" alt="home" />
        الرئيسية
      </div>

      <div className="h-12 w-12 rounded-full bg-[#151718] flex items-center justify-center">
        <img src="/bar-icons/shopping-bag.svg" alt="shopping-bag" />
      </div>
      <div className="h-12 w-12 rounded-full bg-[#151718] flex items-center justify-center">
        <img src="/bar-icons/dashboard-square.svg" alt="dashboard-square" />
      </div>
      <div className="h-12 w-12 rounded-full bg-[#151718] flex items-center justify-center">
        <img src="/bar-icons/menu-circle.svg" alt="menu-circle" />
      </div>
    </div>
  );
}
