import uzb from '../assets/uz.png'

type menuProps = {
  setMenu: any
}

const Navbar = (props: menuProps) => {
  return (
    <div className='flex items-center bg-slate-500 w-screen h-16 text-white'>
        <img src={uzb} alt="LOGO" className='w-14 h-9 ml-3' />
        <h1 className='font-bold text-3xl ml-2'>NEWS</h1> 
        <h1 onClick={()=> props.setMenu("POLITICS")} className='font-bold ml-7 cursor-pointer'>POLITICS</h1>
        <h1 onClick={()=> props.setMenu("U.S NEWS")} className='font-bold ml-7 cursor-pointer'>U.S NEWS</h1>
        <h1 onClick={()=> props.setMenu("WORLD")} className='font-bold ml-7 cursor-pointer'>WORLD</h1>
        <h1 onClick={()=> props.setMenu("BUSINESS")} className='font-bold ml-7 cursor-pointer'>BUSINESS</h1>
        <h1 onClick={()=> props.setMenu("NBC NEWS TIPLINE")} className='font-bold ml-7 cursor-pointer'>NEWS TIPLINE</h1>
        <h1 onClick={()=> props.setMenu("VIDEO")} className='font-bold ml-7 cursor-pointer'>VIDEO</h1>
        <h1 onClick={()=> props.setMenu("HEALTH")} className='font-bold ml-7 cursor-pointer'>HEALTH</h1>
        <h1 onClick={()=> props.setMenu("LIVE")} className='font-bold ml-7 cursor-pointer'>LIVE</h1>
    </div>
  )
}

export default Navbar