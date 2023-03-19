import { Route, Routes } from 'react-router-dom';
import AxiosPokemonAPI from '../../components/ReactJS/AxiosPokemonAPI';
import FiveHeads from '../../components/ReactJS/FiveHeads';
import PokemonAPI from '../../components/ReactJS/PokemonAPI';
import APIsIndex from '../../Introduction/2-ReactJS/4-APIsIndex';

const APIsRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<APIsIndex />}/>
                <Route path="/lanzar-monedas" element={<FiveHeads />}/>
                <Route path="/pokemon-api" element={<PokemonAPI />}/>
                <Route path="/axios-pokemon-api" element={<AxiosPokemonAPI />}/>
            </Routes>
        </div>
    )
}

export default APIsRoutes;