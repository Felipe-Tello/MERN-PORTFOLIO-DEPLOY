import React, { useState } from "react";
import axios from "axios";

const FormJoke = ({ refreshJokes }) => {

    const [setup, setSetup] = useState("");
    const [punchLine, setPunchLine] = useState("");

    const submitJoke = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/jokes/new", {setup,punchLine})
            .then(res => {
                setSetup("")
                setPunchLine("")
                refreshJokes()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div style={{width:"100%", height:"33vh", overflow: "auto", marginBottom:"5%"}}>
            <h2 style={{textAlign:"center"}}>Create Joke</h2>
            <form onSubmit={submitJoke}>
                <div style={{marginTop:"5vh"}} className="form-group">
                    <label htmlFor="setup">Setup:</label>
                    <input id="setup" name="setup" type="text" className="form-control" value={setup} onChange={(e) => setSetup(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="punchLine">PunchLine:</label>
                    <input id="punchLine" name="punchLine" type="text" className="form-control" value={punchLine} onChange={(e) => setPunchLine(e.target.value)} />
                </div>
                <input type="submit" className="btn btn-success" value="Create" />
            </form>
        </div>
    );
}
 
export default FormJoke;