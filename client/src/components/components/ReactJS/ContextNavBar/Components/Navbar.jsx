import React, {useContext} from 'react';
import UserContext from '../Contexts/UserContext';

const Navbar = () => {

    const {name} = useContext(UserContext);

    return (
        <div>
            <nav style={{border:"1px black solid", textAlign:"end", marginBottom:"5%", padding:"5%"}}>Hi {name}!</nav>
        </div>
    );
}

export default Navbar;