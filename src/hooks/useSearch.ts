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
          response.forEach(character => {
            character.favorite = favorites.some(fav => fav.id === character.id);
          });
          queryClient.setQueryData(['characters'], response);
        },
      });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  const search = (name: string) => searchSubject.next(name);

  return { search };
};