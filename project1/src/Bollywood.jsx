import Card2 from "./Card2";
import { useState } from 'react'
import Headerblwd from "./Headerblwd";
import { useEffect } from 'react'

function Bollywood() {
  const[search,setSearch]=useState(false)
  const [ response,setResponse] = useState([])
    let data=[
        {
          photo:"https://lehren.com/wp-content/uploads/2023/01/Shah-Rukh-Khan-Pathaan.jpg",
          actor:"Shahruh khan",
          film:"Pathaan"
        },
        {
          photo:"https://img.onmanorama.com/content/dam/mm/en/entertainment/images/sept-15/tamasha-poster.jpg",
          actor:"Ranbir kapoor",
          film:"Tamaasha"
        },
        {
          photo:"https://i0.wp.com/boxofficeworldwide.com/wp-content/uploads/2023/07/et00312549-ahbjngrerf-landscape.jpg?fit=1280%2C640&ssl=1",
          actor :"Ranveer singh",
          film:"Rocky aur Raani ki prem kahani"  
        },
        {
          photo:"https://i.ytimg.com/vi/xbHiXxO2LXQ/maxresdefault.jpg",
          actor:"sidharth malhothra",
          film:"Shershaah" 
        },
        {
          photo:"https://images.mid-day.com/images/images/2023/may/jawan_d.jpg",
          actor:"Shahruh khan",
          film:"Jawaan" 
        },
        {
          photo:"https://e0.pxfuel.com/wallpapers/104/201/desktop-wallpaper-drama-set-in-the-1940s-during-the-partition-of-india-kalank-official-bollywood-entertainment-alia-official-trailer-varun.jpg",
          actor:"Varun dawan",
          film:"Kalank" 
        },
        {
          photo:"https://i.ndtvimg.com/mt/movies/2013-03/chemistry-deepikaranbir-read.jpg",
          actor:"Ranbir kapoor",
          film:"Yeh jawani hey dewani" 
        },
        {
          photo:"https://qqcdnpictest.mxplay.com/pic/4a2b2d686c7c4d63d0e45116bc8d0331/en/16x9/640x360/test_pic1540550477738.jpg",
          actor:"Hrithik roshan",
           film:"Bang bang" 
        },
        {
          photo:"https://www.99techspot.in/wp-content/uploads/2023/08/ganapath-movie-download.webp",
          actor:"Tiger shroff",
           film:"Ganapath" 
        },
        {
          photo:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/04/20/814959-bharat-motion-poster-salman-khan.jpg",
          actor:"Salmaan khan" ,
          film:"Bharat" 
        },
        {
          photo :"https://i.ytimg.com/vi/U37TSTZbqGA/sddefault.jpg",
          actor:"Hrithik roshan",
          film:"Kabil" 
        },
        {
          photo:"https://feeds.abplive.com/onecms/images/uploaded-images/2021/11/18/fb111656064bdd1cbc2564ac75bf8ef9_original.jpg?impolicy=abp_cdn&imwidth=720",
          actor:"sidharth malhothra",
          film:"Yodha" 
        },
        {
          photo:"https://i.ytimg.com/vi/B6GVmWxyplU/maxresdefault.jpg",
          actor:"Tiger shroff",
          film:"Munna mickael" 
        },
        {
          photo:"https://www.filmibeat.com/img/2015/10/02-1443772817-untitled-1.jpg",
          actor:"Salmaan khan",
          film:"Prem ratan dhan payo" 
        },
        {
          photo:"https://i.pinimg.com/736x/be/29/8a/be298acc0fff86a0d635b50fff5cd2ac.jpg",
          actor:"Karthik aryan",
          film:"Sonu ki titu ki sweety" 
        },
        {
          photo:"https://justformoviefreaks.in/wp-content/uploads/2019/03/rsz_luka-chuppi.png",
          actor:"Karthik aryan",
          film:"Lukkachuppi" 
      
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
         <Headerblwd/>
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
            <Card2 image={photo} title={film} para={actor}/>
          )
          })
        }
        </div>
        </>
      )
      }
 
      export default Bollywood