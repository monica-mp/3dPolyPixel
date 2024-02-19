
import { useMenu } from "../../context/menuContext";
const Navbar = () => {
    const { isOpen } = useMenu();
  

  return (
    <div className={`flex z-10 sticky top-2 justify-between items-center font-font2 py-2 px-6 font-font2  ${isOpen ? "ml-[20rem] w-[96rem]" : "ml-28 w-[110rem]"} duration-300 bg-blackBackground rounded-full`}>
        <input type="text" className="w-5/6 h-10 rounded-full pl-10 bg-gray focus:outline-none focus:ring focus:ring-lightPink hover:outline-none hover:ring hover:ring-lightPink" placeholder="Search any model..." />
        <div className="flex gap-2 items-center  w-3/4 justify-end">
            <div className="flex gap-1">
                <img src="src\assets\img\sun.png" alt="moon" className="w-6 h-6"/>
                <input type="checkbox" className="toggle border-lightPink bg-lightPink hover:bg-lightPurple"/>
                <img src="src\assets\img\moonW.png" alt="sun" className="w-6 h-6"/>
            </div>
            <div className="ml-20 flex items-center"> 
                <div className="indicator border-2 border-lightPink rounded-full mr-2 hover:border-rosaClar">
                    <span className="indicator-item badge bg-lightPink text-white font-font2">2</span> 
                    <button className="w-10 h-10 bg-blackBackground2 p-2 rounded-full hover:bg-black "><img src="src\assets\img\campanaW.png" alt="bell" /></button>
                </div>
                <div className="dropdown dropdown-end">                
                    <div tabIndex={0} role="button" className="btn m-1 border-2 border-lightPink rounded-full bg-blackBackground hover:bg-black hover:border-rosaClar">
                        <img src="src\assets\img\avatar.jpg" alt="avatar"  className="w-8 h-8 rounded-full"/>
                        <p className="text-white text-base">User</p>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blackBackground rounded-box w-26 mt-1 text-white">
                        <li><a>Profile</a></li>
                        <li><a>Settings</a></li>
                    </ul>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Navbar