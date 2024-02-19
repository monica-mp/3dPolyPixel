import { useMenu } from "../../context/menuContext"

const FilterButtons = () => {
    const {isOpen} = useMenu();
  return (
    <div className={`flex mb-20 justify-between w-[102rem] font-font2 duration-300 ${isOpen ? "ml-[22rem] w-[92rem]" : "ml-40"}`}>
        <button className="btn btn-lg bg-blackBackground flex rounded-full hover:bg-black">
          <img src="src\assets\img\trending.png" alt="trending icon" className="w-8" />
          Trending
        </button>   
        <button className="btn btn-lg bg-blackBackground w-44 flex rounded-full hover:bg-black">
          <img src="src\assets\img\art.png" alt="art icon" className="w-8" />
          Art
        </button> 
        <button className="btn btn-lg bg-blackBackground w-44 flex rounded-full hover:bg-black">
          <img src="src\assets\img\food.png" alt="food icon" className="w-8" />
          Food
        </button> 
        <button className="btn btn-lg bg-blackBackground w-44 flex rounded-full hover:bg-black">
          <img src="src\assets\img\music.png" alt="music icon" className="w-8" />
          Music
        </button> 
        <button className="btn btn-lg bg-blackBackground w-44 flex rounded-full hover:bg-black">
          <img src="src\assets\img\car.png" alt="cars icon" className="w-8" />
          Cars
        </button>    
        <button className="btn btn-lg bg-blackBackground w-44 flex rounded-full hover:bg-black">
          <img src="src\assets\img\sports.png" alt="sports icon" className="w-8" />
          Sports
        </button>                   
    </div>  
  )
}

export default FilterButtons