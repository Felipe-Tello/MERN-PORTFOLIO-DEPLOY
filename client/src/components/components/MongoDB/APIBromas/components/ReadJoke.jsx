const ReadJoke = ({ jokes }) => {

    return (
        <div className="bgn-primary" style={{ width: "100%", height:"33vh", overflow: "auto" }}>
            <h2 style={{textAlign:"center", marginTop:"5%"}}>Read Joke</h2>
            <ul style={{paddingLeft: "0px"}}>
                <div>
                {jokes && (
                    jokes.map((joke, index) => {
                        return <li key={index} style={{display:"flex", padding:"5%", alignItems:"center"}}>
                            <div style={{width:"100%"}}>
                                <h6><strong>ID: </strong>{joke._id}</h6>
                                <h6><strong>Setup: </strong>{joke.setup}</h6>
                                <h6><strong>Punch line: </strong>{joke.punchLine}</h6>
                            </div>
                        </li>
                    })
                )}
                </div>
            </ul>
        </div>
    );
}

export default ReadJoke;