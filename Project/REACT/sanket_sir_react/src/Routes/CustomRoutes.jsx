import { Route, Routes } from "react-router-dom";
import Pokedex from "../Components/Pokedex/Pokedex";
import PokemonDetails from "../Components/PokemonDetails/PokemonDetails";

function CustomRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/:id" element={<PokemonDetails/>}/>
        </Routes>

    )
}

export default CustomRoutes;