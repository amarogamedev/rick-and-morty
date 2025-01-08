import { useEffect } from 'react';
import { BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { fetchCharactersByName } from '../services/api';
import Character from '../domain/character';

const searchSubject = new BehaviorSubject<string>('');

export const useSearch = (updateCharacters: (value: Character[]) => void) => {

  useEffect(() => {
    const subscription = searchSubject.pipe(debounceTime(300), switchMap(
        (name) => fetchCharactersByName(name).then(res => res.data.results).catch(() => null))
    ).subscribe({
        next: (results) => {
            updateCharacters(results);
        },
      });

    return () => subscription.unsubscribe();
  }, []);

  const search = (name: string) => searchSubject.next(name);

  return { search };
};