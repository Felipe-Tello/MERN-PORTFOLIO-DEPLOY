import axios from "axios";
import { useState } from "react";
import styles from './ExpressJS.module.css' ;


const FakeAPI = () => {
    
    const [responseUser, setResponseUser] = useState(null);
    const [responseCompany, setResponseCompany] = useState(null);
    const [responseBoth, setResponseBoth] = useState(null);

    const fetchUser = () => {
        axios
            .get(`http://localhost:8000/api/users/new`)
            .then((response) => {
                setResponseUser(response.data);
            });
    }
    const fetchCompany = () => {
        axios
            .get(`http://localhost:8000/api/companies/new`)
            .then((response) => {
                setResponseCompany(response.data);
            });
    }
    const fetchUserAndCompany = () => {
        axios
            .get(`http://localhost:8000/api/user/company`)
            .then((response) => {
                setResponseBoth(response.data);
            });
    }
    
    return (
        <div> 
            <div className="Title">
                <h2>API falsa <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/3-%20ExpressJS/1-%20Express/2-%20Fake%20api"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Crear una API que genere un usuario aleatorio en una solicitud GET. Utilizar Postman para hacer las solicitudes GET. ademas de usar 2 bibliotecas javascript para crear la API: Express y Faker</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.fakeApiContainer} bgn-primary`}>
                        <div className={`${styles.singleContainer} bgn-second`}>
                            <button className="btn btn-success" onClick={fetchUser}>Fetch User</button>
                            {responseUser == null ? <div></div> : 
                            <div>
                                <h3>USER</h3>
                                <h6>ID: {responseUser._id}</h6>
                                <h6>Email: {responseUser.email}</h6>
                                <h6>First Name: {responseUser.firstName}</h6>
                                <h6>Last Name: {responseUser.lastName}</h6>
                                <h6>Phone: {responseUser.phone}</h6>
                            </div>
                            }
                        </div>
                        <div className={`${styles.singleContainer} bgn-second`}>
                            <button className="btn btn-success" onClick={fetchCompany}>Fetch Company</button>
                            {responseCompany == null ? <div></div> : 
                            <div>
                                <h3>COMPANY</h3>
                                <h6>ID: {responseCompany._id}</h6>
                                <h6>Name: {responseCompany.name}</h6>
                                <br />
                                <h6>Direccion:</h6>
                                <ul>
                                    <li>Calle: {responseCompany.direccion.calle}</li>
                                    <li>Codigo Postal: {responseCompany.direccion.cp}</li>
                                    <li>Ciudad: {responseCompany.direccion.cuidad}</li>
                                    <li>Estado: {responseCompany.direccion.estado}</li>
                                    <li>Pais: {responseCompany.direccion.pais}</li>
                                </ul>
                            </div>
                            }
                        </div>
                        <div className={`${styles.singleContainer} bgn-second`}>
                            <button className="btn btn-success" onClick={fetchUserAndCompany}>Fetch User and Company</button>
                            {responseBoth == null ? <div></div> :
                            <div>
                                <div>
                                    <h3>USER</h3>
                                    <h6>ID: {responseBoth.User._id}</h6>
                                    <h6>Email: {responseBoth.User.email}</h6>
                                    <h6>First Name: {responseBoth.User.firstName}</h6>
                                    <h6>Last Name: {responseBoth.User.lastName}</h6>
                                    <h6>Phone: {responseBoth.User.phone}</h6>
                                </div>
                                <div>
                                    <h3>COMPANY</h3>
                                    <h6>ID: {responseBoth.Empresa._id}</h6>
                                    <h6>Name: {responseBoth.Empresa.name}</h6>
                                    <h6>Direccion:</h6>
                                    <ul>
                                        <li>Calle: {responseBoth.Empresa.direccion.calle}</li>
                                        <li>Codigo Postal: {responseBoth.Empresa.direccion.cp}</li>
                                        <li>Ciudad: {responseBoth.Empresa.direccion.cuidad}</li>
                                        <li>Estado: {responseBoth.Empresa.direccion.estado}</li>
                                        <li>Pais: {responseBoth.Empresa.direccion.pais}</li>
                                    </ul>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea una nueva carpeta de proyecto "Faker_API" y con su terminal, navega a tu nueva carpeta</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea un archivo package.json usando el comando "npm init -y" en tu terminal</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Instala express y faker</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crear un archivo server.js</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">En tu archivo server.js, importa express y faker</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea 2 clases: Usuario, Empresa con los mismos atributos que se enumeran arriba</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea una ruta api "/api/users/new" que devuelva un nuevo usuario</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea una ruta api "/api/companies/new" que devuelva una nueva compañía</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea una ruta api "/api/user/company" que devuelva tanto un nuevo usuario como una nueva compañía</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Ejecuta tu archivo server.js usando nodemon</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Usando Postman, prueba tus nuevas rutas GET</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default FakeAPI;