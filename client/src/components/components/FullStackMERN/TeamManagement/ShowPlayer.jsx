import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const ShowPlayer = ({commonData3}) => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/players/"+id)
            .then(res => {
                setPlayer(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    //Delete Player 
    const deletePlayer = player => {
        if (window.confirm(`Are you sure you want to remove ${player.name} ?`)) {
            axios.delete("http://localhost:8000/api/players/delete/"+player._id)
            .then(res => 
                navigate('/advanced-mern/administrador-de-equipo/'
            ))
            .catch(err => console.log(err));
        }
    }

    return(
        <div>
            <div className="Title">
                <h2>{commonData3.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/3-%20Team%20Manager"><img style={{borderRadius:"20px"}} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>              
                <p>{commonData3.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className="bgn-primary" style={{width:"70%", display:"flex", justifyContent:"center", flexDirection:"column", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <div style={{textAlign:"center", marginBottom:"5%"}}>
                            <Link to="/advanced-mern/administrador-de-equipo/" className="btn btn-primary">Back to home</Link>
                            <h1>Player Name: {player.name}</h1>
                            <h2>Position played: {player.position}</h2>
                        </div>
                        <div style={{marginBottom:"5%"}}>
                            <table class="table table-dark table-striped table-bordered border-light">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Match 1</th>
                                        <th>Match 2</th>
                                        <th>Match 3</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Playing</td>
                                        <td>{player.playing ? (player.playing.includes(1)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.playing ? (player.playing.includes(2)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.playing ? (player.playing.includes(3)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.playing ? player.playing.length : " "}</td>
                                    </tr>
                                    <tr>
                                        <td>No Playing</td>
                                        <td>{player.notPlaying ? (player.notPlaying.includes(1)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.notPlaying ? (player.notPlaying.includes(2)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.notPlaying ? (player.notPlaying.includes(3)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.notPlaying ? player.notPlaying.length : " "}</td>
                                    </tr>
                                    <tr>
                                        <td>Undecided</td>
                                        <td>{player.undecided ? (player.undecided.includes(1)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.undecided ? (player.undecided.includes(2)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.undecided ? (player.undecided.includes(3)?<img style={{borderRadius:"20px"}} src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img style={{borderRadius:"20px"}} src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                                        <td>{player.undecided ? player.undecided.length : " "}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-around"}}>
                            <button className="btn btn-danger" onClick={() => deletePlayer(player)}>Delete</button>
                            <Link to="/advanced-mern/administrador-de-equipo/status/game/1" className="btn btn-primary">Matches</Link>
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
export default ShowPlayer;