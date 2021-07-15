import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const AllProducts = () => {

    const[allProducts, setallProduct] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/all")
            .then(res => {
                console.log("*************")
                console.log(res)
                console.log("*************")
                setallProduct(res.data.results)


            })
            .catch(err => console.log("errors retrieving all students", err))

    }, [])
    

    return (
        <div className = "text-center">
            
            {allProducts.map((products, idx)=>{
                return <div key = {idx} className="card">
                    <h4 className="card-title"><Link to = {`/api/products/${products._id}`}>{products.title}</Link></h4>
                    <button><Link to={`/api/products/${products._id}`}>More Info</Link></button>
                    

                    </div>
            })}

            
            
        </div>
    );
};


export default AllProducts;