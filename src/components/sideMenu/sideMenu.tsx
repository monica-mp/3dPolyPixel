
import { useAuth } from "../../context/authContext";
import { useMenu } from "../../context/menuContext";
import { To, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SideMenu = () => {
  const { logout, loading } = useAuth();
  const { isOpen, toggleMenu } = useMenu();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const Menus = [
    { title: "Models", src: "animadoW", route: "/models" },
    { title: "Environments", src: "spaceW", route: "/environments" },
    { title: "Likes", src: "likeW", gap: true, route: "/likes" },
    { title: "MyProjects", src: "maletaW", route: "/my-projects" },
    { title: "Settings", src: "settingsW", gap: true, route: "/settings" },
  ];

  const handleMenuClick = (route: To) => {
    navigate(route);
  };

  return (
    <div className="flex fixed z-[20]">
      <div
        className={`${
          isOpen ? "w-72 pl-5 md:w-60 bg-opacity-90" : "xl:w-16 w-10 pl-1 xl:pl-3"
        } duration-300 h-screen pt-6 bg-blackBackground relative `}
      >
        <img
          src="public\assets\img\arrowW.png"
          alt="arrow icon"
          className={`absolute cursor-pointer -right-3 top-[4rem] w-6 border-2 border-white rounded-full p-1 ${
            !isOpen && "rotate-180"
          }`}
          onClick={toggleMenu}
        />
        <Link to="/">
        <div className="flex items-center gap-4">
          <img
            src="public\assets\img\logo.png"
            alt="logo icon"
            className={`cursor-pointer duration-500 ${
              isOpen && "rotate-[360deg]"
            } ${isOpen ? "w-16" : "w-6"}`}
          />
          <h1
            className={`text-white font-font2 origin-left text-xl  duration-300 ${
              !isOpen && "scale-0"
            }`}
          >
            3dPolyPixel
          </h1>
        </div>
        </Link>
        <ul className="pt-10">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-white font-font2 flex items-center gap-4 cursor-pointer p-2 rounded-xl hover:bg-black ${
                menu.gap ? "mt-16" : "mt-2 "
              }`}
              onClick={() => handleMenuClick(menu.route)}
            >
              <img src={`public/assets/img/${menu.src}.png`} className="w-6" />
              <span className={`${!isOpen && "hidden"} origin-left duration-300 `}>
                {menu.title}
              </span>              
            </li>
          ))}
        </ul>        
        <div className={`pl-1 font-font2 text-lightPurple duration-300 ${isOpen ? "mt-[6rem] lg:mt-[3rem] xl:mt-[10rem]" :" mt-48 lg:mt-[6rem] xl:mt-[14rem]"} `}>
          <Link to="/">
          <button onClick={handleLogout} className="flex items-center">
            <img src="public\assets\img\logoutP.png" alt="logout icon" className="w-10 pr-2" />
            <span className={`${!isOpen && "hidden"} origin-left duration-300`}>Logout</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
