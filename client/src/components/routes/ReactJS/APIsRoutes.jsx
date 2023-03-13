import { Route, Routes } from 'react-router-dom';
import AxiosPokemonAPI from '../../components/ReactJS/AxiosPokemonAPI';
import FiveHeads from '../../components/ReactJS/FiveHeads';
import PokemonAPI from '../../components/ReactJS/PokemonAPI';

const APIsRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/lanzar-monedas" element={<FiveHeads />}/>
                <Route path="/pokemon-api" element={<PokemonAPI />}/>
                <Route path="/axios-pokemon-api" element={<AxiosPokemonAPI />}/>
            </Routes>
        </div>
    )
}

export default APIsRoutes;