import { useThemeStore } from "../../appStore";

export default function CategoriesStyleTwo() {
  const { colors } = useThemeStore();

  return (
    <div className="p-5">
      <h3 className="text-xl font-bold text-center mb-5">جميع التصنيفات</h3>

      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[8px] overflow-hidden p-3 flex flex-col gap-2"
            style={{ backgroundColor: colors.secondary }}
          >
            <h3 className="text-center" style={{ color: colors.primary }}>
              تصنيف {index + 1}
            </h3>
            <img
              src="https://placehold.co/150x100/fafafa/dddddd"
              alt="category"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
