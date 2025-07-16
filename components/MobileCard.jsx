const MobileCard = (props)=>{
    const {data}= props ;
    
    return (
        <div className="w-60 h-100 bg-[#efecec] p-3 m-5 ">
           <div><img src ={data.imageUrl}></img></div> 
           
           <div className="mt-6 bg-red-600 text-white p-1 w-fit mb-4"><p>{data.discountPercent} % off</p></div>
           <p>₹ {data.price}</p>
           <p>{data.phoneName}</p>
           <p>Launched On:  {data.launchDate}</p>
        </div>
    )
}
export default MobileCard;