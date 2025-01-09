import { useState } from "react";
import CharacterDisplay from "../components/character-display";
import Search from "../components/search";
import Character from "../domain/character";

const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    return (
        <div className="max-w-[720px] mx-auto p-4">
            <div className="flex justify-between items-center my-4">
                <span className="text-5xl text-[#00B5CC] font-creepster" style={{
                    WebkitTextStroke: "1px #B2DF28",
                    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)"
                }}>
                    Início
                </span>
                <Search setCharacters={setCharacters} />
            </div>
            <CharacterDisplay characters={characters} setCharacters={setCharacters} favoritesPage={false} />
        </div>
    );
};

export default Home;