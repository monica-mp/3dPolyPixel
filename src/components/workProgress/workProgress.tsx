
import { Link } from "react-router-dom"
const workProgress = () => {
    return (
        <div className="font-font2 flex flex-col  gap-4 justify-center my-auto items-center w-full h-screen bg-blackBackground">
            <h1 className="text-3xl text-whiteText" >This page is under construction</h1>
            <span className="loading loading-dots loading-lg"></span>
            <Link to="/models">
                <button className="btn btn-sm text-whiteText bg-gray border-lightPink hover:text-black hover:bg-lightPink rounded-full">Go back</button>
            </Link>
           
        </div>

    )
}

export default workProgress