import { useThemeStore } from "../appStore";
import CartStyleOne from "../theme-sections/cart/CartStyleOne";
import CartStyleThree from "../theme-sections/cart/CartStyleThree";
import CartStyleTwo from "../theme-sections/cart/CartStyleTwo";

export default function CartPage() {
  const { cartStyle, colors } = useThemeStore();

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex flex-col">
        {Array.from({ length: 3 }).map((_, index) => (
          <>
            {cartStyle === "cart-style-one" && <CartStyleOne key={index} />}
            {cartStyle === "cart-style-two" && <CartStyleTwo key={index} />}
            {cartStyle === "cart-style-three" && <CartStyleThree key={index} />}
          </>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <h6
            className="text-lg font-medium mb-2"
            style={{ color: colors.primary }}
          >
            ملخص الطلب
          </h6>

          <div className="border border-gray-200 rounded-full flex items-center justify-between ps-3">
            <p className="text-gray-500">أدخل كود الخصم</p>
            <button
              className="bg-primary text-white py-3 px-6 rounded-full"
              style={{ backgroundColor: colors.primary }}
            >
              تطبيق
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>المجموع</p>
          <p>250.00</p>
        </div>

        <div className="flex items-center justify-between">
          <p>الضريبة</p>
          <p>250.00</p>
        </div>

        <div className="flex items-center justify-between">
          <p>الإجمالي</p>
          <p>250.00</p>
        </div>

        <button
          className="bg-primary text-white py-3 rounded-full"
          style={{ backgroundColor: colors.primary }}
        >
          إتمام الطلب
        </button>
      </div>
    </div>
  );
}
