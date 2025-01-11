import { useEffect } from 'react';
import { BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { fetchCharactersByName } from '../services/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Character from '../domain/character';

const searchSubject = new BehaviorSubject<string>('');

export const useSearch = () => {
  const queryClient = useQueryClient();

  const { data: favorites = [] } = useQuery<Character[]>(
    { queryKey: ["favorites"], queryFn: () => queryClient.getQueryData(["favorites"]) ?? [] }
  );

  useEffect(() => {
    const subscription = searchSubject
      .pipe(debounceTime(300), switchMap((name) => fetchCharactersByName(name).then(res => res.data.results).catch(() => null)))
      .subscribe({
        next: (response: Character[]) => {
          if(response == null) {
            queryClient.setQueryData(['characters'], []);
          }
          else {
            const mappedCharacters = response.map(character => {
              const mappedCharacter: Character = {
                id: character.id,
                name: character.name,
                species: character.species,
                image: character.image,
                favorite: favorites.some(fav => fav.id === character.id),
              };
              return mappedCharacter;
            });
            queryClient.setQueryData(['characters'], mappedCharacters);
          }
        },
      });

    return () => subscription.unsubscribe();
  }, [queryClient, favorites]);

  const search = (name: string) => searchSubject.next(name);

  return { search };
};