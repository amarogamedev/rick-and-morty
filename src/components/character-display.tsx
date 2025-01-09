import Character from "../domain/character";

const CharacterDisplay = ({ characters }: { characters: Character[] }) => {
    if (characters.length > 0) {
        return (
            <div className="grid grid-cols-3 gap-5 overflow-auto mt-8">
                {characters.map((char: Character) => (
                    <div key={char.id} className="bg-[#0A0A0A] rounded-xl border border-[#3D3D3D]">
                        <img src={char.image} alt={char.name} className="w-full h-auto rounded-t-xl" />
                        <div className="p-3">
                            <p className="truncate text-2xl font-creepster">{char.name}</p>
                            <p>{char.species}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    return (
        <div className="bg-[#0A0A0A] h-[512px] mt-8 rounded-xl border border-[#3D3D3D] flex items-center justify-center text-center">
            <div>
                <p className="truncate text-2xl font-bold">Nada foi encontrado</p>
                <p className="truncate text-[#A4A4A4] mt-2">Tente realizar uma nova busca.</p>
            </div>
        </div>
    )
};

export default CharacterDisplay;