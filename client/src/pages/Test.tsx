import axios from 'axios'
import React, { useState } from 'react'

const Test = () => {

    const[user,setUser]=useState({
        image:''
    })

    const handleChange=(e:any)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log("changed !!");
        console.log(user);
        
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        console.log("submitted !!");
        console.log(user.image);
        const formdata=new FormData();
        formdata.append('image',user.image);

        axios.post('http://localhost:5001/api/files/upload',formdata).then(res=>{
            console.log(res);
            
        }).catch(err=>{
            console.log(err);
            
        })
        
        
    }

  return (
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <input type="file" name='image' accept='image/*' onChange={handleChange} />
        <button>Upload</button>
    </form>
  )
}

export default Test