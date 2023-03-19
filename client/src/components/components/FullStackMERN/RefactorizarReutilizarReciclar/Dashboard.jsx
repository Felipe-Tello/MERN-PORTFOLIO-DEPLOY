import React, { useState, useEffect } from "react";
import axios from "axios";
import FormProduct from "./components/Form";
import List from "./components/List";

const Dashboard = ({commonData1}) => {

    const [productsList, setProductsList] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products/")
            .then(res => {
                setProductsList(res.data);
                setLoaded(true)
            })
            .catch(err => console.log(err));
    }, [])

    //Funcion para guardar con conexión a backend
    const submitProduct = product => {
        axios.post("http://localhost:8000/api/products/new", product)
            .then(res => {  
                setProductsList([...productsList, res.data]);
            })
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
                    <div className="bgn-primary" style={{width:"80%", display:"flex", justifyContent:"center", border:"2px solid black", borderRadius:"10px", padding:"5%"}}>
                        <div style={{width:"50%"}}>
                            <h1>New Product</h1>
                            <FormProduct onSubmitProp={submitProduct} initialTitle='' initialPrice='' initialDescription='' ></FormProduct>
                        </div>
                        {loaded &&(
                        <List products={productsList} setProducts={setProductsList}></List>
                        )}
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