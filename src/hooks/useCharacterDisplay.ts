import Character from '../domain/character';

export const useCharacterDisplay = (characters: Character[], setCharacters: (value: Character[]) => void) => {
  
  function updateLocalStorage(character: Character) {
    const favorites = localStorage.getItem('favorites');
    let favoriteCharacters: Character[] = favorites ? JSON.parse(favorites) : [];
  
    if (character.favorite) {
      favoriteCharacters = favoriteCharacters.filter(c => c.id !== character.id);
    } else {
      if (!favoriteCharacters.some(c => c.id === character.id)) {
        favoriteCharacters.push(character);
      }
    }
  
    localStorage.setItem('favorites', JSON.stringify(favoriteCharacters));
  }

  function setFavorite (character: Character) {
    const updatedCharacters = characters.map((char) =>
      char.id === character.id ? { ...char, favorite: !char.favorite } : char
    );
    setCharacters(updatedCharacters);
    updateLocalStorage(character);
  }

  return { setFavorite };
};