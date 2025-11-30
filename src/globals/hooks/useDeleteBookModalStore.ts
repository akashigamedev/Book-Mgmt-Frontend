import { create } from "zustand";

interface DeleteBookModalStore {
  isOpen: boolean;
  id: number;
  openModal: (id: number) => void;
  closeModal: () => void;
}

const useDeleteBookModalStore = create<DeleteBookModalStore>((set) => ({
  isOpen: false,
  id: -1,
  openModal: (id) => set({ isOpen: true, id }),
  closeModal: () => set({ isOpen: false, id: -1 }),
}));

export default useDeleteBookModalStore;
