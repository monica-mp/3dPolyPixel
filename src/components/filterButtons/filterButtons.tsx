import { useMenu } from "../../context/menuContext"

const FilterButtons = () => {
    const {isOpen} = useMenu();
  return (
    <div className={`flex mb-6 justify-between  font-font2 duration-300  ${isOpen ? "2xl:w-[100rem] xl:w-[62rem] lg:ml-[16rem] md:w-[45rem] lg:w-[45rem] w-[20rem] mx-auto" : "2xl:w-[108rem] xl:ml-20 md:w-[42rem] lg:w-[58rem] xl:w-[74rem] 2xl:w-[94rem] ml-[4rem] w-[18rem]"}`}>
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black ">
          <img src="\assets\img\trending.png" alt="trending icon" className="w-4 lg:w-8" />
          <p className="hidden md:block">Trending</p>
        </button>   
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\art.png" alt="art icon" className="w-4 lg:w-8" />
          <p className="hidden md:block">Art</p>
        </button> 
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\food.png" alt="food icon" className="w-4 lg:w-8" />
          <p className="hidden md:block">Food</p>
        </button> 
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\music.png" alt="music icon" className="w-4 lg:w-8" />
          <p className="hidden md:block">Music</p>
        </button> 
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\car.png" alt="cars icon" className="w-4 lg:w-8" />
          <p className="hidden md:block">Cars</p>
        </button>    
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\sports.png" alt="sports icon" className="w-4 lg:w-8" />
          <p className="hidden md:block">Sports</p>
        </button>                   
    </div>  
  )
}

export default FilterButtons