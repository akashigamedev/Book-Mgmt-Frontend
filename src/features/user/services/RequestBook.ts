import { ToastType } from "../../../../types";
import type { IBook } from "../../../../types";
import { useToastStore } from "../../../globals/hooks/useToastStore";
import { makeRequest } from "../../../globals/utils/http";
import useAuthStore from "../../auth/useAuthStore";
import getUserRequestedBooks from "./getUserRequestedBooks";
import getUserOwnedBooks from "./getUserOwnedBooks";
import useBookRequestModalStore from "../hooks/useBookRequestModalStore";
import getBooks from "./getBooks";

const requestBook = async (
  book: IBook | null,
  duration_days: number,
  note: string
) => {
  const { setToast } = useToastStore.getState();
  const { closeModal } = useBookRequestModalStore.getState();
  const { data } = useAuthStore.getState();
  if (!data || !book) return;

  const res = await makeRequest("POST", "/request-book", {
    userId: data.id,
    bookId: book.id,
    duration_days,
    note,
  });

  if (res && res.status === 200) {
    setToast({
      title: "Success",
      description: "Request sent!",
      type: ToastType.SUCCESS,
    });
  } else {
    setToast({
      title: "Error",
      description: "Something went wrong!",
      type: ToastType.DANGER,
    });
  }

  closeModal();
  getBooks();
  getUserRequestedBooks();
  getUserOwnedBooks();
};

export default requestBook;
