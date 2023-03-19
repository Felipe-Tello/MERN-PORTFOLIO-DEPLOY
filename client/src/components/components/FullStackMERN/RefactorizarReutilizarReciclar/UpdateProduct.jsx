import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FormProduct from "./components/Form";

const UpdateProduct = ({commonData1}) => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);

    const [product, setProduct] = useState();

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/"+id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id]);

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/products/update/"+id, product )
            .then(res => navigate('/advanced-mern/refactorizar-reutilizar-reciclar/'+id))
            .catch(err => console.log(err));
    }
 
    return (
        <div>
            <div className="Title">
                <h2>{commonData1.title} <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/tree/main/5-%20Full-Stack%20MERN/2-%20Advanced%20MERN/1-%20Refactor%20Reuse%20Recycle"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>               
                <p>{commonData1.description}</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <div className="bgn-primary" style={{width:"80%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <h1>Edit Product</h1>
                        <div style={{width:"50%"}}>
                            {loaded &&( 
                            <FormProduct onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} ></FormProduct>
                            )}
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

export default UpdateProduct;