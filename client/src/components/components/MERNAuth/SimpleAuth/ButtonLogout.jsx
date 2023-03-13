import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ButtonLogout = () => {

    let navigate = useNavigate();

    const closeSession = () => {
        axios.get('http://localhost:8000/api/users/logout', { withCredentials: true })
            .then(res => navigate("/authentication/autenticacion-simple"))
            .catch(err => console.log(err));
    }
    return (
        <button className='btn btn-danger float-right' onClick={closeSession}>Close session</button>
    )
}

export default ButtonLogout;