import { Route, Routes } from 'react-router-dom';
import UsandoMongoDB from '../../components/MongoDB/UsandoMongoDB';

const MongoDBRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/usando-mongodb" element={<UsandoMongoDB />}/>
            </Routes>
        </div>
    )
}

export default MongoDBRoutes;