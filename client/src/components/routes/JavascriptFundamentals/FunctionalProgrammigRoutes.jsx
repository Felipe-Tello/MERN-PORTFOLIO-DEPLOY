import { Route, Routes } from 'react-router-dom';
import ObjectMaster from '../../components/JavascriptFundamentals/ObjectMaster';

const FunctionalProgrammigRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/object-master" element={<ObjectMaster/>}/>
            </Routes>
        </div>
    )
}

export default FunctionalProgrammigRoutes;