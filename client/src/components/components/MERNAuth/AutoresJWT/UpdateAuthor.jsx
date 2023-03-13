import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import ButtonLogout from "./ButtonLogout";

const UpdateAuthor = ({commonData2}) => {

    let navigate = useNavigate();
    const {id} = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/authorsJWT/"+id, {withCredentials: true})
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => {
                navigate("/authentication/autores-con-bcrypt-jwt/error")             
            });
    }, [id, navigate])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authorsJWT/update/"+id, {name}, {withCredentials: true})
            .then(res => navigate('/authentication/autores-con-bcrypt-jwt/dashboard'))
            .catch(err => setErrors(err.response.data.errors));
    }
 
    return (
        <div>
            <div className="Title">
                <h2>{commonData2.title}</h2>
                
                <p>{commonData2.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core">
                <ButtonLogout></ButtonLogout>
                <h2>Favorite authors</h2>
                <Link to={`/authentication/autores-con-bcrypt-jwt/dashboard`}>Home</Link>
                <h4>Edit this author:</h4> 
                <form onSubmit={updateAuthor}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                    </div>
                    <Link className="btn btn-warning" to={`/authentication/autores-con-bcrypt-jwt/dashboard`}>Cancel</Link>
                    <input type="submit" className="btn btn-success" value="Guardar" />
                </form>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData2.objectives.map((objective, index) => (
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

export default UpdateAuthor;