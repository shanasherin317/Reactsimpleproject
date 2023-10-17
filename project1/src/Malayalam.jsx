import Card from './Card'
import Headermlylm from './Headermlylm'
import { useState } from 'react'
import { useEffect } from 'react'
function Malayalam() {
    const[search,searchItem]=useState(' ')
    const [ response,setResponse] = useState([])
 let data=[
    {
        photo:"https://assets.vogue.in/photos/5db957d8177d2f00087466b4/16:9/w_1280,c_limit/Kumbalangi-Nights-01.jpg",
        actor:"Soubin shahir",
        film:"Kumbalangi nights"
      },
      {
        photo:"https://static.toiimg.com/photo/msid-94780206,width-147,height-108/94780206/94780206.jpg?pl=18016",
        actor:"Shane tom chacko",
        film:"Vijithram"
      },
      {
        photo:"https://thethaiger.com/world/wp-content/uploads/2023/10/Chaaver-Malayalam-Film.jpg",
        actor :"Kunjacko boban",
        film:"chaver"  
      },
      {
        photo:"https://www.nowrunning.com/content/movie/2021/home-25612/bg_home.jpg",
        actor:"Sreenath basi",
        film:"Home" 
      },
      {
        photo:"https://onlookersmedia.in/wp-content/uploads/2019/08/Virus-Movie-Poster-Still.jpg",
        actor:"Asif ali",
        film:"Virus" 
      },
      {
        photo:"https://wp.scoopwhoop.com/wp-content/uploads/2021/08/611f45d58a373a326b4065a3_d6582c8e-562e-4d82-94bb-710464df53e7.jpg",
        actor:"Dulquer salman",
        film:"Kammattipadam" 
      },
      {
        photo:"https://wallpapercave.com/wp/wp4406401.jpg",
        actor:"Mohanlal",
        film:"Lucifer" 
      },
      {
        photo:"https://i.ytimg.com/vi/zDMcNpqmRKA/maxresdefault.jpg",
        actor:"Dulquer salman",
         film:"King of kotha" 
      },
      {
        photo:"https://i.ytimg.com/vi/H7aKvMAfRUw/maxresdefault.jpg",
        actor:"Arjun ashokan",
         film:"Pranaya vilasam" 
      },
      {
        photo:"https://www.nowrunning.com/content/movie/2022/roman-26466/bg_romancham.jpg",
        actor:"Soubin shahir" ,
        film:"Romanjam" 
      },
      {
        photo :"https://static.toiimg.com/thumb/msid-99523100,width-1280,resizemode-4/99523100.jpg",
        actor:"Mammooty",
        film:"Kannur squad" 
      },
      {
        photo:"https://3.bp.blogspot.com/-5FQ_DrWf2oA/Uoh9fVhwlUI/AAAAAAAAAKw/hANo7LHRNKM/s1600/Drishyam+Malayalam+Movie+Posters+(4).jpg",
        actor:"Mohanlal",
        film:"Drishyam" 
      },
      {
        photo:"https://www.koimoi.com/wp-content/new-galleries/2022/03/bheeshma-parvam-box-office-day-6-mammootty-continues-to-break-records-becoming-the-highest-grosser-of-2022-in-kerala-001.jpg",
        actor:"Mammooty",
        film:"Beeshma paravans" 
      },
      {
        photo:"https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2021/2/2/aarattu-poster.jpg",
        actor:"Mohanlal",
        film:"Aarat" 
      },
      {
        photo:"https://qph.cf2.quoracdn.net/main-qimg-2abb76f6cde5dd3989ff4c3f73f09278-lq",
        actor:"Fahad fasil",
        film:"Trans" 
      },
      {
        photo:"https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2019/5/19/tovino-ahaana.jpg",
        actor:"Tovino thomas",
        film:"Luka" 
    
      },
      {
        photo:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc8_i0J5nl1RAs32cPQ8cPMNNyAmRWUPJ8jFN2QRIBk4m-Le88PsfJWkgJN0uwk9ykvpf27e3htPPpaHmnYJvMRhCrVcxLiaFV05.jpg?r=887",
        actor:"Tovino thomas",
        film:"Thallumala" 
    
      },
      
     ]
     const handleOnClick=(e)=>{
      const search=e.target.value 
      console.log(search);
      searchItem(search)
      
     let result=data.filter((data)=>{
        if(data.film ===search){
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
        <div className='malylm'>
        <div className='sss'>
                <input type="text" placeholder='Search your favourite' onChange={handleOnClick}/>
            </div>
            <Headermlylm/>
            {
                console.log(response)
            }
        {
            response.map(({photo,actor,film})=>{
           return(
        
          <Card image={photo} title={film} para={actor} />
          
           )
            })
        }
        </div>
        </>
     )
}
export default Malayalam
