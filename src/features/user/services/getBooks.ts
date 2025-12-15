import logout from "../../../globals/api/logout.api";
import { makeRequest } from "../../../globals/utils/http";
import useDashboardStore from "../hooks/useDashboardStore";

const getBooks = async () => {
  const { setBooks } = useDashboardStore.getState();

  const res = await makeRequest("GET", "/books");

  if (res && res.status === 200) {
    setBooks(res.json.data);
  } else {
    logout();
  }
};

export default getBooks;
