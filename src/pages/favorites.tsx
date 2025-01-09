import { useState } from "react";
import CharacterDisplay from "../components/character-display";
import Character from "../domain/character";

const Favorites = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    return (
        <div className="max-w-[720px] mx-auto p-4">
            <CharacterDisplay characters={characters} setCharacters={setCharacters} favoritesPage={true} />
        </div>
    );
};

export default Favorites;