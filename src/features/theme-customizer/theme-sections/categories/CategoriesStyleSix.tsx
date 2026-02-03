export default function CategoriesStyleSix() {
  return (
    <div className="p-5">
      <h3 className="text-xl font-bold text-center mb-5">جميع التصنيفات</h3>

      <div className="grid grid-cols-2 gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <img
              src="https://placehold.co/110x150/eeeeee/dddddd"
              alt="category"
              className="rounded-[8px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
