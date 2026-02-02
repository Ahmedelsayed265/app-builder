import { useThemeStore } from "../../appStore";

export default function CategoriesStyleOne() {
  const { colors } = useThemeStore();
  return (
    <div className="p-5">
      <h3 className="text-xl font-bold text-center mb-5">جميع التصنيفات</h3>

      <div className="flex flex-col gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="relative">
            <img
              src="https://placehold.co/200x100/eeeeee/dddddd"
              alt="category"
              className="w-full h-full object-contain rounded-lg"
            />
            <h3
              className="absolute top-3 right-3"
              style={{ color: colors.primary }}
            >
              تصنيف {index + 1}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
