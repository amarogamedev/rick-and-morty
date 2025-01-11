"use client";
import Home from "../pages/home";
import Navbar from "../components/navbar";
import Favorites from "../pages/favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Character from "../domain/character";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export interface GenericPageProps {
  setFavorite: (character: Character) => void;
}

const App = () => {
  const queryClient = new QueryClient();

  function setFavorite(character: Character) {
    let favorites: Character[] = queryClient.getQueryData(['favorites']) ?? [];
    character.favorite = !character.favorite;
    if(character.favorite) {
      favorites.push(character);
    }
    else {
      favorites = favorites.filter(fav => fav.id != character.id);
    }
    queryClient.setQueryData(['favorites'], favorites);
  }

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setFavorite={setFavorite} />} />
          <Route path="/favoritos" element={<Favorites setFavorite={setFavorite} />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;