import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const OneProduct = (props) => {

    const [individualProduct, setIndividualProduct] = useState({})


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.thingid}`)
            .then(res=>{
                console.log("response after trying to get ONE Product", res)
                setIndividualProduct(res.data.results)
            })
            .catch(err=> console.log(err))
    },[])


    const deleteProduct = (e, thingid)=> {
        console.log("trying to delete it", thingid)
        axios.delete(`http://localhost:8000/api/products/delete/${props.thingid}`)
            .then(res => {
                console.log("*************")
                console.log(res)
                console.log("*************")
                setIndividualProduct(res.data.results)
                navigate("/")
            })
            .catch(err=> console.log(err))

    }
    return (
        <div className="card">
            
            <div>
                
                <h1 className="card-title">{individualProduct.title} </h1>
                {individualProduct==null? <h1>no matching product found</h1>:
                <> 
                <p className="card-text">Price: {individualProduct.price}</p>
                <p className="card-text">Description: {individualProduct.description}</p>
                <button onClick={(e)=> deleteProduct(e, individualProduct._id)}>Delete product</button>

                </>}

                
            </div>
        </div>
    );
};


export default OneProduct;