import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

const NewAuthor = ({commonData2}) => {

    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    // Usar useEffect para hacer llamado al api con las credenciales... si no esta verificado retorna al inicio y no pueda acceder a esta pagina
    useEffect(() => {
        axios.get("http://localhost:8000/api/authorsJWT", {withCredentials: true})
          .catch(err => {
            if(err.response.status === 401) {
              navigate("/authentication/autores-con-bcrypt-jwt");
            }
          });
      }, [navigate]);

    // Funcion para guardar con conexión a backend
    const submitAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authorsJWT/new", {name}, {withCredentials: true})
            .then(res => navigate("/authentication/autores-con-bcrypt-jwt/dashboard"))
            .catch(err => {
                if(err.response.status === 401) {
                    navigate("/authentication/autores-con-bcrypt-jwt")
                } else {
                    setErrors(err.response.data.errors)
                }
            });
    }

    return (
        <div>
            <div className="Title">
                <h2>{commonData2.title}</h2>
                
                <p>{commonData2.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <ButtonLogout></ButtonLogout>
                <h2>Favorite authors</h2>
                <Link to={"/authentication/autores-con-bcrypt-jwt/dashboard"}>Home</Link>
                <h4>Add a new author:</h4> 
                <form onSubmit={submitAutor}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                    </div>
                    <Link className="btn btn-warning" to={"/authentication/autores-con-bcrypt-jwt/dashboard"}>Cancel</Link>
                    <input type="submit" className="btn btn-success" value="Guardar" />
                </form>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData2.objectives.map((objective, index) => (
                        <li key={index}>
                            <input type="checkbox" readOnly={true} checked={true} name="" id="" />
                            <label htmlFor="">{objective}</label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
     );
}
 
export default NewAuthor;