"use client";
import Home from "../pages/home";
import Navbar from "../components/navbar";
import Favorites from "../pages/favorites";
import { Route, Routes } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import Character from "../domain/character";
import { useState } from "react";

export interface GenericPageProps {
    setFavorite: (character: Character) => void;
}

const Main = () => {
    const queryClient = useQueryClient();

    const [favoriteCount, setFavoriteCount] = useState<number>(0); 

    function setFavorite(character: Character) {
        let favorites: Character[] = queryClient.getQueryData(['favorites']) ?? [];
        character.favorite = !character.favorite;
        if (character.favorite) {
            favorites.push(character);
        }
        else {
            favorites = favorites.filter(fav => fav.id != character.id);
        }
        queryClient.setQueryData(['favorites'], favorites);
        setFavoriteCount(favorites.length);
    }

    return (
        <>
            <Navbar favoriteCount={favoriteCount} />
            <Routes>
                <Route path="/" element={<Home setFavorite={setFavorite} />} />
                <Route path="/favoritos" element={<Favorites setFavorite={setFavorite} />} />
            </Routes>
        </>
    );
};

export default Main;