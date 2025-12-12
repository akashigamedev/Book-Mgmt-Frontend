import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthData } from "./../../../types";

interface AuthStore {
  data: AuthData | null;
  setData: (data: AuthData | null) => void;

  reset: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      data: null,
      setData: (data) => set({ data }),
      reset: () => {
        set({ data: null });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
