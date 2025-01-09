import Character from '../domain/character';

export const useCharacterDisplay = (characters: Character[], setCharacters: (value: Character[]) => void) => {
  
  function setFavorite (character: Character) {
    const updatedCharacters = characters.map((char) =>
      char.id === character.id ? { ...char, favorite: !char.favorite } : char
    );
    setCharacters(updatedCharacters);
  }

  return { setFavorite };
};