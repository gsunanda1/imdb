import { useEffect } from "react";
import { useState } from "react";

const AddMovie=()=>{
    // const [title,setTitle]=useState("");
    // const [popularity,setPopularity]=useState("");
    // const [rating,setRating]=useState("");

    const [form,setFormData]=useState({
        title:"",
        popularity:"",
        rating:""
    })
    const handleTitleChange=(e)=>{
        // setTitle(e.target.value);
       // setFormData({...form,title:e.target.value});
        setFormData((prev)=>({
            ...prev,
            title:e.target.value,
        })) ;
    }
    const handlePopularityChange=(e)=>{
        setFormData({...form,popularity:e.target.value});
    }
    const handleRatingChange=(e)=>{
        setFormData({...form,rating:e.target.value});
    }
    const handleClick=()=>{
        console.log("Form Data", form);
    }

    useEffect(()=>{
        console.log('Re-render');
    });
    return(
        <div className="add-movie">
            <h1>Add New Movie</h1>
            <div className="row">
                <label>Title</label>
                <input type="text" onChange={handleTitleChange}/>
            </div>
            <div className="row">
                <label>Popularity</label>
                <input type="text"onChange={handlePopularityChange}/>
            </div>
            <div className="row">
                <label>Rating</label>
                <input type="text"onChange={handleRatingChange}/>
            </div>
            <button onClick={handleClick}>Add Movie</button>
        </div>
    )
}
export default AddMovie;