import {React, useEffect, useState} from 'react'
import DOMPurify from "dompurify";
const Home = () => {
    const [shows, setshows] = useState([])
    useEffect(() => {
      async function getShowData(){
        let data = await fetch(`https://api.tvmaze.com/search/shows?q=all`)
        let shows = await data.json()
        setshows(shows)
      }
      getShowData()
    }, [])
    const sanitizeHTML = (html) => {
        return { __html: DOMPurify.sanitize(html) };
      };
    function setandRedirect(elem){
        console.log(elem.show.name)
        localStorage.setItem("elem", JSON.stringify(elem))
        window.location.href = "/specific"
    }
  return (
    <>
    <h2>ReactJS Developer Internship Test - Trish Batra </h2>
    <div className='grid-container' >
      {shows.map((elem)=>{
        return <div className='grid-item'>
                 <h1>{elem.show.name}</h1>
                <img src={`${elem.show.image == null? `cnc.webp`: elem.show.image.medium}`}  />
                 <p dangerouslySetInnerHTML={sanitizeHTML(elem.show.summary.substring(0,250) + "......")}></p>
                 <button  onClick={()=>{setandRedirect(elem)}} className='btn' > Read Full</button>
            </div>
      })}
    </div>
    </>
  )
}

export default Home
