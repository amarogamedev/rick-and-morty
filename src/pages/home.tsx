import { useState } from "react";
import CharacterDisplay from "../components/character_display";
import Search from "../components/search";
import Character from "../domain/character";

const Home = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    function updateCharacters(value: Character[]) {
        setCharacters(value);
    }

    return (
        <div>
            <Search updateCharacters={updateCharacters}/>
            <CharacterDisplay characters={characters}/>
        </div>
    )
};

export default Home;