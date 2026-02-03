import { useThemeStore } from "../../appStore";

export default function CategoriesStyleThree() {
  const { colors } = useThemeStore();

  return (
    <div className="p-5">
      <h3 className="text-xl font-bold text-center mb-5">جميع التصنيفات</h3>

      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <img
              src="https://placehold.co/110x110/eeeeee/dddddd"
              alt="category"
              className="rounded-full"
            />
            <h3 className="text-center" style={{ color: colors.primary }}>
              تصنيف {index + 1}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
