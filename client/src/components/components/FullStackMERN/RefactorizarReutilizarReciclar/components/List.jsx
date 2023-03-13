import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const List = (props) => {

    const [productsList, setProductsList] = useState([]);

    useEffect( () => {
        setProductsList(props.products);
    }, [props.products])

    const deleteProduct = productId => {
        setProductsList(productsList.filter(producto => producto._id !== productId))
    }

    return (
        <div style={{width:"50%", display:"flex", flexDirection:"column", alignItems:"center", overflow: "auto", maxHeight:"35vh"}}>
            <h1>All Products</h1>
            <table className="table table-bordered" style={{width:"80%"}}>
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
                        <td><Link to={`/advanced-mern/refactorizar-reutilizar-reciclar/${product._id}`}>{product.title}</Link></td>
                        <td style={{padding:"0px"}}><Link className="btn btn-warning" style={{width:"100%"}} to={`/advanced-mern/refactorizar-reutilizar-reciclar/${product._id}/edit`}>Edit</Link></td>
                        <td style={{padding:"0px", width:"10%"}}><DeleteButton productId={product._id} successCallback={()=>deleteProduct(product._id)}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default List;