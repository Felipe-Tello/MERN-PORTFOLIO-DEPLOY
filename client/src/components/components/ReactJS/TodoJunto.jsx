import React, { Component } from "react";
import styles from './ReactJS.module.css' ;

class TodoJunto extends Component {
    state = {
        edad: this.props.age
    }

    aumentarEdad = () => {
        this.setState(prevState => ({
            edad: prevState.edad + 1
        }));
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        const {edad} = this.state;

        return(
                <div className={`${styles.propsCards} bgn-primary`} > 
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <h3>{lastName}, {firstName}</h3>
                        <h5>Age: {edad}</h5>
                        <h5>Hair Color: {hairColor}</h5>
                    </div>
                    <button style={{marginTop:"10%", width:"100%", textAlign:"center", marginBottom:"auto"}} className="btn btn-success" onClick={this.aumentarEdad}>+1 año</button>
                </div>
        )
    }
}

export default TodoJunto;