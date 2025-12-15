import { Modal } from "../../../globals/components/Modal";
import cn from "../../../globals/utils/cn";
import useBookRequestModalStore from "../hooks/useBookRequestModalStore";
import { Field, Form, Formik } from "formik";
import requestBook from "../services/RequestBook";

const BookRequestModal = () => {
  const initialValues = {
    durationDays: 7,
    note: "",
  };
  const isOpen = useBookRequestModalStore((s) => s.isOpen);
  const book = useBookRequestModalStore((s) => s.book);
  const closeModal = useBookRequestModalStore((s) => s.closeModal);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div>
        <h4>Request Book</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={(v) => requestBook(book, v.durationDays, v.note)}
        >
          <Form className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="durationDays">
                How long would you like to borrow this book (in days)?
              </label>
              <Field
                name="durationDays"
                type="text"
                required
                className={cn(
                  "w-full focus:outline-none text-base rounded-lg px-4 py-3 border border-(--border-secondary) pr-10",
                  "focus-within:ring-2 focus-within:ring-(--sb-ocean-bg-active) transition-all duration-200 ease-in-out"
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="note">
                Anything else you'd like to tell us? (optional)
              </label>
              <Field
                as="textarea"
                name="note"
                type="text"
                rows={3}
                className={cn(
                  "w-full focus:outline-none text-base rounded-lg px-4 py-3 border border-(--border-secondary) pr-10 resize-none",
                  "focus-within:ring-2 focus-within:ring-(--sb-ocean-bg-active) transition-all duration-200 ease-in-out"
                )}
              />
            </div>
            <div className="flex justify-end items-center gap-3 mt-4">
              <button
                onClick={closeModal}
                type="reset"
                className="px-4 py-2 rounded-lg bg-(--surface-bg-tertiary) text-white font-semibold!"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-(--sb-ocean-bg-active) text-white font-semibold!"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default BookRequestModal;
