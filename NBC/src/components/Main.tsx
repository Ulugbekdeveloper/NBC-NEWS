import { useEffect, useState } from "react"
import Home from "./Home"
import Navbar from "./Navbar"

const Main = () => {
    const [news , setNews] = useState([])
    const [menu , setMenu] = useState("")
    const getNews = async() => {
        try {
         await fetch(`https://newsapi.org/v2/everything?q=${menu ? menu : "world"}&sortBy=popularity&apiKey=55d0f6fc2fcd4210a27944d26d5b2d5f`)
        .then(res => res.json())
        .then(json => setNews(json.articles))
        } catch (error) {
          console.error(error);   
        }
    }

    useEffect(()=>{
        getNews()
    }, [menu])

  return (
    <div>
        <Navbar setMenu={setMenu}/>
        <Home news={news}/>
    </div>
  )
}

export default Main