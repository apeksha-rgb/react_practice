import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({
    $id,
    title,
    featuredImage
}) {
  let imageUrl = ""
  
  try{
    imageUrl = featuredImage ? appwriteService.getFilePreview(featuredImage).href : ""
  }catch( error ){
    console.error("invalid featuredimage in postcard: ", featuredImage)
  }


  return (
    <Link to={`/post/${$id}`}> 
    <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            {imageUrl ? (<img src={imageUrl} alt={title} className='rounded-xl' />) : (<div className="w-full h-40 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
              No Image</div>)}
        </div>
        <h2
        className='text-xl font-bold'>{title}</h2>
    </div>
    </Link>
  )
}

export default PostCard