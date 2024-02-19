import { useEffect, useState } from "react";

const getPageArray = (arrayLength, startNumber)=>{
    return [...Array(arrayLength)].map((item,idx)=>{
        return startNumber+idx+1;
    });
}
const Pagination = ({totalPages,fetchMovieData})=>{
    //total pages is a number, so create a array of size totalPageButtons from 1 to totalPageButtons
    //if we use totalPageButtons, we get cal stack exceeded, so for now take 10
    const totalPageButtons=Math.min(10,totalPages);
    const pageArray = getPageArray(totalPageButtons,0);
    const [pages,setPages]=useState(pageArray);
    const [activePage,setActivePage]=useState(1);

    useEffect(()=>{
        fetchMovieData(activePage);
        // clicking on next active page wil be greater than last val in array. so we need to update window
        if(activePage> pages[pages.length-1]){
            const startNumber = activePage-totalPageButtons;
            setPages(getPageArray(totalPageButtons,startNumber));
        }
        // clicking on prev button active page wil be less than first val in array. so we need to update window
        if(activePage < pages[0]){
            const startNumber = activePage -1;
            setPages(getPageArray(totalPageButtons,startNumber));
        }
    },[activePage]);

    return(
        <div className="pagination">
            <button onClick={()=> {setActivePage(activePage-1)}} disabled={activePage==1}>Prev</button>
            {
                pages?.map((pageNumber)=>{
                    return(<button className={activePage == pageNumber ? 'selected':''} disbaled={totalPages == activePage} 
                    onClick={()=> {setActivePage(pageNumber)}}>{pageNumber}</button>)
                })
            }
            <button onClick={()=> {setActivePage(activePage+1)}}>Next</button>
        </div>
    )
}
export default Pagination;