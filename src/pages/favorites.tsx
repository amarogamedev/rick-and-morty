import { GenericPageProps } from "../app/main";
import CharacterDisplay from "../components/character-display";
import CustomTitle from "../components/custom-title";

const Favorites: React.FC<GenericPageProps> = ({ setFavorite, characters }) => {    
    return (
        <div className="max-w-[720px] mx-auto p-4">
            <div className="my-4 h-12">
                <CustomTitle text={"Favoritos"} />
            </div>
            <CharacterDisplay setFavorite={setFavorite} characters={characters} favoritesPage={true} />
        </div>
    );
};

export default Favorites;