import { useEffect } from "react";
import useDashboardStore from "../hooks/useDashboardStore";
import { capitalizeWords } from "../../../globals/utils";
import getUserOwnedBooks from "../services/getUserOwnedBooks";
import getUserRequestedBooks from "../services/getUserRequestedBooks";
import cn from "../../../globals/utils/cn";
import useBookRequestModalStore from "../hooks/useBookRequestModalStore";
import BookRequestModal from "../components/BookRequestModal";
import getBooks from "../services/getBooks";

const UserDashboard = () => {
  const books = useDashboardStore((s) => s.books);
  const booksOwned = useDashboardStore((s) => s.booksOwned);
  const booksRequested = useDashboardStore((s) => s.booksRequested);
  const openModal = useBookRequestModalStore((s) => s.openModal);

  useEffect(() => {
    getBooks();
    getUserOwnedBooks();
    getUserRequestedBooks();
  }, [])

  return (
    <div className="w-full">
      {/* Header */}
      <div>
        <h2>All Books</h2>
        <p className="text-(--text-secondary) max-w-[65ch]">
          Browse the complete collection of available books, explore genres, and
          check current availability at a glance.
        </p>
      </div>

      {/* Books List */}
      <div className="grid grid-cols-3 gap-5 mt-10 h-full overflow-y-auto">
        {books && books.length > 0 ? (
          books.map((book, index) => {
            const isBookOwned = Boolean(
              booksOwned?.some((b) => b.id === book.id)
            );
            const bookRequested = booksRequested?.find(b => b.book_id === book.id);
            const isBookRequested = Boolean(bookRequested);

            const isExpired = new Date() > new Date(bookRequested?.duration_until ?? "")

            // Book Card
            return (
              <div
                key={index}
                className="p-4 rounded-lg bg-(--surface-bg-primary) border border-(--border-secondary) max-h-[250px]"
              >
                {/* Card Header */}
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                  </div>

                  {/* Book CTA */}
                  <button
                    className={cn(
                      "px-4 py-2 rounded-full bg-(--sb-ocean-bg-active)",
                      "hover:bg-(--sb-ocean-bg-hover) active:bg-(--sb-ocean-bg-on-press) disabled:bg-(--sb-ocean-bg-disabled) "
                    )}
                    disabled={isBookOwned || isBookRequested}
                    onClick={() => openModal(book)}
                  >
                    {isBookOwned
                      ? "Owned"
                      : isBookRequested
                      ? "Requested"
                      : "Request"}
                  </button>
                </div>

                {/* Book Labels */}
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {[book.status, ...book.genre.split(",")].map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1 bg-(--surface-bg-tertiary) rounded-full font-medium!"
                    >
                      {capitalizeWords(badge)}
                    </span>
                  ))}
                </div>

                {/* Book Description */}
                <p className="text-(--text-secondary)">{book.description}</p>

                {isExpired && <div className="flex justify-between items-center mt-2">
                  <p className="text-(--sb-valencia-bg-active)">
                    Borrowing access expired
                  </p>
                  <button
                    className={cn(
                      "px-4 py-2 rounded-full bg-(--sb-ocean-bg-active)",
                      "hover:bg-(--sb-ocean-bg-hover) active:bg-(--sb-ocean-bg-on-press) disabled:bg-(--sb-ocean-bg-disabled) "
                    )}
                  >
                    Pay now
                  </button>
                </div>}
              </div>
            );
          })
        ) : (
          <p>no data</p>
        )}
      </div>
      <BookRequestModal />
    </div>
  );
};

export default UserDashboard;
