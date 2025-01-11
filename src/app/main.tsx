"use client";
import Navbar from "../components/navbar";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Character from "../domain/character";
import { useState } from "react";
import Search from "../components/search";
import CustomTitle from "../components/custom-title";
import CharacterDisplay from "../components/character-display";

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
    const isHomePage = pageIndex === 0;

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
            <Navbar favoriteCount={favoriteCount} pageIndex={pageIndex} setPageIndex={setPageIndex} />
            <div className="max-w-[720px] mx-auto p-4">
                <div className="flex justify-between items-center my-4 h-12">
                    <CustomTitle text={isHomePage ? "Início" : "Favoritos"} />
                    {isHomePage && <Search />}
                </div>
                <CharacterDisplay setFavorite={setFavorite} characters={isHomePage ? characters : favoriteCharacters} isHomePage={isHomePage} setPageIndex={setPageIndex}/>
            </div>
        </>
    );
};

export default Main;