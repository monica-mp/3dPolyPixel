
import { MenuProvider } from "../context/menuContext";
import { ContextProvider } from "../context/mainContext";
import SideMenu from "../components/sideMenu/sideMenu";
import Navbar from "../components/navbar/navbar";
import Header from "../components/header/header";
import FilterButtons from "../components/filterButtons/filterButtons";
import Models from "../components/3dmodels/models";
import ScrollButton from "../components/scrollButton/scrollButton";


const ExploreModels = () => {
  return (
    <div className="bg-gray">
      <MenuProvider>
        <SideMenu />
        <Navbar />
        <Header />
        <FilterButtons />
        <ContextProvider>
          <Models />
        </ContextProvider>
      </MenuProvider>
      <ScrollButton />
    </div>

  );
};

export default ExploreModels;