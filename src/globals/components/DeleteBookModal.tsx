import { Form, Formik } from "formik";

// Apis
import deleteBook from "../api/deleteBook.api";

// Hooks
import useDeleteBookModalStore from "../hooks/useDeleteBookModalStore";

// Services
import fetchBooks from "../services/fetchBooks.service";

// Components
import { Modal } from "./Modal";

/**
 * Confirmation modal for book deletion.
 */
const DeleteBookModal = () => {
  const isOpen = useDeleteBookModalStore((s) => s.isOpen);
  const bookId = useDeleteBookModalStore((s) => s.id);
  const closeModal = useDeleteBookModalStore((s) => s.closeModal);

  const handleSubmit = async () => {
    await deleteBook(bookId);
    await fetchBooks();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h3>Delete book</h3>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form className="mt-5 flex flex-col gap-3">
          <p>Are you sure you want to delete this book?</p>
          <div className="mt-2 w-full flex justify-end items-center gap-3">
            <button
              type="reset"
              onClick={closeModal}
              className="bg-(--surface-bg-tertiary) px-5 py-3 rounded-md cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-(--sb-valencia-bg-active) px-5 py-3 rounded-md cursor-pointer"
            >
              Yes, Delete
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default DeleteBookModal;
