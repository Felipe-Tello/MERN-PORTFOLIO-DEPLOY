import { Route, Routes } from 'react-router-dom';
import APIBromas from '../../components/MongoDB/APIBromas/APIBromas';

const MongooseRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/api-de-bromas" element={<APIBromas />}/>
            </Routes>
        </div>
    )
}

export default MongooseRoutes;