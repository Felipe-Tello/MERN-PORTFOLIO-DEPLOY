import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from '../Fullstack.module.css';

const UpdateProduct = ({commonData3}) => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const actualizarProducto = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/update/"+id, {
            title,
            price,
            description
        })
            .then(res => navigate('/full-stack-mern/administrador-de-productos-parte-3/'+id))
            .catch(err => setErrors(err.response.data.errors));
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
                        <form className={`${styles.formList}`} onSubmit={actualizarProducto}>
                            <h1 style={{textAlign:"center"}}>Edit Product</h1>
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

export default UpdateProduct;