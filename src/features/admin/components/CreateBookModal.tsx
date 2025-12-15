import { Field, Formik, Form } from "formik";

// Hooks
import useCreateBookModal from "../hooks/useCreateBookModalStore";

// Components
import { Modal } from "../../../globals/components/Modal";
import addBook from "../services/addBook";

/**
 * Confirmation modal for book creation.
 */
const CreateBookModal = () => {
  const initialValues = {
    title: "",
    author: "",
    description: "",
    isbn: "",
    genre: "",
  };
  const isOpen = useCreateBookModal((s) => s.isOpen);
  const closeModal = useCreateBookModal((s) => s.closeModal);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <h3>Add a book</h3>
      <Formik initialValues={initialValues} onSubmit={addBook}>
        <Form className="mt-5 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Book Name</label>
            <Field
              name="title"
              type="text"
              placeholder="Book Name"
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="author">Author</label>
            <Field
              name="author"
              type="text"
              placeholder="Author"
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <Field
              as="textarea"
              name="description"
              type="text"
              placeholder="Description"
              rows={3}
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in resize-none"
            />
          </div>
            <div className="flex flex-col gap-2">
            <label htmlFor="isbn">ISBN</label>
            <Field
              name="isbn"
              type="text"
              placeholder="978-3-16-148410-0"
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
              required
            />
            </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="genre">Genre</label>
            <Field
              name="genre"
              type="text"
              placeholder="Fantasy, Action..."
              className="py-2 px-4 bg-(--surface-bg-tertiary) rounded-lg focus:outline-0 ring-1 focus:ring-2 ring-(--border-primary) focus:ring-(--sb-ocean-bg-active) transition-all duration-100 ease-in"
              required
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
