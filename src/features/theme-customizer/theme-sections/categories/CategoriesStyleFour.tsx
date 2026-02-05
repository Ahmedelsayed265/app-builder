const categories = [
  { title: "تصنيف 1", span: 1, img: "400x500" },
  { title: "تصنيف 2", span: 2, img: "400x600" },
  { title: "تصنيف 3", span: 2, img: "400x600" },
  { title: "تصنيف 4", span: 1, img: "400x500" },
  { title: "تصنيف 5", span: 1, img: "400x500" },
  { title: "تصنيف 6", span: 2, img: "400x600" },
  { title: "تصنيف 7", span: 2, img: "400x600" },
];

export default function CategoriesStyleFour() {
  return (
    <div className="p-4" dir="rtl">
      <h3 className="text-2xl font-bold text-center mb-8 text-[#1A1A1A]">
        جميع التصنيفات
      </h3>

      <div className="grid grid-cols-2 gap-2 auto-rows-[140px]">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-[8px] overflow-hidden group bg-[#C5C5C5] ${
              item.span === 2 ? "row-span-2" : "row-span-1"
            }`}
          >
            <img
              src={`https://placehold.co/${item.img}/C5C5C5/4A4A4A?text=${item.img.replace("x", " × ")}`}
              alt={item.title}
              className="w-full h-full object-cover opacity-60"
            />

            {/* Inset Border */}
            <div className="absolute inset-2 border border-white/40 rounded-[8px] pointer-events-none z-10" />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-2 pt-8">
              <h4 className="text-white text-base font-bold drop-shadow-sm">
                {item.title}
              </h4>
            </div>

            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
