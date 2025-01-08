import Character from "../domain/character";

const CharacterDisplay = ({ characters }: { characters: Character[] }) => {
    return (
        <div className="grid grid-cols-3 gap-5 overflow-auto">
            {characters.map((char: Character) => (
                <div key={char.id} className="bg-black rounded-xl border-[1px] border-[#3D3D3D]">
                    <img src={char.image} alt={char.name} className="w-full h-auto rounded-t-xl"/>
                    <div className="p-3">
                        <h3 className="truncate text-2xl font-creepster">{char.name}</h3>
                        <p>{char.species}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CharacterDisplay;