import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
                <h2>{commonData3.title} <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/3-%20Team%20Manager"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>{commonData3.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core no-code">
                <div style={{width:"70%", display:"flex", flexDirection:"column", justifyContent:"center", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                    <div style={{display:"flex", flexDirection:"column", marginBottom:"10%"}}>
                        <h5 style={{textAlign:"center"}}><Link style={{border:"2px black solid", padding:"5%", borderRadius:"10px", textDecoration:"none"}} to={`/advanced-mern/administrador-de-equipo`}>Manage Players</Link> <Link style={{border:"2px black solid", padding:"5%", borderRadius:"10px", textDecoration:"none"}} to={`/advanced-mern/administrador-de-equipo/status/game/1`}>Manage Player Status</Link></h5>
                    </div>
                    <div>
                        <h5 style={{display:"flex", justifyContent:"space-between", marginBottom:"5%"}}><Link to={`/advanced-mern/administrador-de-equipo`}>List</Link> <Link to={`/advanced-mern/administrador-de-equipo/players/addplayer`}>Add Player</Link></h5>
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
                        <Link className="btn btn-warning" to={`/advanced-mern/administrador-de-equipo`}>Cancel</Link>
                        <input style={{margin:"0"}} type="submit" disabled={name.length <2} className="btn btn-success" value="Guardar" />
                    </form>
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