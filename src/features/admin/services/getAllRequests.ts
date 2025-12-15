import { makeRequest } from "../../../globals/utils/http";
import useRequestsPageStore from "../hooks/useRequestsPageStore";

const getAllRequests = async () => {
  const { setRequests } = useRequestsPageStore.getState();
  const res = await makeRequest("GET", "/requests");
  if (res && res.status === 200) {
    setRequests(res.json.data);
  }
};

export default getAllRequests;
