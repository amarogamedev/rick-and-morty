import Character from '../domain/character';
import { useSearch } from '../hooks/useSearch';

interface SearchProps {
    updateCharacters: (value: Character[]) => void;
  }

const Search = ({ updateCharacters }: SearchProps) => {
  const { search } = useSearch(updateCharacters);

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