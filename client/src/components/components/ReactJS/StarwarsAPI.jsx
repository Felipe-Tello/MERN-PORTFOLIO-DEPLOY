import React, { useState, useEffect } from "react";

const StarwarsAPI = (props) => {
    const [apiCat, setApiCat] = useState({});
    const [formData, setFormData] = useState({ category: "people", id: "0" });
    const [resultadoBusqueda, serResultadoBusqueda] = useState({});
    const [mostrarBusqueda, setMostrarBusqueda] = useState("");
    const [responseStatus, setResponseStatus] = useState("");

    /////////////////////////////////////////////////////////////////

    useEffect(() => {
        fetch(`https://swapi.dev/api/`)
            .then((response) => response.json())
            .then((data) => setApiCat(data));
    }, []);

    /////////////////////////////////////////////////////////////////

    const catKeys = Object.keys(apiCat);

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(apiCat[formData.category] + [formData.id])
            .then((response) => {
                setResponseStatus(response.status);
                return response.json();
            })
            .then((data) => {
                serResultadoBusqueda(data);
                setMostrarBusqueda(formData.category);
            });
    };

    const resultados = () => {
        if (responseStatus === 404) {
            return (
                <div>
                    <h3>Estos no son los droides que buscas...</h3>
                    <img src="https://sm.ign.com/t/ign_latam/screenshot/default/benkenobi_5wru.1280.jpg" alt="Obi Wan Kenobi" height={200} width={400}/>
                    <p>(intenta buscar nuevamente)</p>
                </div>
            );
        }
        if (mostrarBusqueda === "people") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3> <p>Altura: {resultadoBusqueda.height}</p>
                    <p>Color de pelo: {resultadoBusqueda.hair_color}</p>
                    <p>Año de nacimiento: {resultadoBusqueda.birth_year}</p>
                </div>
            );
        } else if (mostrarBusqueda === "planets") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Poblacion: {resultadoBusqueda.population}</p>
                    <p>Diametro: {resultadoBusqueda.diameter}</p>
                    <p>Terreno: {resultadoBusqueda.terrain}</p>
                </div>
            );
        } else if (mostrarBusqueda === "films") {
            return (
                <div>
                    <h3>{resultadoBusqueda.title}</h3>
                    <p>Episodio: {resultadoBusqueda.episode_id}</p>
                    <p>Director: {resultadoBusqueda.director}</p>
                    <p>Fecha de estreno: {resultadoBusqueda.release_date}</p>
                </div>
            );
        } else if (mostrarBusqueda === "species") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Vida promedio: {resultadoBusqueda.average_lifespan}</p>
                    <p>Lenguaje: {resultadoBusqueda.language}</p>
                    <p>Color de piel: {resultadoBusqueda.skin_colors}</p>
                </div>
            );
        } else if (mostrarBusqueda === "vehicles") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Modelo: {resultadoBusqueda.model}</p>
                    <p>Fabricante: {resultadoBusqueda.manufacturer}</p>
                    <p>Capacidad de Carga: {resultadoBusqueda.cargo_capacity}</p>
                    <p>Tripulacion: {resultadoBusqueda.crew}</p>
                </div>
            );
        } else if (mostrarBusqueda === "starships") {
            return (
                <div>
                    <h3>{resultadoBusqueda.name}</h3>
                    <p>Modelo: {resultadoBusqueda.model}</p>
                    <p>Fabricante: {resultadoBusqueda.manufacturer}</p>
                    <p>Capacidad de Carga: {resultadoBusqueda.cargo_capacity}</p>
                    <p>Tripulacion: {resultadoBusqueda.crew}</p>
                </div>
            );
        }
    };

    /////////////////////////////////////////////////////////////////

    return (
        <div>
            <div className="Title">
                <h2>Luke APIwalker <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/2-%20ReactJS/5-%20React%20routing/2-%20Luke%20APIwalker/client"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Crear una aplicación para navegar por la <a href="https://pipedream.com/apps/swapi">API de Star Wars</a>.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className="bgn-primary" style={{width:"40%", border:"2px solid black" , borderRadius:"10px", padding:"5%"}}>
                        <form onSubmit={handleSubmit} onChange={handleOnChange}>
                            <div>
                                <select style={{width:"100%", textAlign:"center"}} id="categories" name="category">
                                    {catKeys.map((value, index) => {
                                        return (
                                            <option value={value} key={index}>{value}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between", marginTop:"5%"}}>
                                <label>id:</label>
                                <input style={{width:"95%"}} type="text" placeholder="id" name="id" />
                            </div>
                            <input style={{width:"100%"}} className="btn btn-success" type="submit" value="submit"></input>
                        </form>
                        <div id="div-result" style={{marginTop:"5%", display:"flex", justifyContent:"center"}}>{resultados()}</div>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea un menú desplegable que permita al usuario elegir el recurso que está buscando</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Al lado del menú desplegable, crea un campo de entrada que acepte un número que se utilizará para consultar una identificación específica.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Agrega un botón para permitirles enviar una solicitud a la API.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Si la solicitud es exitosa, envíe al menos cuatro atributos que fueron devueltos por la API.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Si la solicitud no tiene éxito, crea un mensaje de error que diga "Estos no son los droides que está buscando" con una imagen de Obi-Wan Kenobi.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Además, crea una ruta para que cuando vaya a localhost: 3000 /: id, muestre a la persona con la identificación en la URL</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">BONIFICACIÓN DE NINJA: Si el recurso es "people", escribe el nombre de su mundo natal en la página con parámetro de id (puede que tenga que hacer otra solicitud)</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
};

export default StarwarsAPI;