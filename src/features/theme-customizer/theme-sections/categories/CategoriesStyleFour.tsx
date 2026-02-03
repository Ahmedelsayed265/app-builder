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
      <h3 className="text-xl font-bold text-center mb-6">جميع التصنيفات</h3>

      <div className="grid grid-cols-2 gap-3 auto-rows-[130px]">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`relative row-span-${item.span} rounded-[4px] overflow-hidden group`}
          >
            <img
              src={`https://placehold.co/${item.img}/fafafa/31343C`}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-2 border border-white/40 pointer-events-none z-10" />

            <div className="absolute inset-0 bg-black/20" />

            <h3 className="absolute bottom-4 right-4 text-white text-sm font-medium z-20 drop-shadow-md">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
