import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

    const params = useParams();

    useEffect(() => {
        getProductDetails();
    },);

    const getProductDetails = async () => {
        // console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        // console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        console.log(name, price, category, company)
    }

    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="inputBox" placeholder="Enter Product Name" />


            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} className="inputBox" placeholder="Enter Product Price" />


            <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} className="inputBox" placeholder="Enter Product Category" />


            <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} className="inputBox" placeholder="Enter Product Company" />


            <button onClick={updateProduct} className="appButton" >Update Product</button>
        </div>
    );
}

export default UpdateProduct;