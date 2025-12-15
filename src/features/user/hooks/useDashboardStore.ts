import { create } from "zustand";
import type { IBook, IRequest } from "../../../../types";

interface DashboardStore {
  books: IBook[] | null;
  setBooks: (books: IBook[] | null) => void;
  booksOwned: IBook[] | null;
  setBooksOwned: (books: IBook[] | null) => void;
  booksRequested: IRequest[] | null;
  setBooksRequested: (books: IRequest[] | null) => void;
  reset: () => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
  books: null,
  booksOwned: null,
  booksRequested: null,
  setBooks: (books) => set({ books }),
  setBooksOwned: (books) => set({ booksOwned: books }),
  setBooksRequested: (books) => set({ booksRequested: books }),
  reset: () => set({ books: null, booksOwned: null, booksRequested: null }),
}));

export default useDashboardStore;
