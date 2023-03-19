import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({commonData1}) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [productsList, setProductsList] = useState([]);
    const [errors, setErrors] = useState({});

    //Funcion para guardar con conexión a backend
    const submitProduct = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products/new", {title,price,description})
            .then(res => {
                setProductsList([...productsList, {title: title, price: price, description: description}]);
                setTitle("")
                setPrice("")
                setDescription("")
                setErrors({})
            })
            .catch(err => {
                setErrors(err.response.data.errors);
                console.log(errors)
                console.log(err.response.data.errors);
            });
    }

    //Show Product List 
    useEffect( () => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => {
                setProductsList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <div className="Title">
                <h2>{commonData1.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/1-%20Full%20Stack%20MERN/1-%20Product%20Manager%20One"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>              
                <p>{commonData1.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className="bgn-primary" style={{width:"80%", display:"flex", justifyContent:"center", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <form style={{width:"50%"}} onSubmit={submitProduct}>
                            <h1>New Product</h1>
                            <div className="form-floating">
                                <input type="text" className={errors.title ? "form-control is-invalid" : "form-control"} placeholder="placeholder" value={title} onChange={(e) => setTitle(e.target.value)}/>
                                <label>Name</label>
                                {errors.title ? <div className="invalid-feedback">{errors.title.message}</div> : null}
                            </div>
                            <div className="form-floating">
                                <input type="number" className="form-control" placeholder="placeholder" value={price} onChange={(e) => setPrice(e.target.value)}/>
                                <label>Price</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className={errors.description ? "form-control is-invalid" : "form-control"} placeholder="placeholder" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                <label>Description</label>
                                {errors.description ? <div className="invalid-feedback">{errors.description.message}</div> : null}
                            </div>
                            <input type="submit" className="btn btn-success" value="Guardar" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    {commonData1.objectives.map((objective, index) => (
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