import Card2 from "./Card2";
import { useState } from 'react'
import Headerhlwd from "./Headerhlwd";
import { useEffect } from 'react'

function Hollywood() {
    const[search,setSearch]=useState(' ')
    const [ response,setResponse] = useState([])
 let data=[
  {
    photo:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a2b01b36784db11069306cdcafd34ed1d76d6fabfaef6cf0ab16607b36327714._UY500_UX667_RI_TTW_.jpg",
    actor:"Leonardo decaprio",
    film:"The depparted"
  },
  {
    photo:"https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/294518799/original/d6923d78a3afdbc085fca7eb750390a474e4481d/a-film-poster-design-movie-poster-design-poster-design.jpg",
    actor:"Joaquin phoenix",
    film:"Joker"
  },
  {
    photo:"https://www.originalfilmart.com/cdn/shop/products/avatar_2009_british_quad_teaser_original_film_art_5000x.jpg?v=1562542844",
    actor :"Sam worthington",
    film:"Avatar"  
  },
  {
    photo:"https://resumendelahistoria.com/wp-content/uploads/2023/05/shutter-island-poster.jpg",
    actor:"Leonardo decaprio",
    film:"Shutter island" 
  },
  {
    photo:"https://e1.pxfuel.com/desktop-wallpaper/251/835/desktop-wallpaper-f4-poster-the-fantastic-four-2015.jpg",
    actor:"Johnny storm",
    film:"Fantastic four" 
  },
  {
    photo:"https://i0.wp.com/thefulcrum.ca/wp-content/uploads/2019/03/Arts_MYSHS_-Prisoners_cred_Alcon-Entertainment.jpg?fit=1280%2C720&ssl=1",
    actor:"Jake Gyllenhaal",
    film:"prisoners" 
  },
  {
    photo:"https://m.media-amazon.com/images/I/91Td+KDBf2L._AC_UF894,1000_QL80_.jpg",
    actor:"chris pratt",
    film:"Jurassic world" 
  },
  {
    photo:"https://occ-0-34-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTEkXtzJXN8wxHZuCBctKKMSBisDUqP4iR59kQY1Fqy05-lgjA9YnqdODYBUEGXE2mezQ5Msxhdp1UaWi8JJ3iWpzOev0VGmZT8B.jpg?r=dc8",
    actor:"Keanu reeves",
     film:"John wick" 
  },
  {
    photo:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/84b3059a6df16006f2f7b56815706f9c469846ceb9c796b6bd2b40ab12027cbe._UY500_UX667_RI_TTW_.jpg",
    actor:"Brendan fraser",
     film:"Journey to the centre of earth" 
  },
  {
    photo:"https://www.tvmovie.de/bilder/758/2015/07/03/51424-guardians-galaxy.jpg?itok=fj-brQcZ",
    actor:"Chris pratt" ,
    film:"Guardian of the galaxy" 
  },
  {
    photo :"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d501d6935617c9419882a05bb9bf21bfe8dbe2436663b05c543727c33a8c630e._UY500_UX667_RI_TTW_SX329_.jpg",
    actor:"Jake Gyllenhaal",
    film:"Enemy" 
  },
  {
    photo:"https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/07/the-tomorrow-war-movie-review-1.jpg",
    actor:"Chris pratt",
    film:"The tomorrow war" 
  },
  {
    photo:"https://wallup.net/wp-content/uploads/2018/03/20/324446-The_Amazing_Spider-Man.jpg",
    actor:"Tobey maguire",
    film:"Spiderman" 
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
  <div className="klywd">
    <div className='sss'>
      <input type="text" placeholder="Search your favourite" onChange={handleOnClick}/>
    </div>
    <Headerhlwd/>
    {
     console.log(response)
     }
  {
    response.map(({photo,film,actor})=>{
    return(
      <Card2 image={photo} title={film} para={actor}/>
    )
    })
  }
  </div>
  </>
)
}
 export default Hollywood