import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import styles from '../Fullstack.module.css';

const ShowProduct = ({commonData3}) => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    //Delete Product 
    const deleteProduct = id => {
        axios.delete("http://localhost:8000/api/products/delete/"+id)
            .then(res => navigate('/full-stack-mern/administrador-de-productos-parte-3'));
    }

    return(
        <div>
            <div className="Title">
                <h2>{commonData3.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/1-%20Full%20Stack%20MERN/3-%20Product%20Manager%20Three"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>                
                <p>{commonData3.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.showContainer} bgn-primary`}>
                        <Link style={{marginBottom:"5%"}} to="/full-stack-mern/administrador-de-productos-parte-3" className="btn btn-primary">Back to home</Link>
                        <div style={{textAlign:"center"}}>
                            <h1>{product.title}</h1>
                            <h2>${product.price}</h2>
                            <h4>{product.description}</h4>
                            <div>
                                <Link className="btn btn-warning" to={`/full-stack-mern/administrador-de-productos-parte-3/${product._id}/edit`}>Edit</Link>
                                <button className="btn btn-danger" onClick={() => deleteProduct(product._id)}>Delete</button>
                            </div>
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
export default ShowProduct;