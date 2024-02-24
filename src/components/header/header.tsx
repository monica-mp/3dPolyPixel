import { useMenu } from "../../context/menuContext"

const Header = () => {
  const { isOpen } = useMenu();
  return (
    <div className={`h-64 my-8 duration-300  ${isOpen ? "2xl:w-[100rem] xl:w-[62rem] lg:ml-[16rem] lg:w-[45rem] md:w-[45rem] w-[20rem] mx-auto" : "2xl:w-[108rem] xl:ml-20 md:w-[42rem] lg:w-[58rem] xl:w-[74rem] 2xl:w-[94rem] ml-[4rem] w-[18rem]"} bg-gradient-to-r from-purple to-pinkBorder rounded-2xl pl-20`}>
      <div className="flex items-center h-full relative ml-[-1rem]">
        <div className="font-font3 text-4xl lg:text-5xl xl:text-6xl text-whiteText">
          <h1>Find your perfect</h1>
          <h1>3d model</h1>
        </div>
        <div className={`absolute translate-y-[2rem] ${isOpen ? "-translate-x-[4rem] " : "-translate-x-[6rem]"}`}>
          <img src="\assets\img\cloud2.gif" alt="rocket animation" className="w-32 xl:w-48" />
        </div>
        <div className={`absolute duration-300 -translate-y-[8rem] md:-translate-y-[6rem] md:translate-x-[30rem]  ${isOpen ? "translate-x-[8rem] lg:translate-x-[32rem] xl:translate-x-[45rem] 2xl:translate-x-[60rem]" : "translate-x-[6rem] lg:translate-x-[43rem] xl:translate-x-[55rem] 2xl:translate-x-[70rem]"} `}>
          <img src="\assets\img\cloud.gif" alt="cloud animation" className="w-32 xl:w-48" />
        </div>
        <div className={`absolute translate-x-[0rem] md:translate-x-[18rem] xl:translate-y-[2.5rem] ${isOpen ? "translate-y-[4rem] md:translate-y-[3.5rem] lg:translate-x-[20rem] xl:translate-x-[32rem]" : "translate-y-[4.5rem] md:translate-y-[3.5rem] lg:translate-x-[32rem] xl:translate-x-[45rem]"}`}>
          <img src="\assets\img\rocketship.gif" alt="rocket animation" className="w-80 xl:w-96" />
        </div>
      </div>
    </div>
  )
}

export default Header