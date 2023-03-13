import {Link}  from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

const Error = ({commonData2}) => {
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
                <h1>We're sorry, but we couldn't find the author you're looking for.</h1> 
                <h3>Do you want to add this author to our database?</h3>
                <Link className="btn btn-success" to={`/authentication/autores-con-bcrypt-jwt/new`}>Add an author</Link>
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
    );
}
 
export default Error;