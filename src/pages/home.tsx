import { useState } from "react";
import CharacterDisplay from "../components/character-display";
import Search from "../components/search";
import Character from "../domain/character";

const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    return (
        <div>
            <Search setCharacters={setCharacters}/>
            <CharacterDisplay characters={characters}/>
        </div>
    )
};

export default Home;