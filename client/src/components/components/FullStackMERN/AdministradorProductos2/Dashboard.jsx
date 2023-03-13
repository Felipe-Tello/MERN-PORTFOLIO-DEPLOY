import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = ({commonData2}) => {

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
                <h2>{commonData2.title} <a target="_blank" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/1-%20Full%20Stack%20MERN/2-%20Product%20Manager%20Two"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>{commonData2.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div className="Core no-code">
                <div style={{width:"80%", display:"flex", justifyContent:"center", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                    <div style={{width:"50%"}}>
                        <form onSubmit={submitProduct}>
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
                    <div style={{width:"50%", display:"flex", flexDirection:"column", alignItems:"center", overflow: "auto", maxHeight:"35vh"}}>
                        <h1>All Products</h1>
                        <table className="table table-bordered" style={{width:"80%"}}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                            {productsList.map((product, index) =>(
                                <tr key={index}>
                                    <td> <Link to={`/full-stack-mern/administrador-de-producto-parte-2/${product._id}`}>{product.title}</Link></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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