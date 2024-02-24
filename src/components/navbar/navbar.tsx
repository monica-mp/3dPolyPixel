
import { useMenu } from "../../context/menuContext";
const Navbar = () => {
    const { isOpen } = useMenu();


    return (
        <div className={`flex z-[10] sticky top-2 justify-between items-center font-font2 py-2 px-4 font-font2  h-12 ${isOpen ? "2xl:w-[100rem] max-xl:w-[64rem] lg:ml-[16rem] lg:w-[45rem] md:w-[47rem] w-[20rem] mx-auto" : "2xl:w-[108rem] xl:ml-20 md:w-[44rem] lg:w-[58rem] xl:w-[74rem] 2xl:w-[94rem] ml-[4rem] w-[18rem]"} duration-300 bg-blackBackground rounded-full`}>
            <input type="text" className="small-placeholder w-5/6 h-8 rounded-full pl-2 bg-gray focus:outline-none focus:ring focus:ring-lightPink hover:outline-none hover:ring hover:ring-lightPink" placeholder="Search any model..." />
            <div className="flex gap-2 items-center  w-3/4 justify-end">
                <div>
                    <label className="swap swap-rotate items-center">
                        <input type="checkbox" className="theme-controller" value="synthwave" />
                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                        <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                    </label>
                </div>
                <div className="flex items-center" >
                    <div className="indicator border-2 border-lightPink rounded-full mr-2 hover:border-rosaClar">
                        <span className="indicator-item badge bg-lightPink text-white font-font2">2</span>
                        <button className="w-6 h-6 bg-blackBackground2 p-1 rounded-full hover:bg-black "><img src="\assets\img\campanaW.png" alt="bell" /></button>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="lg:py-1 md:px-4 rounded-full bg-gray flex gap-2 text-whiteText">
                            <img src="/assets/img/avatar.jpg" className="w-6 h-6 rounded-full"/>
                           <p className="hidden md:block">User</p>
                            </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-blackBackground rounded-box w-24">
                            <li><a>Profile</a></li>
                            <li><a>Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar