import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from '../Fullstack.module.css';

const Dashboard = ({commonData2}) => {

    const [authorsList, setAuthorsList] = useState([]);

    //Show Product List 
    useEffect( () => {
        axios.get("http://localhost:8000/api/authors/")
            .then(res => {
                setAuthorsList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    //Delete Product 
    const deleteAuthor = id => {
        axios.delete("http://localhost:8000/api/authors/delete/"+id)
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
                <h2>{commonData2.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/2-%20Authors"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>{commonData2.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.productContainer} bgn-primary`} style={{flexDirection:"column"}}>
                        <div style={{textAlign:"center"}}>
                            <h2>Favorite authors</h2>
                            <Link className="btn btn-success" to={`/advanced-mern/autores/new`}>Add an author</Link>
                        </div>
                        <div>
                            <h4>We have quotes by:</h4>
                            <table class="table table-dark table-striped table-bordered border-light">
                                <thead>
                                    <tr>
                                        <th>Author</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedAuthorsList.map((author, index)=> (
                                    <tr key={index}>
                                        <td>{author.name}</td>
                                        <td><Link className="btn btn-warning" to={`/advanced-mern/autores/edit/${author._id}`}>Edit</Link></td>
                                        <td><button className="btn btn-danger" onClick={() => deleteAuthor(author._id)}>Delete</button></td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
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