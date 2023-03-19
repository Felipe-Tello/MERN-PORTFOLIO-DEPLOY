import { Route, Routes } from 'react-router-dom';
import Ninja from '../../components/JavascriptFundamentals/Ninja';
import SuperNinja from '../../components/JavascriptFundamentals/SuperNinja';
import TimeToDuel from '../../components/JavascriptFundamentals/TimeToDuel';
import OopIndex from '../../Introduction/1-Javascript Fundamentals/2-OopIndex';

const OopRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<OopIndex/>}/>
                <Route path="/ninja" element={<Ninja/>}/>
                <Route path="/super-ninja" element={<SuperNinja/>}/>
                <Route path="/es-hora-de-duelo" element={<TimeToDuel/>}/>
            </Routes>
        </div>
    )
}

export default OopRoutes;