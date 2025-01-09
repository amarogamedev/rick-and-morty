import { useState } from "react";
import CharacterDisplay from "../components/character-display";
import Character from "../domain/character";
import CustomTitle from "../components/custom-title";

const Favorites = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    return (
        <div className="max-w-[720px] mx-auto p-4">
            <div className="my-4 h-12">
                <CustomTitle text={"Favoritos"} />
            </div>
            <CharacterDisplay characters={characters} setCharacters={setCharacters} favoritesPage={true} />
        </div>
    );
};

export default Favorites;