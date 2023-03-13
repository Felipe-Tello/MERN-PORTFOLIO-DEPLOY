import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ButtonLogout from "./ButtonLogout";

const Dashboard = ({commonData2}) => {

    let navigate = useNavigate()
    const [authorsList, setAuthorsList] = useState([]);


    //Show Product List 
    useEffect( () => {
        axios.get("http://localhost:8000/api/authorsJWT", {withCredentials: true})
            .then(res => {
                setAuthorsList(res.data);
            })
            .catch(err => {
                if(err.response.status === 401){
                    navigate("/authentication/autores-con-bcrypt-jwt");
                }
            });
    }, [navigate])

    //Delete Product 
    const deleteAuthor = id => {
        axios.delete("http://localhost:8000/api/authorsJWT/delete/"+id, {withCredentials: true})
            .then(res => {
                //Update productList
                let newAuthorsList = authorsList.filter(author => author._id !== id);
                setAuthorsList(newAuthorsList);
            })
    }

    //Sort Author List
    const sortedAuthorsList = authorsList.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

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
                <Link to={`/authentication/autores-con-bcrypt-jwt/new`}>Add an author</Link>
                <h4>We have quotes by:</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedAuthorsList.map((author, index)=> (
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <Link className="btn btn-warning" to={`/authentication/autores-con-bcrypt-jwt/edit/${author._id}`}>Edit</Link>
                                <button className="btn btn-danger" onClick={() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
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

export default Dashboard;