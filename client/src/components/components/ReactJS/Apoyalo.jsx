import React, { Component } from "react";

class Apoyalo extends Component {
    render() { 
        const {firstName, lastName, age, hairColor} = this.props;

        return (
            <div style={{width:"15vw", height:"fit-content", margin:"1% 0 1% 0", padding:"1%", border:"2px solid black", borderRadius:"10px"}}>
                <h3>{lastName}, {firstName}</h3>
                <h5>Age: {age}</h5>
                <h5>Hair Color: {hairColor}</h5>
            </div>
        );
    }
}
 
export default Apoyalo;