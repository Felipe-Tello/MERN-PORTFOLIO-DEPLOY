import { Route, Routes } from 'react-router-dom';
import APIBromas from '../../components/MongoDB/APIBromas/APIBromas';
import MongooseIndex from '../../Introduction/4-MongoDB/2-MongooseIndex';

const MongooseRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<MongooseIndex />}/>
                <Route path="/api-de-bromas" element={<APIBromas />}/>
            </Routes>
        </div>
    )
}

export default MongooseRoutes;