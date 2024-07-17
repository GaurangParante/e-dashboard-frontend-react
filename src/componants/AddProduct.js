import React, { useState } from "react";

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false)
    const addProduct = async () => {

        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
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
            {error && !name && <span className="invalid-input">Enter valid name</span>}

            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} className="inputBox" placeholder="Enter Product Price" />
            {error && !price && <span className="invalid-input">Enter valid price</span>}

            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} className="inputBox" placeholder="Enter Product Category" />
            {error && !category && <span className="invalid-input">Enter valid category</span>}

            <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} className="inputBox" placeholder="Enter Product Company" />
            {error && !company && <span className="invalid-input">Enter valid company</span>}

            <button onClick={addProduct} className="appButton" >Add Product</button>
        </div>
    )
}

export default AddProduct;