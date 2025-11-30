import { create } from "zustand";
import type { IBook } from "../types";

interface HomepageStore {
  books: IBook[] | null;
  setBooks: (books: IBook[] | null) => void;
  reset: () => void;
}

const useHomePageStore = create<HomepageStore>((set) => ({
  books: null,
  setBooks: (books) => set({ books }),
  reset: () =>
    set({
      books: null,
    }),
}));

export default useHomePageStore;
