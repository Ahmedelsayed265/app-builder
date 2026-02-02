import AppSections from "@/features/theme-customizer/AppSections";
import PreviewApp from "@/features/theme-customizer/PreviewApp";
import ThemeSettings from "@/features/theme-customizer/ThemeSettings";
import ViewNav from "@/features/theme-customizer/ViewNav";

export default function ThemeCustomizer() {
  return (
    <main className="flex h-[calc(100vh-77px)]">
      <ThemeSettings />

      <section className="flex-4 h-full">
        <ViewNav />

        <div className="flex h-[calc(100vh-157px)]">
          <PreviewApp />
          <AppSections />
        </div>
      </section>
    </main>
  );
}
