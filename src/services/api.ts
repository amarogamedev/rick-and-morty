import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const fetchCharactersByName = (name: string) => 
  api.get(`/character/?name=${name}`);
//TODO trocar por parametro