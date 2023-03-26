import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from '../Fullstack.module.css';

const NewPlayer = ({commonData3}) => {

    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [position, setPosition] = useState("N/A");
    const [errors, setErrors] = useState({});

    // Funcion para guardar con conexión a backend
    const submitPlayer = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players/new", {name, position})
            .then(res => navigate("/advanced-mern/administrador-de-equipo"))
            .catch(err => {
                setErrors(err.response.data.errors);
                console.log(err.response.data.errors);
            });
    }

    return (
        <div>
            <div className="Title">
                <h2>{commonData3.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/3-%20Team%20Manager"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>{commonData3.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.playerContainer} bgn-primary`}>
                        <div style={{display:"flex", marginBottom:"10%", justifyContent:"space-around"}}>
                            <Link className="bgn-second" style={{border:"2px black solid", padding:"5%", borderRadius:"10px", textDecoration:"none", color:"white"}} to={`/advanced-mern/administrador-de-equipo`}><h5 style={{textAlign:"center"}}>Manage Players</h5></Link> 
                            <Link className="bgn-second" style={{border:"2px black solid", padding:"5%", borderRadius:"10px", textDecoration:"none", color:"white"}} to={`/advanced-mern/administrador-de-equipo/status/game/1`}><h5 style={{textAlign:"center"}}>Manage Player Status</h5></Link>
                        </div>
                        <div>
                            <h5 style={{display:"flex", justifyContent:"space-between", marginBottom:"5%"}}><Link to={`/advanced-mern/administrador-de-equipo`}><button className="btn btn-light">List</button></Link> <Link to={`/advanced-mern/administrador-de-equipo/players/addplayer`}><button className="btn btn-light">Add Player</button></Link></h5>
                        </div>
                        <h4 style={{textAlign:"center"}}>Add Player</h4> 
                        <form onSubmit={submitPlayer}>
                            <div className="form-group">
                                <label htmlFor="name">Player Name:</label>
                                {name.length >0 && name.length <2 ? <p style={{color:"red"}}>Name must have at least 2 characters</p> : <></>}
                                <input id="name" name="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="position">Preferred Position:</label>
                                <input id="position" name="position" type="text" className="form-control" value={position} onChange={(e) => setPosition(e.target.value)} />
                            </div>
                            <div style={{display:"flex", justifyContent:"space-around"}}>
                                <Link className="btn btn-warning" to={`/advanced-mern/administrador-de-equipo`}>Cancel</Link>
                                <input style={{margin:"0"}} type="submit" disabled={name.length <2} className="btn btn-success" value="Guardar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData3.objectives.map((objective, index) => (
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
 
export default NewPlayer;