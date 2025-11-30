import type { IBookDTO } from "../types";
import { makeRequest } from "../utils/http";

const createBook = async (book: IBookDTO) => {
  const json = await makeRequest("POST", "/book", book, {
    headers: { "Content-Type": "application/json" },
  });

  return json.responseTxt === "success";
};

export default createBook;
