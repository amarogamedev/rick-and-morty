import Character from '../domain/character';

export const useCharacterDisplay = (characters: Character[]) => {
  
  function setFavorite (character: Character) {
    character.favorite = true;
  }

  return { setFavorite };
};