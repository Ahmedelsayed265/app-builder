import { create } from "zustand";
import { persist } from "zustand/middleware";
import { colors_fields } from "@/utils/constants";

export type ButtonShape = "rounded" | "square" | "sharp";
export type Page = "home" | "categories" | "product-details" | "cart";

interface ThemeState {
  activePage: Page;
  font: string;
  buttonShape: ButtonShape;
  colors: Record<string, string>;
  appBarStyle: string;
  appHeaderStyle: string;
  appCategoriesStyle: string;
  appHeroBannerStyle: string;
  appProductCardStyle: string;
  allCategoriesStyle: string;
  cartStyle: string;
  productDetailsStyle: string;

  setActivePage: (page: Page) => void;
  setFont: (font: string) => void;
  setButtonShape: (shape: ButtonShape) => void;
  setColor: (name: string, value: string) => void;
  setAppBarStyle: (style: string) => void;
  setHeaderStyle: (style: string) => void;
  setCategoriesStyle: (style: string) => void;
  setHeroBannerStyle: (style: string) => void;
  setProductCardStyle: (style: string) => void;
  setAllCategoriesStyle: (style: string) => void;
  setCartStyle: (style: string) => void;
  setProductDetailsStyle: (style: string) => void;
}

const initialColors = colors_fields.reduce(
  (acc, field) => {
    acc[field.field] = field.default;
    return acc;
  },
  {} as Record<string, string>,
);

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      activePage: "home",
      colors: initialColors,
      font: "Cairo",
      buttonShape: "rounded",
      appBarStyle: "",
      appHeaderStyle: "",
      appCategoriesStyle: "",
      appHeroBannerStyle: "",
      appProductCardStyle: "",
      allCategoriesStyle: "",
      cartStyle: "cart-style-one",
      productDetailsStyle: "product-details-style-one",

      setColor: (name, value) =>
        set((state) => ({
          colors: { ...state.colors, [name]: value },
        })),

      setFont: (font) => set({ font }),

      setButtonShape: (buttonShape) => set({ buttonShape }),

      setAppBarStyle: (appBarStyle) => set({ appBarStyle }),

      setHeaderStyle: (appHeaderStyle) => set({ appHeaderStyle }),

      setCategoriesStyle: (appCategoriesStyle) => set({ appCategoriesStyle }),

      setHeroBannerStyle: (appHeroBannerStyle) => set({ appHeroBannerStyle }),

      setProductCardStyle: (appProductCardStyle) =>
        set({ appProductCardStyle }),

      setActivePage: (page) => set({ activePage: page }),

      setAllCategoriesStyle: (allCategoriesStyle) =>
        set({ allCategoriesStyle }),

      setCartStyle: (cartStyle) => set({ cartStyle }),

      setProductDetailsStyle: (productDetailsStyle) =>
        set({ productDetailsStyle }),
    }),
    {
      name: "theme-storage",
    },
  ),
);
