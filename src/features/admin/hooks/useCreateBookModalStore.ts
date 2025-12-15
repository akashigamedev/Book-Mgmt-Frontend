import { create } from "zustand";

interface CreateBookModalStore {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const useCreateBookModalStore = create<CreateBookModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export default useCreateBookModalStore;
