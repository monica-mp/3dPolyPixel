import { Link } from 'react-router-dom'

const WelcomeCard = () => {
  return (
    <div className="w-full h-screen relative">
      <img src="src/assets/img/background.jpg" alt="background image" className='absolute w-full h-full'/>     
      <div className="flex items-center gap-3 m-4 absolute">
        <img src="src/assets/img/logo.png" alt="logo" className="w-12"/>
        <p className='font-font2 text-xl text-white'>3dPolyPixel</p>        
      </div>
      <div className="font-font3 flex px-32 bg-opacity-55 bg-black rounded-2xl w-4/5 h-4/5 shadow-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="flex flex-col justify-between my-auto h-3/6">
          <div className="text-white text-7xl">                         
            <h2>Find any model</h2>                          
            <h2>you can imagine</h2>     
          </div>  
          <Link to="/login">                 
            <button className="btn py-3 px-12 btn-lg bg-gradient-to-r from-purple to-pinkBorder hover:bg-gradient-to-l from-purple to-pinkBorder hover:border-pinkBorder shadow-xl btn-rounded rounded-full text-white text-3xl border-2 border-pinkBorder font-font2 font-normal">Start exploring</button>
          </Link>
        </div> 
        <div className="my-auto ml-auto">
          <img src="src\assets\img\robot2.gif" alt="3d robot"/>
        </div>
      </div>
      <div className="absolute " >
          <img src="src/assets/img/abstract.png" className='w-40 opacity-20 transform translate-x-[48rem] translate-y-[22rem]'/>
          <img src="src/assets/img/diamond.png" className='w-32 opacity-50 transform translate-x-[85rem]'/>
          <img src="src/assets/img/3dicon.png" className='w-40 transform translate-x-[34rem] translate-y-[16rem]'/>
          <img src="src/assets/img/ring1.png" className='w-40 opacity-90 transform translate-x-[8rem] translate-y-[-26rem]'/>
          <img src="src/assets/img/ring2.png" className='w-36 opacity-85 transform translate-x-[92rem] translate-y-[8rem]'/> 
      </div>
    </div>    
  )
}
export default WelcomeCard