import type { IBookDTO } from "../types";
import { makeRequest } from "../utils/http";

const updateBook = async (bookId: number, bookDto: IBookDTO) => {
  const json = await makeRequest("PUT", `/book/${bookId}`, bookDto, {
    headers: { "Content-Type": "application/json" },
  });

  return json.responseTxt === "success";
};

export default updateBook;
