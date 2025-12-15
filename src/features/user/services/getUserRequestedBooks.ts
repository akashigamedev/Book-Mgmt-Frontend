import { makeRequest } from "../../../globals/utils/http";
import useAuthStore from "../../auth/useAuthStore";
import useDashboardStore from "../hooks/useDashboardStore";

const getUserRequestedBooks = async () => {
  const { data } = useAuthStore.getState();
  const { setBooksRequested } = useDashboardStore.getState();

  if (!data) return;

  const res = await makeRequest("GET", `/${data.id}/requests`);
  if (res && res.status === 200) {
    setBooksRequested(res.json.data);
  }
};

export default getUserRequestedBooks;
