import getBooks from "../api/getBooks.api";
import useHomePageStore from "../hooks/useHomepageStore";

const fetchBooks = async () => {
  const { setBooks } = useHomePageStore.getState();
  const books = await getBooks();
  setBooks(books);
};

export default fetchBooks;
