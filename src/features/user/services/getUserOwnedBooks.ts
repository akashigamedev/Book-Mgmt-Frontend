import { makeRequest } from "../../../globals/utils/http";
import useAuthStore from "../../auth/useAuthStore";
import useDashboardStore from "../hooks/useDashboardStore";

const getUserOwnedBooks = async () => {
  const { data } = useAuthStore.getState();
  const { setBooksOwned } = useDashboardStore.getState();

  if (!data) return;

  const res = await makeRequest("GET", `/${data.id}/books`);
  if (res && res.status === 200) {
    setBooksOwned(res.json.data);
  }
};

export default getUserOwnedBooks;
