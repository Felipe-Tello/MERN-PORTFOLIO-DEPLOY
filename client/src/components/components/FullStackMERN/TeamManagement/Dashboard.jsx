import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = ({commonData3}) => {

    const [playersList, setPlayersList] = useState([]);

    //Show player list 
    useEffect( () => {
        axios.get("http://localhost:8000/api/players/")
            .then(res => {
                setPlayersList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deletePlayer = player => {
        if (window.confirm(`Are you sure you want to remove ${player.name} ?`)) {
            axios.delete("http://localhost:8000/api/players/delete/"+player._id)
            .then(res => {
                //Update playerList
                let newPlayersList = playersList.filter(p => p._id !== player._id);
                setPlayersList(newPlayersList);
            })
        }
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
                    <div className="bgn-primary" style={{width:"70%", display:"flex", flexDirection:"column", justifyContent:"center", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <div style={{display:"flex", flexDirection:"column", marginBottom:"10%"}}>
                            <h5 style={{textAlign:"center"}}><Link className="bgn-second" style={{border:"2px black solid", padding:"5%", borderRadius:"10px", textDecoration:"none", color:"white"}} to={`/advanced-mern/administrador-de-equipo`}>Manage Players</Link> <Link className="bgn-second" style={{border:"2px black solid", padding:"5%", borderRadius:"10px", textDecoration:"none", color:"white"}} to={`/advanced-mern/administrador-de-equipo/status/game/1`}>Manage Player Status</Link></h5>
                        </div>
                        <div>
                            <h5 style={{display:"flex", justifyContent:"space-between", marginBottom:"5%"}}><Link to={`/advanced-mern/administrador-de-equipo`}><button className="btn btn-light">List</button></Link> <Link to={`/advanced-mern/administrador-de-equipo/players/addplayer`}><button className="btn btn-light">Add Player</button></Link></h5>
                        </div>
                        <div>
                            <div>
                                <table class="table table-dark table-striped table-bordered border-light">
                                    <thead>
                                        <tr>
                                            <th>Team Name</th>
                                            <th>Preferred Position</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {playersList.map((player, index)=> (
                                        <tr key={index}>
                                            <td><Link to={`/advanced-mern/administrador-de-equipo/players/${player._id}`}>{player.name}</Link></td>
                                            <td>{player.position}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => deletePlayer(player)}>Delete</button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
    )
}

export default Dashboard;