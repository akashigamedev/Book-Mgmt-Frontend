interface SearchbarProps {
  onSearch?: (str: string) => void;
}

/*
 * Searchbar UI component with onSearch handler.
 * */
const SearchBar = ({ onSearch }: SearchbarProps) => {
  return (
    <div className="w-full bg-(--surface-bg-secondary) border border-(--border-secondary) py-3 px-4 rounded-lg">
      <form onClick={(e) => e.preventDefault()}>
        <input
          onChange={(e) => {
            if (onSearch) {
              const val = e.target.value.trim();
              onSearch(val);
            }
          }}
          type="text"
          name="search"
          placeholder="Search for book title, author or publisher..."
          className="w-full focus:ring-0 focus:outline-0"
        />
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};

export default SearchBar;
