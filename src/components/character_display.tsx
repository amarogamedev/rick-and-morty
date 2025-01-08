import Character from "../domain/character";

const CharacterDisplay = ({ characters }: { characters: Character[] }) => {

    return (
        <div>
            {characters.map((char: Character) => (
                <div key={char.id}>
                    <img src={char.image} alt={char.name}/>
                    <h3>{char.name}</h3>
                    <p>{char.species}</p>
                </div>
            ))}
        </div>
    );
};

export default CharacterDisplay;