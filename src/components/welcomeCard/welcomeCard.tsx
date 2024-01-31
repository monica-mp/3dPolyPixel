

const WelcomeCard = () => {
  return (
    <div className="font-font2 flex justify-between px-32 bg-opacity-55 bg-black rounded-2xl w-4/5 h-4/5 shadow-xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col justify-between h-3/6  my-auto">
          <div className="text-white text-7xl">                         
            <h2>Find any model</h2>                          
            <h2>you can imagine</h2>     
          </div>                   
          <button className="btn py-3 px-8 btn-lg bg-black hover:bg-gradient-to-r from-purple to-pinkBorder hover:border-pinkBorder shadow-xl btn-rounded rounded-full w-80 text-white text-2xl font-light border-2 border-pinkBorder font-normal">Start exploring</button>
        </div>
        <img className= "w-1/2 " src="src\assets\img\robot.webp" alt="3d robot"/>
        
    </div>
  )
}
export default WelcomeCard