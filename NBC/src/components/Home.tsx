import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

type newsProp ={
    news: any
}

const Home = (props:newsProp ) => {
  return (
    <div className="flex pl-12">
        <LeftSection  news={props?.news}/>
        <RightSection news={props?.news}/>
    </div>
  )
}

export default Home