import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const CreateProduct = () => {
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: "",
        
    })
    
    

    const changeHandler =(e)=>{
        console.log("i'm changing for you baby")
        console.log(e.target.name)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }
        

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submitted baby",formInfo)
    
        
        axios.post("http://localhost:8000/api/products/create", formInfo)
            .then(res=>{

                console.log("response after submitting the post request!", res)
                console.log(res)
                navigate("/")
            })
            .catch(err=> console.log(err))
    }




    return (
        <div className ="col-6 mx-auto">
            <form onSubmit= {submitHandler} className ="text-center">
                <div className="form-group">
                    <label for ="title"> Title:</label>
                    <input type="title" name="title" onChange={changeHandler} id=""></input>
                </div>
                <div className="form-group">
                    <label for ="price"> Price:</label>
                    <input type="price" name="price"onChange={changeHandler} id=""></input>
                </div>
                <div className="form-group">
                    <label for ="description"> Description:</label>
                    <input type="description" name="description"onChange={changeHandler} id=""></input>
                </div>
                <input type="submit"/>

            </form>
        </div>
    );
}



export default CreateProduct;