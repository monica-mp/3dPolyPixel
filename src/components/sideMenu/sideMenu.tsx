
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
    <div className="flex fixed">
      <div
        className={`${
          isOpen ? "w-72" : "w-20"
        } duration-300 h-screen px-5 pt-6 bg-blackBackground relative `}
      >
        <img
          src="src\assets\img\arrowW.png"
          alt="arrow icon"
          className={`absolute cursor-pointer -right-3 top-8 w-6 border-2 border-white rounded-full p-1 ${
            !isOpen && "rotate-180"
          }`}
          onClick={toggleMenu}
        />
        <Link to="/">
        <div className="flex items-center gap-4">
          <img
            src="src\assets\img\logo.png"
            alt="logo icon"
            className={`cursor-pointer duration-500 ${
              isOpen && "rotate-[360deg]"
            } ${isOpen ? "w-16" : "w-10"}`}
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
              <img src={`src/assets/img/${menu.src}.png`} className="w-6" />
              <span className={`${!isOpen && "hidden"} origin-left duration-300 `}>
                {menu.title}
              </span>              
            </li>
          ))}
        </ul>        
        <div className="absolute bottom-20 left-6 font-font2 text-lightPurple">
          <Link to="/">
          <button onClick={handleLogout} className="flex items-center">
            <img src="src\assets\img\logoutP.png" alt="logout icon" className="w-10 pr-2" />
            <span className={`${!isOpen && "hidden"} origin-left duration-300`}>Logout</span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
