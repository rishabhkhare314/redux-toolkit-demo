import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../../store/slices/searchSlice";

const Search = () => {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchInput));
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-4">
      <input
        className="w-full px-6 py-3 border-2 p-2 text-xl rounded outline-none"
        type="text"
        placeholder="Search images..."
        onChange={handleChangeSearch}
        value={searchInput}
      />
      <button className="active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none">
        Search
      </button>
    </form>
  );
};

export default Search;
