import Character from '../domain/character';
import { useSearch } from '../hooks/useSearch';

interface SearchProps {
    setCharacters: (value: Character[]) => void;
}

const Search = ({ setCharacters }: SearchProps) => {
  const { search } = useSearch(setCharacters);

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => search(e.target.value)}
      />
    </div>
  );
};

export default Search;