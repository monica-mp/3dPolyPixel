import { useMenu } from "../../context/menuContext"

const Header = () => {
    const {isOpen} = useMenu();
  return (
    <div className={` w-[102rem] h-96 my-10 duration-300   ${isOpen ? "xl:ml-[19rem] xl:w-[60rem] w-[22rem] h-12 " : "xl:ml-28 md:w-[60rem] ml-[3rem] w-[20rem] h-12 xl:h-16"} bg-gradient-to-r from-purple to-pinkBorder rounded-2xl pl-20`}>
        <div className="flex justify-between items-center h-full relative">
          <div className="font-font3 text-4xl text-white w-3/4">
            <h1>Find your perfect</h1>
            <h1>3d model</h1>            
          </div>
          <div className="absolute transform -translate-x-[8rem] translate-y-[2rem]">
            <img src="src\assets\img\cloud2.gif" alt="rocket animation"/>
          </div>
          <div className={`absolute duration-300 ${isOpen ? "md:translate-x-[70rem] md:-translate-y-[10rem]" : "md:translate-x-[18rem] md:-translate-y-[10rem] "}`}>
            <img src="src\assets\img\cloud.gif" alt="cloud animation" />
          </div>
          <div className="absolute transform md:translate-x-[18rem] md:translate-y-[5.5rem]">
            <img src="src\assets\img\rocketship.gif" alt="rocket animation" />
          </div>
        </div>    
    </div>  
  )
}

export default Header