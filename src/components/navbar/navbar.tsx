
import { useMenu } from "../../context/menuContext";
const Navbar = () => {
    const { isOpen } = useMenu();
  

  return (
    <div className="flex justify-between items-center w-full ms-auto font-font2 absolute pt-4 font-font2 pr-10">
        <input type="text" className={`w-5/6 h-10 rounded-full pl-4 bg-blackBackground focus:outline-none focus:ring focus:ring-lightPurple duration-300 ${isOpen ? "ml-80" : "ml-40"}`} placeholder="Search any model..." />
        <div className="flex gap-2 items-center  w-3/4 justify-end">
            <div className="flex gap-1">
                <img src="src\assets\img\sun.png" alt="moon" className="w-6 h-6"/>
                <input type="checkbox" className="toggle border-lightPink bg-lightPink hover:bg-lightPurple"/>
                <img src="src\assets\img\moonW.png" alt="sun" className="w-6 h-6"/>
            </div>
            <div className="ml-20 flex items-center"> 
                <div className="indicator border-2 border-rosaClar rounded-full mr-2">
                    <span className="indicator-item badge bg-lightPink text-white font-font2">2</span> 
                    <button className="w-10 h-10 bg-blackBackground2 p-2 rounded-full hover:bg-black"><img src="src\assets\img\campanaW.png" alt="bell" /></button>
                </div>
                <div className="dropdown dropdown-end">                
                    <div tabIndex={0} role="button" className="btn m-1 border-2 border-rosaClar rounded-full bg-blackBackground hover:bg-black ">
                        <img src="src\assets\img\avatar.jpg" alt="avatar"  className="w-8 h-8 rounded-full"/>
                        <p className="text-white text-base">User</p>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blackBackground rounded-box w-26 mt-1">
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