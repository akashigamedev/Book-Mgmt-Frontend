import { makeRequest } from "../utils/http";

const deleteBook = async (bookId: number) => {
  const json = await makeRequest("DELETE", `/book/${bookId}`, null, {
    headers: { "Content-Type": "application/json" },
  });
  return json.responseTxt === "success";
};

export default deleteBook;
