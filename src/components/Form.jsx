import React from 'react'
import {useState, useEffect} from 'react';

function Form(props) {
    const [formData, setFormData] = useState ({entry: "",})

    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
        console.log(formData)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setFormData({...formData, [event.target.mov]: event.target.value})
        props.favMovie(formData.entry)
        
        // props.favMovies(formData.entry)      
        console.log(formData, '*')
      
    };    
  return (
    <div>
       <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="entry"
                onChange={handleChange}
                value={formData.entry}
             />

            <input type="submit" value="submit" />
        </form> 
    </div>
  )
}

export default Form