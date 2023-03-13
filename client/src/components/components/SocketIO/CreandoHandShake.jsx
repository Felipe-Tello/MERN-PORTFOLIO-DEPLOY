const CreandoHandShake = () => {

    return (
        <div>
            <div className="Title">
                <h2>Creando el Hand Shake <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/7-%20SocketIO/1-%20SocketIO/1-%20Creating%20the%20Handshake"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Entender el funcionamiento de Socket.io ademas de crear funciones para recibir y emitir datos.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <div>hola soy un video</div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea un nuevo y nuevo proyecto MERN.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">SERVIDOR - instale socket.io y express.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">SERVIDOR - En su archivo server.js configure su servidor express y socket.io.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">SERVIDOR - Dentro de la función io. ("Conexión", socket =&gt; {}), agregue un console.log ("Encantado de conocerte.(Estrechar la mano)").</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">SERVIDOR: después de console.log (), cree un evento socket.emit () y pase un mensaje de bienvenida de cadena simple.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">CLIENTE - Instalar socket.io-client.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">CLIENTE: cree un componente Chat.jsx (continuaremos usando esta tarea hasta la próxima).</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">CLIENTE: cree un escucha para el evento de bienvenida y la consola registre los datos.</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default CreandoHandShake;