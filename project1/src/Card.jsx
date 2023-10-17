function Card(props){
    const{image,title,para}=props
    return(
        <>
        <div className="card">
         <img src={image} alt="" />
         <div className="card-content">
         <h3>{title}</h3>
         <p>{para}</p>
         </div>
        </div>
        </>
    )
}
export default Card