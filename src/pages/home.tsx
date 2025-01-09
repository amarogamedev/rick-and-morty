import { useState } from "react";
import CharacterDisplay from "../components/character-display";
import Search from "../components/search";
import Character from "../domain/character";
import CustomTitle from "../components/custom-title";

const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    return (
        <div className="max-w-[720px] mx-auto p-4">
            <div className="flex justify-between items-center my-4 h-12">
                <CustomTitle text={"Início"} />
                <Search setCharacters={setCharacters} />
            </div>
            <CharacterDisplay characters={characters} setCharacters={setCharacters} favoritesPage={false} />
        </div>
    );
};

export default Home;