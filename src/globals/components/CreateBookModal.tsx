import { Field, Formik, Form, type FormikValues } from "formik";

// Types
import type { IBookDTO } from "../types";

// Api
import createBook from "../api/createBook.api";

// Hooks
import useCreateBookModal from "../hooks/useCreateBookModalStore";

// Services
import fetchBooks from "../services/fetchBooks.service";

// Components
import { Modal } from "./Modal";

/**
 * Confirmation modal for book creation.
 */
const CreateBookModal = () => {
  const initialValues = {
    name: "",
    author: "",
    publication: "",
  };
  const isOpen = useCreateBookModal((s) => s.isOpen);
  const closeModal = useCreateBookModal((s) => s.closeModal);

  const handleSubmit = async (values: FormikValues) => {
    await createBook(values as IBookDTO);
    await fetchBooks();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h3>Add a book</h3>
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

export default CreateBookModal;
