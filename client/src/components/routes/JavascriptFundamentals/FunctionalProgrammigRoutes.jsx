import { Route, Routes } from 'react-router-dom';
import ObjectMaster from '../../components/JavascriptFundamentals/ObjectMaster';
import FunctionalProgrammingIndex from '../../Introduction/1-Javascript Fundamentals/3-FunctionalProgrammingIndex';

const FunctionalProgrammigRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<FunctionalProgrammingIndex/>}/>
                <Route path="/object-master" element={<ObjectMaster/>}/>
            </Routes>
        </div>
    )
}

export default FunctionalProgrammigRoutes;