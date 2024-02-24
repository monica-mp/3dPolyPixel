import { useMenu } from "../../context/menuContext"

const FilterButtons = () => {
    const {isOpen} = useMenu();
  return (
    <div className={`flex mb-6 justify-between  font-font2 duration-300   ${isOpen ? "2xl:ml-72 md:ml-64 lg:ml-72 w-11/12 md:w-7/12 lg:w-8/12 2xl:w-10/12" : "2xl:ml-32 xl:ml-20 ml-[4rem] w-9/12 md:w-11/12"}`}>
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black ">
          <img src="\assets\img\trending.png" alt="trending icon" className="w-4 lg:w-8" />
          <p className="hidden lg:block">Trending</p>
        </button>   
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\art.png" alt="art icon" className="w-4 lg:w-8" />
          <p className="hidden lg:block">Art</p>
        </button> 
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\food.png" alt="food icon" className="w-4 lg:w-8" />
          <p className="hidden lg:block">Food</p>
        </button> 
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\music.png" alt="music icon" className="w-4 lg:w-8" />
          <p className="hidden lg:block">Music</p>
        </button> 
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\car.png" alt="cars icon" className="w-4 lg:w-8" />
          <p className="hidden lg:block">Cars</p>
        </button>    
        <button className="btn btn-sm xl:btn-lg lg:btn-md bg-blackBackground flex rounded-full hover:bg-black">
          <img src="\assets\img\sports.png" alt="sports icon" className="w-4 lg:w-8" />
          <p className="hidden lg:block">Sports</p>
        </button>                   
    </div>  
  )
}

export default FilterButtons