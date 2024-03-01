import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../store/productReducer";

const getPageArray = (arrayLength, startNumber)=>{
    return [...Array(arrayLength)].map((item,idx)=>{
        return startNumber+idx+1;
    });
}
const Pagination = ({totalPages})=>{
    //total pages is a number, so create a array of size totalPageButtons from 1 to totalPageButtons
    //if we use totalPageButtons, we get cal stack exceeded, so for now take 10
    const totalPageButtons=Math.min(10,totalPages);
    const pageArray = getPageArray(totalPageButtons,0);
    const [pages,setPages]=useState(pageArray);
    //const [activePage,setActivePage]=useState(1);
    const {activePage} = useSelector((state)=>state.products);
    const dispatch = useDispatch();
    useEffect(()=>{
       // fetchMovieData(activePage);
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
    },[]);

    return(
        <div className="pagination">
            <button onClick={()=> {dispatch(setActivePage(activePage-1))}} disabled={activePage==1}>Prev</button>
            {
                pages?.map((pageNumber)=>{
                    return(<button className={activePage == pageNumber ? 'selected':''} disbaled={totalPages == activePage} 
                    onClick={()=> {dispatch(setActivePage(pageNumber))}}>{pageNumber}</button>)
                })
            }
            <button onClick={()=> {dispatch(setActivePage(activePage+1))}}>Next</button>
        </div>
    )
}
export default Pagination;