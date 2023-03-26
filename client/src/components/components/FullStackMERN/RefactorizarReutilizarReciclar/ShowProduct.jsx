import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import DeleteButton from "./components/DeleteButton";
import styles from '../Fullstack.module.css';

const ShowProduct = ({commonData1}) => {
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
    const remove = () => {
            navigate('/advanced-mern/refactorizar-reutilizar-reciclar')
    }

    return(
        <div>
            <div className="Title">
                <h2>{commonData1.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/1-%20Refactor%20Reuse%20Recycle"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>{commonData1.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className={`${styles.showContainer} bgn-primary`}>
                        <Link style={{marginBottom:"5%"}} to="/advanced-mern/refactorizar-reutilizar-reciclar" className="btn btn-primary">Back to home</Link>
                        <div style={{textAlign:"center"}}>
                            <h1>{product.title}</h1>
                            <h2>${product.price}</h2>
                            <h4>{product.description}</h4>
                            <div>
                                <Link className="btn btn-warning" to={`/advanced-mern/refactorizar-reutilizar-reciclar/${product._id}/edit`}>Edit</Link>
                                <DeleteButton productId={product._id} successCallback={()=>remove()}/>
                            </div>
                        </div>
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
export default ShowProduct;