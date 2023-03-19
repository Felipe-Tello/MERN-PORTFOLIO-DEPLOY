import React, { useState } from "react";
import axios from "axios";

const UpdateJoke = ({ jokes, refreshJokes }) => {
    const [selectedJoke, setSelectedJoke] = useState({});
    const [setup, setSetup] = useState("");
    const [punchLine, setPunchLine] = useState("");

    const handleFormSubmit = event => {
        event.preventDefault();
        axios.put(`http://localhost:8000/api/jokes/update/${selectedJoke._id}`, {
            setup,
            punchLine
        })
            .then(res => {
                setSelectedJoke({});
                refreshJokes()
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="bgn-primary" style={{ width: "100%", height:"33vh", overflow: "auto", marginBottom:"5%"}}>
            <h2 style={{textAlign:"center", marginTop:"5%"}}>Update Joke</h2>
            {(jokes && !selectedJoke._id) ? (
                <ul style={{paddingLeft: "0px"}}>
                    <div>
                    {jokes.map((joke, index) => {
                        return <li key={index} style={{display:"flex", padding:"5%", alignItems:"center", justifyContent:"space-evenly"}}>
                            <div style={{width:"80%"}}>
                                <h6><strong>ID: </strong>{joke._id}</h6>
                                <h6><strong>Setup: </strong>{joke.setup}</h6>
                                <h6><strong>Punch line: </strong>{joke.punchLine}</h6>
                            </div>
                            <div style={{width:"20%",display:"flex", justifyContent:"center"}}>
                                <button className="btn btn-warning" onClick={() => setSelectedJoke(joke)}>Edit</button>
                            </div>
                        </li>
                    })}
                    </div>
                </ul>
            ) :
                <div>
                    <h5 style={{textAlign:"center"}}>{selectedJoke._id}</h5>
                    <form onSubmit={handleFormSubmit}>
                        <div style={{marginTop:"1.6vh"}}>
                            <label htmlFor="setup">Setup:</label>
                            <input type="text" id="setup" name="setup" className="form-control" value={setup} onChange={(e) => setSetup(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="punchLine">Punch Line:</label>
                            <input type="text" id="punchLine" name="punchLine" className="form-control" value={punchLine} onChange={(e) => setPunchLine(e.target.value)} />
                        </div>
                        <input type="submit" className="btn btn-success" value="Update" />
                    </form>
                </div>
            }
        </div>
    )
}
export default UpdateJoke;