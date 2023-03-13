import { Route, Routes } from 'react-router-dom';
import FakeAPI from '../../components/ExpressJS/FakeAPI';
import PostmanPokemon from '../../components/ExpressJS/PostmanPokemon';

const ExpressRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/api-falsa" element={<FakeAPI />}/>
                <Route path="/postman-+-pokemon" element={<PostmanPokemon />}/>
            </Routes>
        </div>
    )
}

export default ExpressRoutes;