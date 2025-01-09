import Character from "../domain/character";
import { useCharacterDisplay } from "../hooks/useCharacterDisplay";

interface CharacterDisplayProps {
  setCharacters: (value: Character[]) => void;
  characters : Character[];
}

const CharacterDisplay = ({ characters, setCharacters }: CharacterDisplayProps) => {
    const { setFavorite } = useCharacterDisplay(characters, setCharacters);

    if (characters.length > 0) {
        return (
            <div className="grid grid-cols-3 gap-5 overflow-auto mt-8">
                {characters.map((char: Character) => (
                    <div key={char.id} className="bg-[#0A0A0A] rounded-xl border border-[#3D3D3D] relative">
                        <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setFavorite(char)}>

                            {/* ícone coração outline */}
                            {!char.favorite && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>}

                            {/* ícone coração preenchido */}
                            {char.favorite && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>}
                            
                        </div>
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