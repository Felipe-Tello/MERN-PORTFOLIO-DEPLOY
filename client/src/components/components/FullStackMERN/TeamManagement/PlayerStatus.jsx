import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from '../Fullstack.module.css';

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
                            <h4 style={{textAlign:"center"}}>Player Status - Game {id}</h4>
                            <h5 style={{textAlign:"center"}}>
                                <Link to={`/advanced-mern/administrador-de-equipo/status/game/1`}><button className="btn btn-light">Game 1</button></Link> | <Link to={`/advanced-mern/administrador-de-equipo/status/game/2`}><button className="btn btn-light">Game 2</button></Link> | <Link to={`/advanced-mern/administrador-de-equipo/status/game/3`}><button className="btn btn-light">Game 3</button></Link>
                            </h5>
                            <div>
                                <table class="table table-dark table-striped table-bordered border-light">
                                    <thead style={{textAlign:"center"}}>
                                        <tr>
                                            <th>Team Name</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{textAlign:"center"}}>
                                        {playersList.map((player, index)=> (
                                        <tr key={index}>
                                            <td><Link to={`/advanced-mern/administrador-de-equipo/players/${player._id}`}>{player.name}</Link></td>
                                            <td style={{display:"flex", justifyContent:"space-around"}}>
                                                <button disabled={player.notPlaying.includes(parseInt(id)) || player.undecided.includes(parseInt(id))} className={player.playing.includes(parseInt(id))?"btn btn-success":"btn btn-light"} onClick={() => handleButtonClick(player._id,player,"playing",{id})}>Yes</button>
                                                <button disabled={player.playing.includes(parseInt(id)) || player.undecided.includes(parseInt(id))} className={player.notPlaying.includes(parseInt(id))?"btn btn-danger":"btn btn-light"} onClick={() => handleButtonClick(player._id,player,"notPlaying",{id})}>No</button>
                                                <button disabled={player.notPlaying.includes(parseInt(id)) || player.playing.includes(parseInt(id))} className={player.undecided.includes(parseInt(id))?"btn btn-warning":"btn btn-light"} onClick={() => handleButtonClick(player._id,player,"undecided",{id})}>N/A</button>
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
    );
}
 
export default PlayerStatus;