import React, { useState } from 'react'

interface Ifiletype{
  name:string,
  size:number,
  type:string
}

const Home = () => {
  const [file,setFile]=useState<File>();
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

    const filelist=e.target.files;

    if(!filelist) return;
    
    setFile(filelist[0])
  };
  
   const uploadFile =(e: React.MouseEvent<HTMLSpanElement, MouseEvent>)=> {
     if (file) {
         const formData = new FormData();
         formData.append("myFile", file, file.name);
     }

  console.log(uploadFile);
  
    
    
    
  }
  return (
    <div className='h-fit bg-blue-100 border-2 border-slate-300 rounded-md w-1/3 pt-3 pb-5 px-5 shadow-lg '>
        <form className='text-center space-y-5 mb-5 flex flex-col'>
            <h1 className='text-3xl font-bold text-slate-600'>Upload file to share</h1>
            <input type="file" accept='imgge/*' onChange={handleChange} />
            <button onClick={uploadFile} className='bg-green-500 px-2 py-1 rounded-sm text-white text-xl font-semibold'>Upload</button>
        </form>
        <h1 className='text-justify'>Upload your file and share with your friends without any hassle. Just give it a try while keeping yourself anonymous </h1>
    </div>
  )
}

export default Home