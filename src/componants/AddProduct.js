import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const addProduct = async () => {
        // console.log(name, price, category, company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        // console.log(userID);

        const result = await fetch('http://localhost:5000/add-product', {
            method: 'POST',
            body: JSON.stringify({ name, price, category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await result.json();
        console.log(data);

    }
    return (
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="inputBox" placeholder="Enter Product Name" />
            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} className="inputBox" placeholder="Enter Product Price" />
            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} className="inputBox" placeholder="Enter Product Category" />
            <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} className="inputBox" placeholder="Enter Product Company" />
            <button onClick={addProduct} className="appButton" >Add Product</button>
        </div>
    )
}

export default AddProduct;