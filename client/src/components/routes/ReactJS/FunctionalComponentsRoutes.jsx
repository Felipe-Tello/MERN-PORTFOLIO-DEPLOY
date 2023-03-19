import { Route, Routes } from 'react-router-dom';
import FormWrapper from '../../components/ReactJS/ContextNavBar/Components/FormWrapper';
import Navbar from '../../components/ReactJS/ContextNavBar/Components/Navbar';
import Wrapper from '../../components/ReactJS/ContextNavBar/Components/Wrapper';
import FormularioConHooks from '../../components/ReactJS/FormularioConHooks';
import GeneradorDeCaja from '../../components/ReactJS/GeneradorDeCaja';
import GranInversion from '../../components/ReactJS/GranInversion';
import ListaQuehaceres from '../../components/ReactJS/ListaQuehaceres';
import MasFormularios from '../../components/ReactJS/MasFormularios';
import Pestanas from '../../components/ReactJS/Pestanas';
import ValidacionDeFormulario from '../../components/ReactJS/ValidacionDeFormulario';
import FunctionalComponentsIndex from '../../Introduction/2-ReactJS/3-FunctionalComponentsIndex';

const FunctionalComponentsRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<FunctionalComponentsIndex />}/>
                <Route path="/gran-inversion" element={
                    <div>
                        <div className="Title">
                            <h2>Gran inversión <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/1-%20Big%20inversion/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                            <p>Volver a hacer la tarea Prop It Up(Apóyalo) y convertir los componentes de clase en componentes funcionales.</p>
                        </div>
                        <div className="Disclaimer">
                        </div>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div className="Core no-code">
                                <div style={{width:"80%", display:"flex", justifyContent:"space-evenly", textAlign:"center"}}>
                                    <GranInversion firstName="Jane" lastName="Doe" age={45} hairColor="Black"></GranInversion>
                                    <GranInversion firstName="John" lastName="Smith" age={88} hairColor="Brown"></GranInversion>
                                    <GranInversion firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"></GranInversion>
                                    <GranInversion firstName="Maria" lastName="Smith" age={62} hairColor="Brown"></GranInversion>
                                </div>
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
                <Route path="/formulario-con-hooks" element={<FormularioConHooks />}/>
                <Route path="/mas-formularios" element={<MasFormularios />}/>
                <Route path="/validacion-de-formulario" element={<ValidacionDeFormulario />}/>
                <Route path="/generador-de-caja" element={<GeneradorDeCaja />}/>
                <Route path="/pestanas" element={<Pestanas labelContent={[{label: "Tab 1", content: "Tab 1 content is showing here"},{label: "Tab 2", content: "Tab 2 content is showing here"},{label: "Tab 3", content: "Tab 3 content is showing here"}]} />}/>
                <Route path="/lista-de-quehaceres" element={<ListaQuehaceres />}/>
                <Route path="/contexto-navbar" element={
                    <div>
                        <div className="Title">
                            <h2>Contexto de la barra de navegación <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/3-%20Functional%20components/8-%20Navbar%20context/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                            <p>Crea un proyecto React que tenga una barra de navegación, incluye una entrada donde el usuario pueda cambiar dinámicamente el nombre de la barra de navegación usando el Hook useContext().</p>
                        </div>
                        <div className="Disclaimer">
                        </div>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div className="Core no-code">
                                <div className='bgn-primary' style={{width:"40%", border:"2px solid black", padding:"5%"}}>
                                    <Wrapper>
                                        <Navbar/>
                                        <FormWrapper/>
                                    </Wrapper>
                                </div>
                            </div>
                        </div>
                        <div className="Objectives">
                            <h3>Lista de Objetivos</h3>
                            <ul>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Crear el componente de formulario</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Crear el componente FormWrapper</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Crea tu componente de barra de navegación</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Crear el componente de envoltura</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                                    <label htmlFor="">Crea el objeto de contexto</label>
                                </li>
                            </ul>
                        </div>
                        <div className="Github">
                        </div>
                    </div>
                    }/>
            </Routes>
        </div>
    )
}

export default FunctionalComponentsRoutes;