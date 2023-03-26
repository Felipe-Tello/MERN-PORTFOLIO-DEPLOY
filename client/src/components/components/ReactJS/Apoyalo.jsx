import React, { Component } from "react";
import styles from './ReactJS.module.css' ;

class Apoyalo extends Component {
    render() { 
        const {firstName, lastName, age, hairColor} = this.props;

        return (
            <div className={`${styles.propsCards} bgn-primary`}>
                <h3>{lastName}, {firstName}</h3>
                <h5>Age: {age}</h5>
                <h5>Hair Color: {hairColor}</h5>
            </div>
        );
    }
}
 
export default Apoyalo;