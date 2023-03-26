import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from '../Fullstack.module.css';

const NewAuthor = ({commonData2}) => {

    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    // Funcion para guardar con conexión a backend
    const submitAutor = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", {name})
            .then(res => navigate("/advanced-mern/autores/"))
            .catch(err => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    }

    return (
        <div>
            <div className="Title">
                <h2>{commonData2.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/2-%20Authors"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>{commonData2.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.productContainer} bgn-primary`} style={{flexDirection:"column"}}>
                        <div style={{textAlign:"center"}}>
                            <h2>Favorite authors</h2>
                            <Link className="btn btn-success" to={`/advanced-mern/autores/`}>Home</Link> 
                        </div>
                        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                            <form onSubmit={submitAutor}>
                                <h4 style={{textAlign:"center"}}>Add a new author:</h4>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input id="name" name="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                    {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                                </div>
                                <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", marginTop:"5%"}}>
                                    <div>
                                    <Link className="btn btn-warning" to={`/advanced-mern/autores/`}>Cancel</Link>
                                    </div>
                                    <input style={{margin:"0"}} type="submit" className="btn btn-success" value="Guardar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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