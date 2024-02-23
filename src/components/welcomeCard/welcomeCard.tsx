import { Link } from 'react-router-dom'

const WelcomeCard = () => {
  return (
    <div className="w-full h-screen relative">
      <img src="src/assets/img/background.jpg" alt="background image" className='absolute w-full h-full'/>     
      <div className="flex items-center gap-3 m-4 absolute">
        <img src="src/assets/img/logo.png" alt="logo" className="lg:w-12 w-8"/>
        <p className='font-font2 text-xl text-white text-sm'>3dPolyPixel</p>        
      </div>
      <div className="font-font3 lg:flex lg:px-24 md:px-20 2xl:px-32 px-12 bg-opacity-55 bg-black rounded-2xl w-4/5 h-4/5 shadow-xl absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="flex flex-col justify-between pt-12 h-3/5 items-center lg:items-start md:h-2/5 md:my-10   xl:h-3/5 xl:my-auto lg:my-auto lg:h-3/5">
          <div className="text-white text-5xl text-center lg:text-left lg:text-5xl xl:text-6xl">                         
            <h2>Find any model</h2>                          
            <h2>you can imagine</h2>     
          </div>  
          <Link to="/models">                 
            <button className="btn py-2 px-4 lg:py-3 lg:px-12 lg:btn-lg bg-gradient-to-r from-purple to-pinkBorder hover:bg-gradient-to-l from-purple to-pinkBorder hover:border-pinkBorder btn-rounded rounded-full text-white lg:text-3xl text-lg border-2 border-pinkBorder font-font2 font-normal">Start exploring</button>
          </Link>
        </div> 
        <div className="my-auto mx-auto lg:w-3/6 pt-4 md:w-2/3 md:mx-auto w-4/6 2xl:pl-40 ">
          <img src="src\assets\img\robot2.gif" alt="3d robot"/>
        </div>
      </div>
    </div>    
  )
}
export default WelcomeCard