import { create } from "zustand";
import type { IBook } from "../../../../types";

interface BooksPageStore {
  books: IBook[] | null;
  setBooks: (books: IBook[] | null) => void;

  reset: () => void;
}

const useBooksPageStore = create<BooksPageStore>((set) => ({
  books: null,
  setBooks: (books) => set({ books }),
  reset: () => set({ books: null }),
}));

export default useBooksPageStore;
