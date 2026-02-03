import { cn } from "@/lib/utils";
import { useThemeStore } from "../../appStore";
import CartStyleOne from "./CartStyleOne";
import CartStyleTwo from "./CartStyleTwo";
import CartStyleThree from "./CartStyleThree";

export default function CartProductsStyle() {
  const { cartStyle, setCartStyle } = useThemeStore();

  const options = [
    { id: "cart-style-one", Component: CartStyleOne },
    { id: "cart-style-two", Component: CartStyleTwo },
    { id: "cart-style-three", Component: CartStyleThree },
  ];

  return (
    <div className="flex flex-col gap-4">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            cartStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setCartStyle(id)}
        >
          <input
            type="radio"
            name="all-categories"
            id={id}
            className="hidden"
            checked={cartStyle === id}
            onChange={() => setCartStyle(id)}
          />
          <Component />
        </label>
      ))}
    </div>
  );
}
