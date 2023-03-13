import { Route, Routes } from 'react-router-dom';
import Apoyalo from "../../components/ReactJS/Apoyalo";
import Advertisement from '../../components/ReactJS/ReactBlocks/Advertisement';
import Header from '../../components/ReactJS/ReactBlocks/Header';
import Main from '../../components/ReactJS/ReactBlocks/Main';
import Navigation from '../../components/ReactJS/ReactBlocks/Navigation';
import SubContents from '../../components/ReactJS/ReactBlocks/SubContents';
import TodoJunto from '../../components/ReactJS/TodoJunto';

const ClassComponentsRoutes = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/apoyalo" element={
                    <div>
                        <div className="Title">
                            <h2>Apóyalo <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/2-%20Class%20components/1-%20Prop%20it%20up/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                            <p>Utilizar componentes de clase y sus props para desplegar informacion personalizada en cada uno de estos</p>
                        </div>
                        <div className="Disclaimer">
                        </div>
                        <div className="Core no-code">
                            <div style={{width:"80%", display:"flex", justifyContent:"space-evenly", textAlign:"center"}}>
                                <Apoyalo firstName="Jane" lastName="Doe" age={45} hairColor="Black"></Apoyalo>
                                <Apoyalo firstName="John" lastName="Smith" age={88} hairColor="Brown"></Apoyalo>
                                <Apoyalo firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"></Apoyalo>
                                <Apoyalo firstName="Maria" lastName="Smith" age={62} hairColor="Brown"></Apoyalo>
                            </div>
                        </div>
                        <div className="Objectives">
                            <h3>Lista de Objetivos</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Crea un componente &lt;PersonCard&gt; que acepte las siguientes propiedades: firstName, lastName, age y hairColor</label>
                                </li>
                            </ul>
                        </div>
                        <div className="Github">
                        </div>
                    </div>
                    }/>
                <Route path="/poniendo-todo-junto" element={
                    <div>
                        <div className="Title">
                            <h2>Poniendo todo junto <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/2-%20Class%20components/2-%20Putting%20it%20together/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                            <p>Usar la misma asignación Prop It Up(Apóyalo) creando un botón de cumpleaños que aumente la edad de la persona en un año.</p>
                        </div>
                        <div className="Disclaimer">
                        </div>
                        <div className="Core no-code">
                            <div style={{width:"80%", display:"flex", justifyContent:"space-evenly", textAlign:"center"}}>
                                <TodoJunto firstName="Jane" lastName="Doe" age={45} hairColor="Black"></TodoJunto>
                                <TodoJunto firstName="John" lastName="Smith" age={88} hairColor="Brown"></TodoJunto>
                                <TodoJunto firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"></TodoJunto>
                                <TodoJunto firstName="Maria" lastName="Smith" age={62} hairColor="Brown"></TodoJunto>
                            </div>
                        </div>
                        <div className="Objectives">
                            <h3>Lista de Objetivos</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Completar la asignacion</label>
                                </li>
                            </ul>
                        </div>
                        <div className="Github">
                        </div>
                    </div>
                    }/>
                <Route path="/react-blocks" element={
                    <div>
                        <div className="Title">
                            <h2>Trazando nuestros bloques de React <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/2-%20Class%20components/3-%20React%20blocks/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                            <p>Recreear la asignación de "Trazar tus bloques" de Fundamentos de la web usando React Components.</p>
                        </div>
                        <div className="Disclaimer">
                        </div>
                        <div className="Core" style={{display:"flex", justifyContent:"center"}}>
                            <div style={{width: "60vw",height: "100%", backgroundColor:"#dddddd", padding:"2% 2% 2% 2%", border:"3px solid black", margin:"1% 0 1% 0"}}>
                                <Header/>
                                <Navigation/>
                                <Main>
                                    <SubContents/>
                                    <SubContents/>
                                    <SubContents/>
                                    <Advertisement/>
                                </Main>
                            </div>
                        </div>
                        <div className="Objectives">
                            <h3>Lista de Objetivos</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Completar la asignacion</label>
                                </li>
                            </ul>
                        </div>
                        <div className="Github">
                        </div>
                    </div>
                    }/>
            </Routes>
        </div>
    );
}
 
export default ClassComponentsRoutes;