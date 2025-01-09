import { useEffect } from 'react';
import { BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { fetchCharactersByName } from '../services/api';
import Character from '../domain/character';

const searchSubject = new BehaviorSubject<string>('');

export const useSearch = (setCharacters: (value: Character[]) => void) => {

  useEffect(() => {
    const subscription = searchSubject
      .pipe(debounceTime(300), switchMap((name) => fetchCharactersByName(name).then(res => res.data.results).catch(() => null)))
      .subscribe({
        next: (response) => {
          const favorites = localStorage.getItem('favorites');
          
          if(response != null) {
            const favoriteCharacters: Character[] = favorites ? JSON.parse(favorites) : [];

            //atualizar o valor de favorito dos personagens que buscamos agora com base no localstorage
            const updatedCharacters = response.map((character: Character) => {
              if (favoriteCharacters.some(fav => fav.id === character.id)) {
                return { ...character, favorite: true };
              }
              return { ...character, favorite: false };
            });

            setCharacters(updatedCharacters);
          }
          else {
            setCharacters([]);
          }
        },
      });

    return () => subscription.unsubscribe();
  }, []);

  const search = (name: string) => searchSubject.next(name);

  return { search };
};