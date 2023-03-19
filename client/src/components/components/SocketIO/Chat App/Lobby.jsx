import { io } from "socket.io-client";
import {useState} from "react";
import Chat from './Chat'

// connecting front end to backend 
const socket = io("http://localhost:8001", {
  transports: ["websocket"],
});

const Lobby = () => {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      // cannot join room if user name & room number is empty
      if (username !== "" && room !== "") {
      // join room data passed though room  into emit function to socket.join data in our server
        socket.emit("join_room", room);
        setShowChat(true);
      }
    }

    return (
        <div>
            <div className="Title">
                <h2>Chat App <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/7-%20SocketIO/1-%20SocketIO/2-%20Chat%20App"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>LLevar a la practica lo aprendido acerca de Socket.io creando una aplicacion de mensajeria.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className='Core no-code'>
                {!showChat ? (
                    <div className="bgn-primary" style={{padding:"5%"}}>
                        <h3 style={{textAlign:"center"}}>Join A Chat</h3>
                        <input type="text" placeholder="name..." onChange={(event) => {setUsername(event.target.value)}}/>
                        <input type="text" placeholder="Room iD..." onChange={(event) => {setRoom(event.target.value)}}/>
                        <button onClick={joinRoom}>Join A room</button>
                    </div>
                    )
                    : (
                    <Chat socket={socket} username={username} room={room}/>
                    )}
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea una aplicación de chat completamente funcional</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bonificación: mantén los mensajes de chat desplazados hacia abajo de forma predeterminada</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Ninja Bonus: agrega diferentes salas de chat a las que los usuarios pueden unirse</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Bono Sensei: muestra mensajes de chat de antes de que un usuario se haya unido al chat cuando se une</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default Lobby;