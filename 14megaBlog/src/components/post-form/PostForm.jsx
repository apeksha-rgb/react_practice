import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select,RTE} from ".."
import appwriteService from "../../appwrite/config"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux' 


function PostForm({post}) {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues:{
        title:post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status : post?.status || 'active',

    },
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)

  const submit = async (data)=> {
    try{
        let file = null

        if(data.image[0]){
            file = await appwriteService.uploadFile(data.image[0]) 
        }
    

    if(post){
        
        if(file){
            appwriteService.deleteFile(post.featuredImage)
        }

        const dbPost = await appwriteService.updatePost(post.$id, {
            ...data, 
            featuredImage: file? file.$id : post.featuredImage,
        })
        if(dbPost){
            navigate(`./post/${dbPost.$id}`)

        }
        
    }else{
       
        if(file){
            
            data.featuredImage =file.$id
            
            const dbPost = await appwriteService.createPost({
                ...data,
                userId: userData.$id,
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }
    } }catch (error){
        console.log("Error while submitting the form:", error)
    }
  }

  const slugTransform = useCallback((value) => {
    if(value && typeof value === 'string')
        return value
        .trim()
        .toLowerCase()
        .replace(/^[a-gA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-')

        
    return ""
  },[])

  React.useEffect(()=>{
    const subscription = watch((value,{name})=>{
        if(name=== 'title'){
            setValue('slug', slugTransform(value.title),{shouldValidate: true})
        }
    })
    return () => subscription.unsubscribe()
  },[watch, slugTransform, setValue])

  const renderImagePreview = (featuredImage) => {
    try {
      if (featuredImage) {
        const previewUrl = appwriteService.getFilePreview(featuredImage).href;
        return <img src={previewUrl} alt="Featured" className="rounded-lg" />;
      }
    } catch (error) {
      console.error("Error loading featured image:", featuredImage);
    }
    return <div className="w-full h-40 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm">No Image Available</div>;
  }

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />
            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />
            {post?.featuredImage && (
                <div className="w-full mb-4">
                   {renderImagePreview(post.featuredImage)}
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                {post ? "Update" : "Submit"}
            </Button>
        </div>
    </form>
  )
}

export default PostForm