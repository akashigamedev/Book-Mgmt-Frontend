import { create } from "zustand";
import type { IBook } from "../../../../types";

interface BookRequestModalStore {
  isOpen: boolean;
  book: IBook | null;
  openModal: (book: IBook | null) => void;
  closeModal: () => void;
}

const useBookRequestModalStore = create<BookRequestModalStore>((set) => ({
  isOpen: false,
  book: null,
  openModal: (book) => set({ isOpen: true, book }),
  closeModal: () => set({ isOpen: false, book: null }),
}));

export default useBookRequestModalStore;
