import React, { useState } from "react";

const FormProduct = (props) => {

    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const submitProduct = e => {
        e.preventDefault();
        onSubmitProp({title,price,description});
        setDescription("")
        setTitle("")
        setPrice("")
    }

    return (
            <form onSubmit={submitProduct}>
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="placeholder" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label>Name</label>
                </div>
                <div className="form-floating">
                    <input type="number" className="form-control" placeholder="placeholder" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <label>Price</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" placeholder="placeholder" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label>Description</label>
                </div>
                <input type="submit" className="btn btn-success" value="Guardar" />
            </form>
    );
}
 
export default FormProduct;