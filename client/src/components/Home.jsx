const Home = () =>{

    return(
        <div style={{width:"90%", display:"flex", justifyContent:"center", border:"2px solid black", borderRadius:"10px", padding:"5%", margin:"0 0 5% 5%"}}>
            <div>
                <div style={{textAlign:"center"}}>
                    <h1>Hola, gracias por llegar aca</h1>
                    <p>Esta es una pagina enfocada a mostrar cada una de las tecnologias y herraminetas que se utilizar y he visto a lo largo de mi camino como desarrollador Full-Stack MERN</p>
                    <p>En cada seccion podras ver las actividades o tareas que fueron asignadas para llegar a obtener el conocimiento necesario para ejercer como desarrolador web. las tareas se dividen en dos tipos: Las que son obligatorias y fundamentales para entender como funciona el flujo de trabajo y las que son opcionales y añaden un grado mas de profundidad a las actividades principales</p>

                    <h1>MERN</h1>

                    <p>como puedes ver arriba cada una de las letras corresponden a una tecnologia o herramienta que en conjunto permiten desarrollar sitios webs como este y muchos mas!!</p>
                    <h3>en la siguiente tabla puedo mostrar algunas de puntos claves vistos en cada seccion</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>M</th>
                            <th>E</th>
                            <th>R</th>
                            <th>N</th>
                        </tr>
                        <tr>
                            <th>Mongo DB</th>
                            <th>Express</th>
                            <th>React</th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <ul>
                                    <li>Creacion de db y colecciones</li>
                                    <li>Quearys</li>
                                    <li>Mongoose</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Configuraciones</li>
                                    <li>Controladores</li>
                                    <li>Rutas</li>
                                    <li>Modelos</li>
                                    <li>Bcrypt</li>
                                    <li>JWT</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Componentes de clase</li>
                                    <li>Componentes de Funcionales</li>
                                    <li>Enrutamiento</li>
                                    <li>Llamada a APIs con Fetch y Axios</li>
                                    <li>useState</li>
                                    <li>useEffect</li>
                                    <li>useReduce</li>
                                    <li>useContext</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>Manejo de dependencias npm</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Home