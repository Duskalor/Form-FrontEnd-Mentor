import { create } from 'zustand';
import { products } from '../utils/images';

export const useStore = create((set, get) => ({
  count: 0,
  products,
  cart: [],
  active: false,
  modalActive: false,
  selected: 1,
  addToCart: (id, count) => {
    const all = get().cart.length;
    if (all === 0) {
      const product = get().products.find((pro) => pro.id === id);
      set({ cart: [{ ...product, count }] });
    }
  },
  setmodalActive: () => {
    set({ modalActive: true });
  },

  desablemodalActive: () => set({ modalActive: false }),

  setActive: (e) => {
    e.stopPropagation();
    set({ active: !get().active });
  },
  desableActive: () => set({ active: false }),
  setSelected: (id) => set({ selected: id }),

  deleteProduct: (id) => {
    const product = get().products.filter((pro) => pro.id !== id);
    set({ cart: product });
  },
  increment: () => set((prev) => ({ count: prev.count + 1 })),
  decrement: () =>
    set((prev) => ({ count: prev.count > 0 ? prev.count - 1 : prev.count })),
}));
