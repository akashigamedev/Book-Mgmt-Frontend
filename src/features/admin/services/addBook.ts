import type { FormikValues } from "formik";
import { makeRequest } from "../../../globals/utils/http";
import { useToastStore } from "../../../globals/hooks/useToastStore";
import { ToastType } from "../../../../types";
import getBooks from "./getBooks";
import useCreateBookModalStore from "../hooks/useCreateBookModalStore";

const addBook = async (v: FormikValues) => {
  const { setToast } = useToastStore.getState();
  const { closeModal } = useCreateBookModalStore.getState();
  const res = await makeRequest("POST", "/books", {
    ...v,
  });
  if (res && res.status === 200) {
    setToast({
      title: "Success",
      description: "Successfully added a book!",
      type: ToastType.SUCCESS,
    });
    getBooks();
    closeModal();
  } else {
    setToast({
      title: "Error",
      description: "Something went wrong!",
      type: ToastType.DANGER,
    });
  }
};

export default addBook;
