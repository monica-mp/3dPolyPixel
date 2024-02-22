import { useMenu } from "../../context/menuContext"

const Header = () => {
    const {isOpen} = useMenu();
  return (
    <div className={` w-[102rem] h-96 my-10 duration-300  ${isOpen ? "ml-[22rem] w-[92rem]" : "ml-40"} bg-gradient-to-r from-purple to-pinkBorder rounded-2xl pl-20`}>
        <div className="flex justify-between items-center h-full relative">
          <div className="font-font3 text-8xl text-white w-3/4">
            <h1>Find your perfect</h1>
            <h1>3d model</h1>            
          </div>
          <div className="absolute transform -translate-x-[8rem] translate-y-[2rem]">
            <img src="src\assets\img\cloud2.gif" alt="rocket animation"/>
          </div>
          <div className={`absolute duration-300 ${isOpen ? "translate-x-[70rem] -translate-y-[10rem]" : "translate-x-[80rem] -translate-y-[10rem] "}`}>
            <img src="src\assets\img\cloud.gif" alt="cloud animation" />
          </div>
          <div className="absolute transform translate-x-[60rem] translate-y-[5.5rem]">
            <img src="src\assets\img\rocketship.gif" alt="rocket animation" />
          </div>
        </div>    
    </div>  
  )
}

export default Header