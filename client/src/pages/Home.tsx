import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-fit bg-blue-100 rounded-md w-1/3 pt-3 pb-5 px-5 shadow-lg '>
        <form className='text-center space-y-5 flex flex-col'>
            <h1 className='text-3xl font-bold text-slate-600'>Upload file to share</h1>
            <input type="file" />
            <button className='bg-green-500 px-2 py-1 rounded-sm text-white text-xl font-semibold'>Upload</button>
        </form>
        <h1>Upload your file and share with your friends without any hassle. Just give it a try !! </h1>
    </div>
  )
}

export default Home