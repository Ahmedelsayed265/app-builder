export default function CategoriesStyleFive() {
  return (
    <div className="p-5">
      <h3 className="text-xl font-bold text-center mb-5">جميع التصنيفات</h3>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 8 }).map((_, index) => {
          const isWide = index % 4 === 0 || index % 4 === 3;

          return (
            <div
              key={index}
              className={`relative h-[130px] rounded-[8px] overflow-hidden group ${
                isWide ? "col-span-4" : "col-span-3"
              }`}
            >
              <img
                src="https://placehold.co/200x300/fafafa/31343C"
                alt={`تصنيف ${index + 1}`}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20" />

              <h3 className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-sm font-medium z-20">
                تصنيف {index + 1}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
