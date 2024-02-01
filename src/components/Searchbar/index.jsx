import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Searchbar = ({setSearchInput, placeholder}) => {
  return (
    <div className="w-full md:w-96 shrink">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchInput(e.target.search.value);
        }}
      >
        <div className="flex items-center w-full h-10 rounded-full focus-within:shadow-lg overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300 backdrop-blur-sm bg-black/60">
            <MdOutlineSearch />
          </div>
          <input
            className="h-full w-full outline-none text-sm text-white px-2 backdrop-blur-sm bg-black/60"
            id="search"
            name="search"
            placeholder={placeholder}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
