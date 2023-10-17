import Card1 from "./Card1";
import { useState } from 'react'
import Headertamil from "./Headertamil";
import { useEffect } from 'react'
function Kollywood() {
    const[search,setSearch]=useState(false)
    const [ response,setResponse] = useState([])
 let data=[
  {
    photo:"https://e1.pxfuel.com/desktop-wallpaper/80/755/desktop-wallpaper-petta-movie-telugu-release-date-posters-petta.jpg",
    actor:"Rajanigandh",
    film:"Petta"
  },
  {
    photo:"https://www.cinejosh.com/gallereys/movies/normal/remo_movie_posters_2110160222/remo_movie_posters_2110160222_05.jpg",
    actor:"Sivakarthikeyan",
    film:"Remo"
  },
  {
    photo:"https://thetelugufilmnagar.com/wp-content/uploads/2021/07/ikiram.jpg",
    actor :"Kamalahassan",
    film:"Vikram"  
  },
  {
    photo:"https://data1.ibtimes.co.in/en/full/697825/nayantharas-imaikkaa-nodigal.jpg?h=450&l=50&t=40",
    actor:"Vijay sethupathi",
    film:"Imaikka nodigal" 
  },
  {
    photo:"https://www.koimoi.com/wp-content/new-galleries/2022/03/ps-1-is-all-set-to-theatrically-release-on-30th-september-2022-001.jpg",
    actor:"Vikram",
    film:" Ponniyam selvam" 
  },
  {
    photo:"https://i.ytimg.com/vi/oqEsncqQQqA/sddefault.jpg",
    actor:"Vijay sethupathi",
    film:"KRK" 
  },
  {
    photo:"https://www.nowrunning.com/content/movie/2015/Naanum-Row/bg12.jpg",
    actor:"Vijay sethupathi",
    film:"Naanum rowdy daan" 
  },
  {
    photo:"https://deadline.com/wp-content/uploads/2021/01/master-poster.jpg?w=1024",
    actor:"Vijay",
     film:"Master" 
  },
  {
    photo:"https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/jailer-trailer-out-022138-16x9.jpg?VersionId=0NAG9.j9klGlKqVORDymimyt6tEStWoF",
    actor:"Rajanigand",
     film:"Jailer" 
  },
  {
    photo:"https://i.zoomtventertainment.com/story/PIC_Sivakarthikeyans_Doctor_team_drops_a_new_poster.jpg",
    actor:"Sivakarthikeyan" ,
    film:"Doctor" 
  },
  {
    photo :"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/vijay_2-sixteen_nine.jpg?VersionId=z.PTKHIBoDVzWFUpa6L1cUIRJFv8K_rl",
    actor:"Vijay",
    film:"Varisu" 
  },
  {
    photo:"https://i.pinimg.com/736x/31/ca/f2/31caf2fa888d01cd7658ed5d41a5798a.jpg",
    actor:"Vijay",
    film:"Anjaan" 
  },
  {
    photo:"https://static.toiimg.com/photo/msid-68220059/68220059.jpg",
    actor:"Nagachaythanya",
    film:"Majili" 
  },
  {
    photo:"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/02/13/Love-Story-Movie-New-HD-Still-and-Poster-1-scaled.jpg?quality=80&zoom=1&ssl=1",
    actor:"Nagachaythanya",
    film:"Shekar kammula's lovestory" 
  },
  {
    photo:"https://www.andhrawishesh.com/images/phocagallery/Wallpapers/Movies/Telugu/TaxiwalaMoviePosters/Taxiwala-Movie-Posters-03.jpg",
    actor:"Vijay devarconda",
    film:"Taxiwala" 
  },
  {
    photo:"https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2016/04/18/24-Movie-Stills-8.jpg?fit=1400%2C700&quality=80&zoom=1&ssl=1",
    actor:"Surya",
    film:"24" 

  },
  {
    photo:"https://data1.ibtimes.co.in/photo/en/full/109302/vijay-devarakonda-rashmika-mandannas-poster-dear-comrade.jpg?w=894",
    actor:"NVijay devarkonda",
    film:"Dear comrade" 
  },
  
 ];

 const handleOnClick=(e)=>{
  const search=e.target.value
  console.log(search);
  setSearch(search)
 
 const result=data.filter((data)=>{
 if(data.film===search){
  return true
 }else if(data.actor===search){
  return true
 }
 })
 setResponse(result)
 console.log(result,"result");
}
useEffect (()=>{
    setResponse(data)},[]
    )
 


return(
  <>
    <Headertamil/>
    <div className='sss'>
      <input type="text" placeholder="Search your favourite" onChange={handleOnClick}/>
    </div>
    <div className="klywd">
    {
     console.log(response)
     }
  {
    response.map(({photo,film,actor})=>{
    return(
      <Card1 image={photo} title={film} para={actor}/>
    )
    })
  }
  </div>
  </>
)
}
export default Kollywood