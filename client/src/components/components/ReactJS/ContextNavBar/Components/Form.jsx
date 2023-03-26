import React, {useContext} from 'react';
import UserContext from '../Contexts/UserContext';;

const Form = () => {

    const {name, setName} = useContext(UserContext);

    return (
        <div style={{display:"flex", justifyContent:"start", marginTop:"5%"}}>
            <label htmlFor="text-name">Your Name:</label>
            <input style={{width:"100%"}} name="name" placeholder="enter your name" id="text-name" type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
        </div>
    );
}

export default Form;