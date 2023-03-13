import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PlayerStatus = ({commonData3}) => {

    const {id} = useParams();
    const [playersList, setPlayersList] = useState([]);
    const [localPlayersList, setLocalPlayersList] = useState([]);

    //Show player list 
    useEffect( () => {
        axios.get("http://localhost:8000/api/players/")
            .then(res => {
                setPlayersList(res.data);
                setLocalPlayersList(res.data);
            })
            .catch(err => console.log(err));
    }, [])


    const handleButtonClick = (playerId,player,status,matchId) =>{
        try {
            if ((status === "playing" && player.playing.includes(parseInt(matchId.id))) ||(status === "notPlaying" && player.notPlaying.includes(parseInt(matchId.id))) ||(status === "undecided" && player.undecided.includes(parseInt(matchId.id)))){
                axios.put("http://localhost:8000/api/players/update/"+playerId, {
                    name:`${player.name}`,
                    position:`${player.position}`,
                    $pull: {
                      [status]: parseInt(matchId.id)
                    }
                }).then(response => {
                    const updatedPlayer = { ...player };
                    const index = updatedPlayer[status].indexOf(parseInt(matchId.id));
                        if (index !== -1) {
                        updatedPlayer[status].splice(index, 1);
                        setLocalPlayersList(prevLocalPlayersList => prevLocalPlayersList.map(p => (p._id === player._id ? updatedPlayer : p)));
                        }
                }).catch(error => {
                    console.error(error);
                });
            }
            if ((status === "playing" && !player.playing.includes(parseInt(matchId.id))) ||(status === "notPlaying" && !player.notPlaying.includes(parseInt(matchId.id))) ||(status === "undecided" && !player.undecided.includes(parseInt(matchId.id)))) {
                axios.put("http://localhost:8000/api/players/update/"+playerId, {
                    name:`${player.name}`,
                    position:`${player.position}`,
                    $push: {
                        [status]: parseInt(matchId.id)
                    }
                }).then(response => {
                    const updatedPlayer = { ...player };
                    updatedPlayer[status].push(parseInt(matchId.id));
                    setLocalPlayersList(prevLocalPlayersList => prevLocalPlayersList.map(p => (p._id === player._id ? updatedPlayer : p)));
                
                }).catch(error => {
                    console.error(error);
                });
            }            
            }catch(error) {
                console.error(error);
          };  
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
                        <h4 style={{textAlign:"center"}}>Player Status - Game {id}</h4>
                        <h5 style={{textAlign:"center"}}>
                            <Link to={`/advanced-mern/administrador-de-equipo/status/game/1`}>Game 1</Link> | <Link to={`/advanced-mern/administrador-de-equipo/status/game/2`}>Game 2</Link> | <Link to={`/advanced-mern/administrador-de-equipo/status/game/3`}>Game 3</Link>
                        </h5>
                        <div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Team Name</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {playersList.map((player, index)=> (
                                    <tr key={index}>
                                        <td><Link to={`/advanced-mern/administrador-de-equipo/players/${player._id}`}>{player.name}</Link></td>
                                        <td>
                                            <button disabled={player.notPlaying.includes(parseInt(id)) || player.undecided.includes(parseInt(id))} className={player.playing.includes(parseInt(id))?"btn btn-success":"btn btn-light"} onClick={() => handleButtonClick(player._id,player,"playing",{id})}>Playing</button>
                                            <button disabled={player.playing.includes(parseInt(id)) || player.undecided.includes(parseInt(id))} className={player.notPlaying.includes(parseInt(id))?"btn btn-danger":"btn btn-light"} onClick={() => handleButtonClick(player._id,player,"notPlaying",{id})}>Not Playing</button>
                                            <button disabled={player.notPlaying.includes(parseInt(id)) || player.playing.includes(parseInt(id))} className={player.undecided.includes(parseInt(id))?"btn btn-warning":"btn btn-light"} onClick={() => handleButtonClick(player._id,player,"undecided",{id})}>Undecided</button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
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
    );
}
 
export default PlayerStatus;