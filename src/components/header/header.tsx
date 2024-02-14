import { useMenu } from "../../context/menuContext"

const Header = () => {
    const {isOpen} = useMenu();
  return (
    <div className={`absolute w-[102rem] h-96 mt-32 duration-300  ${isOpen ? "ml-96 w-[88rem]" : "ml-40"}`}>
        <img src="src\assets\img\background.jpg" alt="gradient background" className="w-full h-full  rounded-xl"/>        
        <div className="font-font3 text-6xl relative transform translate -top-60 left-32 text-white">
            <h1>Find your perfect</h1>
            <h1>3d model</h1>
        </div>       
    </div>  
  )
}

export default Header