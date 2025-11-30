import { create } from "zustand";
import type { IBook } from "../types";

interface UpdateBookModalStore {
  isOpen: boolean;
  book: IBook | null;
  openModal: (book: IBook | null) => void;
  closeModal: () => void;
}

const useUpdateBookModalStore = create<UpdateBookModalStore>((set) => ({
  isOpen: false,
  book: null,
  openModal: (book) => set({ isOpen: true, book: book }),
  closeModal: () => set({ isOpen: false, book: null }),
}));

export default useUpdateBookModalStore;
