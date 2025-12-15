import { MdDelete } from "react-icons/md";
import { useEffect } from "react";
import { PiBookOpen } from "react-icons/pi";

// Hooks
import useCreateBookModalStore from "../hooks/useCreateBookModalStore";
import useDeleteBookModalStore from "../hooks/useDeleteBookModalStore";
import useBooksPageStore from "../hooks/useBooksPageStore";

// Services
import getBooks from "../services/getBooks";

// Components
import CreateBookModal from "../components/CreateBookModal";

const BooksPage = () => {
  const books = useBooksPageStore((s) => s.books);
  const openCreateModal = useCreateBookModalStore((s) => s.openModal);
    const openDeleteModal = useDeleteBookModalStore((s) => s.openModal);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-between items-center gap-2">
        <div className="w-full flex flex-col gap-1">
          <h2>Book Management Panel</h2>
          <p className="text-(--text-secondary)">
            This panel allows admin to view, create and manage vast amount of
            books with ease.
          </p>
        </div>
        <button
          onClick={openCreateModal}
          className="px-4 py-3 bg-(--sb-ocean-bg-active) hover:bg-(--sb-ocean-bg-hover) active:bg-(--sb-ocean-bg-on-press) flex justify-center items-center gap-1 text-nowrap rounded-md cursor-pointer"
        >
          <PiBookOpen size={16} />
          <p>Add Book</p>
        </button>
      </div>

      <div className="mt-10">
        <table className="w-full table-auto border-collapse bg-(--surface-bg) rounded-xl overflow-hidden shadow">
          <thead className="bg-(--surface-bg-secondary)">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold">ID</th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Book Name
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Author
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Description
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                ISBN
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Genre
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold">
                Added On
              </th>
              <th className="py-3 px-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books && books.length > 0
              ? books.map((book) => (
                  <tr
                    key={book.id}
                    className="border-b border-(--border-secondary) hover:bg-(--surface-bg-secondary) cursor-pointer"
                  >
                    <td className="py-3 px-4">{book.id}</td>
                    <td className="py-3 px-4">{book.title}</td>
                    <td className="py-3 px-4">{book.author}</td>
                    <td className="py-3 px-4">{book.description}</td>
                    <td className="py-3 px-4">{book.isbn}</td>
                    <td className="py-3 px-4">{book.genre}</td>
                    <td className="py-3 px-4">
                      {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "medium",
                      }).format(new Date(book.created_at))}
                    </td>
                    <td className="flex justify-center items-center py-3 px-4">
                      <div
                        onClick={() => openDeleteModal(book.id)}
                        className="size-8 aspect-square p-1 flex justify-center items-center rounded-full hover:bg-(--sb-valencia-bg-active) transition-colors ease-in duration-100"
                      >
                        <MdDelete size={16} />
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>

      <CreateBookModal />
    </div>
  );
};

export default BooksPage;
