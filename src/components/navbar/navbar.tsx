
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-3/4 ms-auto font-font2">
        <input type="text" className="w-2/3 h-10 rounded-full pl-4 bg-blackBackground2" placeholder="Search any model..."/>
        <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-1 items-center">
                <img src="src\assets\img\moonW.png" alt="moon" className="w-6 h-6"/>
                <input type="checkbox" className="toggle"/>
                <img src="src\assets\img\sun.png" alt="sun" className="w-6 h-6"/>
            </div>
            <div className="indicator">
                <span className="indicator-item badge bg-lightPink text-white font-font2">2</span> 
                <button className="w-10 bg-blackBackground2 p-2 rounded-full hover:bg-black ml-10"><img src="src\assets\img\campanaW.png" alt="bell" /></button>
            </div>
            <div className="dropdown dropdown-end">                
                <div tabIndex={0} role="button" className="btn m-1 rounded-full bg-blackBackground2 hover:bg-black">
                <img src="src\assets\img\avatar.jpg" alt="avatar"  className="w-8 h-8 rounded-full"/>User</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blackBackground2 rounded-box w-26">
                    <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                </ul>
            </div>

        </div>
        
    </div>
  )
}

export default Navbar