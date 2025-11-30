import { makeRequest } from "../utils/http";

const getBooks = async () => {
  const json = await makeRequest("GET", "/book", null, {});
  if (json && json.responseTxt === "success") {
    return json.data;
  }
  return null;
};
export default getBooks;
