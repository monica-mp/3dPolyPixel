
import { MenuProvider } from "../context/menuContext";
import SideMenu from "../components/sideMenu/sideMenu";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import FilterButtons from "../components/filterButtons/filterButtons";

const ExploreModels = () => {
  return (
    <MenuProvider>
      <div className="bg-gray h-screen w-screen relative">
        <Navbar />
        <SideMenu />
        <Header/>
        <FilterButtons />
      </div>
    </MenuProvider>
  );
};

export default ExploreModels;