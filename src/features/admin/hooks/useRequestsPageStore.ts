import { create } from "zustand";
import type { IBookRequestGroup } from "../../../../types";

interface RequestsPageStore {
  requests: IBookRequestGroup[] | null;
  setRequests: (requests: IBookRequestGroup[] | null) => void;
  reset: () => void;
}

const useRequestsPageStore = create<RequestsPageStore>((set) => ({
  requests: null,
  setRequests: (requests) => set({ requests }),
  reset: () => set({ requests: null }),
}));

export default useRequestsPageStore;