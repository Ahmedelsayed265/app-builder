import PagesCustomizer from "@/features/theme-customizer/PagesCustomizer";
import PreviewApp from "@/features/theme-customizer/PreviewApp";
import ThemeSettings from "@/features/theme-customizer/ThemeSettings";
import ViewNav from "@/features/theme-customizer/ViewNav";
import { useThemeStore } from "@/features/theme-customizer/appStore";

export default function ThemeCustomizer() {
  const { colors } = useThemeStore();

  return (
    <main className="flex h-[calc(100vh-77px)]">
      <ThemeSettings />

      <section className="flex-4 h-full">
        <ViewNav />

        <div
          className="flex h-[calc(100vh-157px)]"
          style={
            {
              "--primary-color": colors.primary,
            } as React.CSSProperties
          }
        >
          <PreviewApp />
          <PagesCustomizer />
        </div>
      </section>
    </main>
  );
}
