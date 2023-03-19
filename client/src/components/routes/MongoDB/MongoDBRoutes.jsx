import { Route, Routes } from 'react-router-dom';
import UsandoMongoDB from '../../components/MongoDB/UsandoMongoDB';
import MongoDBIndex from '../../Introduction/4-MongoDB/1-MongoDBIndex';

const MongoDBRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<MongoDBIndex />}/>
                <Route path="/usando-mongodb" element={<UsandoMongoDB />}/>
            </Routes>
        </div>
    )
}

export default MongoDBRoutes;