"use client";
import Home from "../pages/home";
import Navbar from "../components/navbar";
import Favorites from "../pages/favorites";
import { Route, Routes } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Character from "../domain/character";
import { useState } from "react";

export interface GenericPageProps {
    setFavorite: (character: Character) => void;
    characters: Character[];
}

const Main = () => {
    const queryClient = useQueryClient();
    const { data: characters = [] } = useQuery<Character[]>({ queryKey: ["characters"], queryFn: () => queryClient.getQueryData(["characters"]) ?? [] });
    const { data: favoriteCharacters = [] } = useQuery<Character[]>({ queryKey: ["favorites"], queryFn: () => queryClient.getQueryData(["favorites"]) ?? [] });
    const [favoriteCount, setFavoriteCount] = useState<number>(favoriteCharacters.length); 

    function setFavorite(character: Character) {
        let updatedFavorites: Character[] = [];
        favoriteCharacters.forEach(char => updatedFavorites.push(Object.assign({}, char)));
        character.favorite = !character.favorite;
        if (character.favorite) {
            updatedFavorites.push(character);
        }
        else {
            updatedFavorites = favoriteCharacters.filter(fav => fav.id != character.id);
        }
        queryClient.setQueryData(['favorites'], updatedFavorites);
        setFavoriteCount(updatedFavorites.length);
    }

    return (
        <>
            <Navbar favoriteCount={favoriteCount} />
            <Routes>
                <Route path="/" element={<Home characters={characters} setFavorite={setFavorite} />} />
                <Route path="/favoritos" element={<Favorites characters={favoriteCharacters} setFavorite={setFavorite} />} />
            </Routes>
        </>
    );
};

export default Main;