import { Link } from "react-router-dom";
import Character from "../domain/character";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface CharacterDisplayProps {
    setFavorite: (value: Character) => void;
    favoritesPage: boolean;
}

const CharacterDisplay = ({ setFavorite, favoritesPage }: CharacterDisplayProps) => {
    const queryClient = useQueryClient();
    const page = favoritesPage ? "favorites" : "characters";
    const { data: characters = [] } = useQuery<Character[]>(
        {queryKey: [page], queryFn: () => queryClient.getQueryData([page]) ?? []}
    );

    if (characters != null && characters.length > 0) {
        return (
            <div className="grid grid-cols-3 gap-5 overflow-auto mt-8">
                {characters.map((char: Character) => (
                    <div key={char.id} className="bg-[#0A0A0A] rounded-xl border border-[#3D3D3D] relative">
                        <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setFavorite(char)}>

                            {/* ícone coração outline */}
                            {!char.favorite && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" strokeWidth="2" fill="white" className="size-5">
                                <path d="M8.78906 17.3203L8.71094 17.2031L1.875 10.875C0.664062 9.74219 0 8.17969 0 6.53906V6.42188C0 3.6875 1.95312 1.30469 4.64844 0.796875C6.17188 0.484375 7.73438 0.835938 9.02344 1.73438C9.375 1.96875 9.6875 2.28125 10 2.59375C10.1562 2.4375 10.3125 2.24219 10.5078 2.08594C10.6641 1.96875 10.8203 1.85156 10.9766 1.73438C12.2266 0.835938 13.7891 0.484375 15.3125 0.796875C18.0469 1.30469 20 3.6875 20 6.42188V6.53906C20 8.17969 19.2969 9.74219 18.0859 10.875L11.25 17.2031L11.1719 17.3203C10.8594 17.5938 10.4297 17.7891 10 17.7891C9.53125 17.7891 9.14062 17.5938 8.78906 17.3203ZM9.33594 4.66406C9.29688 4.66406 9.29688 4.66406 9.29688 4.625L8.59375 3.84375C7.69531 2.82812 6.32812 2.39844 5 2.63281C3.16406 2.98438 1.875 4.58594 1.875 6.42188V6.53906C1.875 7.67188 2.30469 8.72656 3.125 9.46875L10 15.8359L16.8359 9.46875C17.6562 8.72656 18.125 7.67188 18.125 6.53906V6.42188C18.125 4.58594 16.7969 2.98438 14.9609 2.63281C13.6328 2.39844 12.2656 2.82812 11.3672 3.84375L10.6641 4.625C10.6641 4.66406 10.6641 4.66406 10.625 4.70312C10.4688 4.85938 10.2344 4.97656 10 4.97656C9.72656 4.97656 9.49219 4.85938 9.33594 4.70312V4.66406Z" />
                            </svg>}

                            {/* ícone coração preenchido */}
                            {char.favorite && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="#0A0A0A" className="size-5">
                                <path d="M1.83594 10.7578C0.664062 9.66406 0 8.10156 0 6.46094V6.26562C0 3.53125 1.95312 1.1875 4.64844 0.757812C6.44531 0.445312 8.24219 1.03125 9.53125 2.28125L10 2.75L10.4688 2.28125C11.7188 1.03125 13.5547 0.445312 15.3125 0.757812C18.0078 1.1875 20 3.53125 20 6.26562V6.46094C20 8.10156 19.2969 9.66406 18.125 10.7578L11.0547 17.3594C10.7812 17.6328 10.3906 17.75 10 17.75C9.57031 17.75 9.17969 17.6328 8.90625 17.3594L1.83594 10.7578Z" fill="#0A0A0A" />
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
        <div className="bg-[#0A0A0A] h-[512px] mt-8 rounded-xl border border-[#3D3D3D] flex flex-col gap-4 items-center justify-center text-center">
            <p className="truncate text-2xl font-bold">{favoritesPage ? "Parece que você ainda não tem favoritos" : "Nada foi encontrado"}</p>
            <p className="truncate text-[#A4A4A4]">{favoritesPage ? "Volte à página inicial e escolha os melhores para você." : "Tente realizar uma nova busca."}</p>
            {favoritesPage && <Link to="/" className="flex items-center justify-center rounded-lg p-3 h-[40px] w-[140px] text-[14px] font-[600] bg-white text-black">
                Voltar ao início
            </Link>}
        </div>
    )
};

export default CharacterDisplay;