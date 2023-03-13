import { Route, Routes } from 'react-router-dom';
import Ninja from '../../components/JavascriptFundamentals/Ninja';
import SuperNinja from '../../components/JavascriptFundamentals/SuperNinja';
import TimeToDuel from '../../components/JavascriptFundamentals/TimeToDuel';

const OopRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/ninja" element={<Ninja/>}/>
                <Route path="/super-ninja" element={<SuperNinja/>}/>
                <Route path="/es-hora-de-duelo" element={<TimeToDuel/>}/>
            </Routes>
        </div>
    )
}

export default OopRoutes;