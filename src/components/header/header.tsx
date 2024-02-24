import { useMenu } from "../../context/menuContext"

const Header = () => {
  const { isOpen } = useMenu();
  return (
    <div className={`h-64 my-8 duration-300   ${isOpen ? "2xl:ml-72 md:ml-64 lg:ml-72 w-11/12 md:w-7/12 lg:w-8/12 2xl:w-10/12" : "2xl:ml-32 xl:ml-20 ml-[4rem] w-9/12 md:w-11/12"} bg-gradient-to-r from-purple to-pinkBorder rounded-2xl pl-20`}>
      <div className="flex items-center h-full relative ml-[-1rem]">
        <div className="font-font3 text-4xl lg:text-5xl xl:text-6xl text-whiteText">
          <h1>Find your perfect</h1>
          <h1>3d model</h1>
        </div>
        <div className={`absolute translate-y-[2rem] ${isOpen ? "-translate-x-[4rem] " : "-translate-x-[6rem]"}`}>
          <img src="\assets\img\cloud2.gif" alt="rocket animation" className="w-32 xl:w-48" />
        </div>
        <div className={`absolute duration-300 -translate-y-[8rem] md:-translate-y-[6rem] md:translate-x-[16rem]  ${isOpen ? "translate-x-[8rem] lg:translate-x-[30rem] xl:translate-x-[36rem] 2xl:translate-x-[60rem]" : "translate-x-[6rem] lg:translate-x-[43rem] xl:translate-x-[48rem]"} `}>
          <img src="\assets\img\cloud.gif" alt="cloud animation" className="w-32 xl:w-48" />
        </div>
        <div className={`absolute translate-x-[0rem] md:translate-x-[4rem] xl:translate-y-[2.5rem] ${isOpen ? "translate-y-[4rem] md:translate-y-[3.5rem] lg:translate-x-[20rem] xl:translate-x-[20rem]" : "translate-y-[4.5rem] md:translate-y-[3.5rem] lg:translate-x-[32rem] xl:translate-x-[30rem] xl:translate-x-[45rem]"}`}>
          <img src="\assets\img\rocketship.gif" alt="rocket animation" className="w-80 xl:w-96" />
        </div>
      </div>
    </div>
  )
}

export default Header