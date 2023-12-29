import React,{useState} from 'react'
import './newpost.css'

export default function NewPost({FormData,setFormData,handleFormsave,apierror}) {
  
  const handlechange=(e)=>{
    setFormData({...FormData,
    [e.target.name]:e.target.value,
    })
  }
  
  return (
    <>
      {(apierror === "newpost_error" || apierror === "edit_error") && (
        <p key="edit_post_error" className="error-banner">
          Unable to get response From Server. Please Reload or Try Again Later.
        </p>
      )}

      {apierror !== "newpost_error" && apierror !== "edit_error" && (
        <React.Fragment key="fetch_post_error">
          <div className="newp">
            <form onSubmit={handleFormsave}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  required
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
                  required
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
        </React.Fragment>
      )}
    </>
  );
}
