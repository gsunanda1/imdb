const Banner=({title, description,image})=>{
    return(
        <div className="banner" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original${image}')`}}>
            <div className="detail">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Banner;