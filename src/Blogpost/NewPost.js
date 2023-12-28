import React,{useState} from 'react'
import './newpost.css'

export default function NewPost({FormData,setFormData,handleFormsave}) {
  
  const handlechange=(e)=>{
    setFormData({...FormData,
    [e.target.name]:e.target.value,
    })
  }
  return (
    <div className='newp'>
      <form onSubmit={handleFormsave}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={FormData.title}
          onChange={handlechange}
          placeholder="Enter title"
        />
      </label>
      <br />
      <label>
        Body:
        <textarea
          name="body"
          rows={10}
          value={FormData.body}
          onChange={handlechange}
          placeholder="Enter body"
        />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
    </div>
  )
}
