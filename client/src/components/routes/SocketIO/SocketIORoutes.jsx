import { Route, Routes } from 'react-router-dom';
import Lobby from '../../components/SocketIO/Chat App/Lobby';
import CreandoHandShake from '../../components/SocketIO/CreandoHandShake';

const SocketIORoutes = () =>{

    return(
        <div>
            <Routes>
                <Route path="/creando-el-handshake" element={<CreandoHandShake/>}/>
                <Route path="/chat-app" element={<Lobby/>}/>
            </Routes>
        </div>
    )
}

export default SocketIORoutes;