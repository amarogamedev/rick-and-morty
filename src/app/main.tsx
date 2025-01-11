"use client";
import Home from "../components/pages/home";
import Navbar from "../components/navbar";
import Favorites from "../components/pages/favorites";
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
    const [pageIndex, setPageIndex] = useState<number>(0);

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
            <Navbar favoriteCount={favoriteCount} pageIndex={pageIndex} setPageIndex={setPageIndex}/>
            {pageIndex === 0 && <Home characters={characters} setFavorite={setFavorite} />}
            {pageIndex === 1 && <Favorites characters={favoriteCharacters} setFavorite={setFavorite} />}
        </>
    );
};

export default Main;