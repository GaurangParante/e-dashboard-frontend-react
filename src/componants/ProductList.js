import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        // console.log(localStorage.getItem('auth'));
        let result = await fetch('http://localhost:5000/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('auth'))}`
            }
        });
        result = await result.json();
        setProducts(result);
    }
    // console.log(products);
    const deleteProduct = async (id) => {
        // console.log(id)
        let result = await fetch('http://localhost:5000/product/' + id, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('auth'))}`
            }
        });
        result = await result.json();

        if (result) {
            getProducts();
        }
    }

    const searchHandle = async (event) => {
        // console.log(event.target.value)
        let key = event.target.value;
        if (key) {
            let result = await fetch('http://localhost:5000/search/' + key, {
                headers: {
                    authorization: `bearer ${JSON.parse(localStorage.getItem('auth'))}`
                }
            });
            result = await result.json();
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts();
        }
    }

    return (
        <div className="product-list">
            <h1>Product List</h1>
            <input className="search-input" type="text" placeholder="Search Product Here" onChange={searchHandle} />
            <ul>
                <li>S.no</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Action</li>
            </ul>
            {
                products.length ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>$ {item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={() => { deleteProduct(item._id) }}>Delete</button>
                            <Link to={"/update/" + item._id} ><button>Update</button></Link>
                        </li>
                    </ul>
                ) : <h3>No result found</h3>
            }

        </div>
    )
}

export default ProductList;