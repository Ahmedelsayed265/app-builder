import { cn } from "@/lib/utils";
import { useThemeStore } from "../appStore";
import ProductCardOne from "@/components/product-cards/ProductCardOne";
import ProductCardTwo from "@/components/product-cards/ProductCardTwo";
import ProductCardThree from "@/components/product-cards/ProductCardThree";

export default function AppProductCard() {
  const { appProductCardStyle, setProductCardStyle } = useThemeStore();

  const options = [
    { id: "card-one", Component: ProductCardOne },
    { id: "card-two", Component: ProductCardTwo },
    { id: "card-three", Component: ProductCardThree },
  ];

  return (
    <div className="flex flex-col gap-4 pb-3">
      {options.map(({ id, Component }) => (
        <label
          key={id}
          htmlFor={id}
          className={cn(
            "cursor-pointer border rounded-lg transition-all duration-200 overflow-hidden",
            appProductCardStyle === id
              ? "border-[#0089C7] ring-1 ring-[#0089C7]"
              : "border-[#E5E5E5] hover:border-[#0089C7]/50",
          )}
          onClick={() => setProductCardStyle(id)}
        >
          <input
            type="radio"
            name="header"
            id={id}
            className="hidden"
            checked={appProductCardStyle === id}
            onChange={() => setProductCardStyle(id)}
          />
          <div className="w-0 min-w-full overflow-hidden">
            <Component />
          </div>
        </label>
      ))}
    </div>
  );
}
