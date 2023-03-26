import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from '../Fullstack.module.css';

const Dashboard = ({commonData3}) => {

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

    //Delete Product 
    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/delete/"+id)
            .then(res => {
                //Update productList
                let nuevaListaProds = productsList.filter(producto => producto._id !== id);
                setProductsList(nuevaListaProds);
            })
    }

    return (
        <div>
            <div className="Title">
                <h2>{commonData3.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/1-%20Full%20Stack%20MERN/3-%20Product%20Manager%20Three"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>{commonData3.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.productContainer} bgn-primary`}>
                        <div className={`${styles.formList}`}>
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
                        <div className={`${styles.formList}`} style={{display:"flex", flexDirection:"column", alignItems:"center", overflow: "auto", maxHeight:"35vh"}}>
                            <h1>All Products</h1>
                            <table class="table table-dark table-striped table-bordered border-light" style={{width:"80%"}}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {productsList.map((product, index) =>(
                                    <tr key={index}>
                                        <td><Link to={`/full-stack-mern/administrador-de-productos-parte-3/${product._id}`}>{product.title}</Link></td>
                                        <td style={{padding:"0px"}}><Link className="btn btn-warning" style={{width:"100%"}} to={`/full-stack-mern/administrador-de-productos-parte-3/${product._id}/edit`}>Edit</Link></td>
                                        <td style={{padding:"0px"}}><button className="btn btn-danger" style={{width:"100%"}} onClick={() => deleteProduct(product._id)}>Delete</button></td>
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
                    {commonData3.objectives.map((objective, index) => (
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