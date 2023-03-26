import CreateJoke from "./components/CreateJoke";
import DeleteJoke from "./components/DeleteJoke";
import ReadJoke from "./components/ReadJoke";
import UpdateJoke from "./components/UpdateJoke";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from '../MongoDB.module.css';

const APIBromas = () => {

    const [jokes, setJokes] = useState([]);

    // Show Product List 
    useEffect(() => {
        axios.get("http://localhost:8000/api/jokes/")
            .then(res => {
                setJokes(res.data.jokes);
            })
            .catch(err => console.log(err));
    }, [])

    const refreshJokes = () => {
        axios.get("http://localhost:8000/api/jokes/")
            .then(res => {
                setJokes(res.data.jokes);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="Title">
                <h2>API de bromas <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/4-%20MongoDB/2-%20Mongoose/1-%20Jokes%20API"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Consolidar los conocimientos de mongoose y express creando un proyecto desde cero haciendo un API restful.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code" style={{flexDirection:"column"}}>
                    <div className={`${styles.JokeApiContainer}`}>
                        <div className={`${styles.JokeApiBlock}`}>
                            <CreateJoke refreshJokes={refreshJokes} />
                            <ReadJoke jokes={jokes} />
                        </div>
                        <div className={`${styles.JokeApiBlock}`}>
                            <UpdateJoke jokes={jokes} refreshJokes={refreshJokes} />
                            <DeleteJoke jokes={jokes} setJokes={setJokes} refreshJokes={refreshJokes} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Cree una carpeta de proyecto llamada "Chistes"</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">dentro de "Chistes", cree una estructura de carpetas modularizada (servidor ==&gt; controladores, rutas, modelos, configuración, servidor.js)</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">inicializar un archivo json de paquete usando npm</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">instalar express y mangoose</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">crea un archivo mongoose.config.js y configura su función mongoose.connect</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">crea un jokes.model.js, jokes.controller.js y jokes.routes.js en las carpetas correspondientes</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">en el archivo jokes.model crear y JokeSchema y exportar el mongoose.model ("broma", JokeSchema)</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">en el jokes.controller importa tu modelo desde el archivo de modelos</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Exportar una función para obtener todos los chistes</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Exportar una función para crear un chiste</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Exportar una función para actualizar una broma</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Exportar una función para eliminar un chiste</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">en el archivo jokes.routes: importe * desde su archivo de controlador y agregue una ruta rápida para cada ruta enumerada en la estructura alámbrica</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">En tu archivo server.js: configura express, importa tus rutas de broma y ejecuta tu servidor</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Usa Postman para crear nuevos chistes y usa el navegador para verlos.</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Usa Postman para realizar las operaciones POST DELETE y PUT y usa el navegador para obtenerlas</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}

export default APIBromas;