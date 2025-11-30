import { Field, Form, Formik, type FormikValues } from "formik";

// Types
import type { IBookDTO } from "../types";

// Apis
import updateBook from "../api/updatebook.api";

// Hooks
import useUpdateBookModalStore from "../hooks/useUpdateBookModalStore";

// Services
import fetchBooks from "../services/fetchBooks.service";

// Components
import { Modal } from "./Modal";

/**
 * Confirmation modal for book updation.
 */
const UpdateBookModal = () => {
  const isOpen = useUpdateBookModalStore((s) => s.isOpen);
  const closeModal = useUpdateBookModalStore((s) => s.closeModal);
  const book = useUpdateBookModalStore((s) => s.book);
  const initialValues = {
    id: book?.ID ?? 0,
    name: book?.name ?? "",
    author: book?.author ?? "",
    publication: book?.publication ?? "",
  };

  const handleSubmit = async (values: FormikValues) => {
    const bookDto: IBookDTO = {
      name: values.name,
      author: values.author,
      publication: values.publication,
    };
    await updateBook(values.id, bookDto);
    await fetchBooks();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h3>Update book</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="mt-5 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Book Name</label>
            <Field
              name="name"
              type="text"
              placeholder="Book Name"
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author">Author</label>
            <Field
              name="author"
              type="text"
              placeholder="Author"
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="publication">Publication</label>
            <Field
              name="publication"
              type="text"
              placeholder="Publication"
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
            />
          </div>
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
              className="bg-(--sb-ocean-bg-active) px-5 py-3 rounded-md cursor-pointer"
            >
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default UpdateBookModal;
