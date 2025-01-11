import { useSearch } from '../hooks/useSearch';

const Search = () => {
  const { search } = useSearch();

  return (
    <div className="w-[328px] relative">
      <input
        id="search"
        type="text"
        onChange={(e) => search(e.target.value)}
        placeholder=""
        className="peer
          w-[328px]
          bg-transparent
          text-[#F2F2F2]
          border
          border-[#5D5D5D]
          px-4
          pb-2
          pt-6
          rounded-xl"
      />
      <label
        htmlFor="search"
        className="absolute
          text-[#A4A4A4]
          left-4
          top-4
          origin-[0]
          -translate-y-3
          scale-75
          duration-150
          peer-placeholder-shown:translate-y-0
          peer-placeholder-shown:scale-100
          peer-focus:-translate-y-3
          peer-focus:scale-75"
      >
        Pesquisar
      </label>
    </div>
  );
};

export default Search;