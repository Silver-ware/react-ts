import { IoSearch } from "react-icons/io5";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function SearchComponent({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <div className='relative w-full h-[50px] flex justify-center items-center py-1'>
      <div className="relative w-2/3 h-full">
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-full w-full bg-amber-200 rounded-4xl shadow-[inset_0px_0px_5px_1px_#733306]
              focus:ring-0 focus:outline-none border-1 pl-10 flex items-center focus:shadow-[inset_0px_0px_2px_1px_#733306]"
          placeholder="Search for a user..."
        />
        <IoSearch className="absolute text-2xl left-[10px] top-0 translate-y-[40%]" />
      </div>
    </div>
  );
}

export default SearchComponent;
