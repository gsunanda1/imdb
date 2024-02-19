import { useEffect, useRef } from "react";
import { useState } from "react";

const AddMovieWithRef=()=>{
    // In js we use const titleRef = document.getElementById('title');
    // titleRef.value for getting the value
    const titleRef = useRef('');
    const popularityRef = useRef('');
    const ratingRef = useRef('');
    const summaryRef = useRef('');
    useEffect(()=>{
        console.log('Re-render');
    });

    const handleClick=()=>{
        console.log("Title", titleRef.current.value);
        console.log("Popularity", popularityRef.current.value);
        console.log("Rating", ratingRef.current.value);
        const finalString = `Title: ${titleRef.current.value}, Popularity: ${popularityRef.current.value}, Rating: ${ratingRef.current.value}`;
        summaryRef.current.innerText = finalString;
        summaryRef.current.style.border = '1px solid black';
    }
    return(
        <div className="add-movie">
            <h1>Add New Movie</h1>
            <div className="row">
                <label>Title</label>
                <input ref={titleRef} type="text"/>
            </div>
            <div className="row">
                <label>Popularity</label>
                <input ref={popularityRef} type="text"/>
            </div>
            <div className="row">
                <label>Rating</label>
                <input ref={ratingRef} type="text"/>
            </div>
            <button onClick={handleClick}>Add Movie</button>
            <div ref={summaryRef}></div>
        </div>
    )
}
export default AddMovieWithRef;