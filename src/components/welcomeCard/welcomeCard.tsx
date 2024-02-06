import { Link } from 'react-router-dom'

const WelcomeCard = () => {
  return (
    <div>
      <div className="absolute flex items-center gap-3 m-4">
        <img src="src/assets/img/logo.png" alt="logo" className="w-12"/>
        <p className='font-font2 text-xl text-white'>3dPolyPixel</p>        
      </div>
      <div className="font-font3 flex justify-between px-32 bg-opacity-55 bg-black rounded-2xl w-4/5 h-4/5 shadow-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-between h-3/6  my-auto">
          <div className="text-white text-7xl">                         
            <h2>Find any model</h2>                          
            <h2>you can imagine</h2>     
          </div>  
          <Link to="/login">                 
            <button className="btn py-3 px-8 btn-lg  bg-gradient-to-r from-purple to-pinkBorder hover:bg-gradient-to-l from-purple to-pinkBorder hover:border-pinkBorder shadow-xl btn-rounded rounded-full w-80 text-white text-3xl border-2 border-pinkBorder font-font2 font-normal">Start exploring</button>
          </Link>
        </div>        
        <img className="w-3/6 h-5/6" src="src\assets\img\robot.gif" alt="3d robot"/>
        <img src="src/assets/img/abstract.png" className='absolute transform translate-x-[20rem] translate-y-[16rem] w-40 -z-10 opacity-40'/>
        <img src="src/assets/img/diamond.png" className='absolute transform translate-x-[60rem] translate-y-[5rem] w-32 -z-10 opacity-50'/>
        <img src="src/assets/img/3dicon.png" className='absolute transform translate-x-[15rem] translate-y-[29rem] w-40'/>
        <img src="src/assets/img/ring1.png" className='absolute transform translate-x-[-12rem] translate-y-[-5rem] w-40 opacity-80'/>
        <img src="src/assets/img/ring2.png" className='absolute transform translate-x-[69rem] translate-y-[42rem] w-36 opacity-85'/>        
      </div>
    </div>    
  )
}
export default WelcomeCard