import CharacterDisplay from "../components/character-display";
import Search from "../components/search";
import CustomTitle from "../components/custom-title";
import { GenericPageProps } from "../app/main";

const Home: React.FC<GenericPageProps> = ({ setFavorite, characters }) => {    
    return (
        <div className="max-w-[720px] mx-auto p-4">
            <div className="flex justify-between items-center my-4 h-12">
                <CustomTitle text={"Início"} />
                <Search />
            </div>
            <CharacterDisplay setFavorite={setFavorite} characters={characters} favoritesPage={false} />
        </div>
    );
};

export default Home;