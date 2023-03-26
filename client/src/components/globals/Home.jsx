import ConditionalView from "./ConditionalView"

const Home = () =>{

    return(
        <div style={{display:"flex", justifyContent:"center", border:"2px solid black", borderRadius:"10px", padding:" 0 5%"}}>
            <div className="no-code" style={{flexDirection:"column"}}>
                <div style={{textAlign:"center"}}>
                    <div style={{display:"flex", justifyContent:"center", marginBottom:"1%"}}>
                        <span className="Font-background M">M</span>
                        <span className="Font-background E">E</span>
                        <span className="Font-background R">R</span>
                        <span className="Font-background N">N</span>
                    </div>
                    <h1>Hola, gracias por llegar acá</h1>
                    <p>mi página es una muestra de las tecnologías y herramientas que he utilizado como desarrollador Full-Stack MERN. Cada sección presenta las actividades y tareas que he realizado para obtener el conocimiento necesario para ejercer como desarrollador web. Las tareas se dividen en:</p>
                    <br />
                    <ConditionalView maxWidth={9999} minWidth={900}>
                    <table style={{overflowX:"auto"}}>
                        <thead>
                            <tr style={{color:"black"}}>
                                <th style={{backgroundColor:"rgba(189,195,255,1)"}}>Obligatorias</th>
                                <th style={{backgroundColor:"rgba(182,255,236,1)"}}>Practicas</th>
                                <th style={{backgroundColor:"rgba(227,255,178,1)"}}>Opcionales</th>
                                <th style={{backgroundColor:"rgba(255,215,179,1)"}}>Originales</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>necesarias para presentar el examen y contar con el conocimiento basico esperado</td>
                                <td>utilizadas para ejercitar los conocimientos fundamentales</td>
                                <td>que añaden una capa extra al contenido ya visto</td>
                                <td>son ejercicios que no estaban presentes en el contenido original, pero se crearon con el objetivo de mostrar experiencia en esas areas</td>
                            </tr>
                        </tbody>
                    </table>
                    </ConditionalView>
                    <ConditionalView maxWidth={899} minWidth={0}>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center", color:"black"}}>
                            <thead>
                                <tr>
                                    <th style={{backgroundColor:"rgba(189,195,255,1)"}}>Obligatorias</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>necesarias para presentar el examen y contar con el conocimiento basico esperado</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center", color:"black"}}>
                            <thead>
                                <tr>
                                    <th style={{backgroundColor:"rgba(182,255,236,1)"}}>Practicas</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>utilizadas para ejercitar los conocimientos fundamentales</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center", color:"black"}}>
                            <thead>
                                <tr>
                                    <th style={{backgroundColor:"rgba(227,255,178,1)"}}>Opcionales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>que añaden una capa extra al contenido ya visto</td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center", color:"black"}}>
                            <thead>
                                <tr>
                                    <th style={{backgroundColor:"rgba(255,215,179,1)"}}>Originales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>son ejercicios que no estaban presentes en el contenido original, pero se crearon con el objetivo de mostrar experiencia en esas areas</td>
                                </tr>
                            </tbody>
                        </table>
                    </ConditionalView>
                    <br />
                    <p></p>
                    <h3>en la siguiente tabla puedo mostrar algunas de puntos claves vistos en cada seccion</h3>
                </div>
                <ConditionalView maxWidth={9999} minWidth={900}>
                    <table class="table table-dark table-striped table-bordered border-light">
                        <thead style={{textAlign:"center"}}>
                            <tr>
                                <th>Mongo DB</th>
                                <th>Express</th>
                                <th>React</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{width:"20%"}}>
                                    <ul>
                                        <li>Creacion de db y colecciones</li>
                                        <li>Querys</li>
                                        <li>Mongoose</li>
                                    </ul>
                                </td>
                                <td style={{width:"20%"}}>
                                    <ul>
                                        <li>Configuraciones</li>
                                        <li>Controladores</li>
                                        <li>Rutas</li>
                                        <li>Modelos</li>
                                        <li>Bcrypt</li>
                                        <li>JWT</li>
                                    </ul>
                                </td>
                                <td style={{width:"20%"}}>
                                    <ul>
                                        <li>Componentes de clase</li>
                                        <li>Componentes de Funcionales</li>
                                        <li>Enrutamiento</li>
                                        <li>Llamada a APIs con Fetch y Axios</li>
                                        <li>Hooks</li>
                                    </ul>
                                </td>
                                <td style={{width:"20%"}}>
                                    <ul>
                                        <li>Manejo de dependencias npm</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </ConditionalView>
                <ConditionalView maxWidth={899} minWidth={0}>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center"}}>
                            <thead>
                                <tr>
                                    <th>Mongo DB</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <ul style={{listStyle:"none", textAlign:"center", padding:"0"}}>
                                            <li>Creacion de db y colecciones</li>
                                            <li>Querys</li>
                                            <li>Mongoose</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center"}}>
                            <thead>
                                <tr>
                                    <th>Express</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <ul style={{listStyle:"none", textAlign:"center", padding:"0"}}>
                                            <li>Configuraciones</li>
                                            <li>Controladores</li>
                                            <li>Rutas</li>
                                            <li>Modelos</li>
                                            <li>Bcrypt</li>
                                            <li>JWT</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center"}}>
                            <thead>
                                <tr>
                                    <th>React</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <ul style={{listStyle:"none", textAlign:"center", padding:"0"}}>
                                            <li>Configuraciones</li>
                                            <li>Controladores</li>
                                            <li>Rutas</li>
                                            <li>Modelos</li>
                                            <li>Bcrypt</li>
                                            <li>JWT</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="table table-dark table-striped table-bordered border-light" style={{textAlign:"center"}}>
                            <thead>
                                <tr>
                                    <th>NodeJS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <ul style={{listStyle:"none", textAlign:"center", padding:"0"}}>
                                            <li>Manejo de dependencias npm</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </ConditionalView>
            </div>
        </div>
    )
}

export default Home