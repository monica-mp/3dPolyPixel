import { useMenu } from "../../context/menuContext"
import { useElements } from "../../context/mainContext"
import ModelDetails from "../modelDetails/modelDetails"

const Models = () => {
    const {isOpen} = useMenu()
    const { models, selectedModel, handleClick } = useElements();
    

    return (
        <div className={`relative font-font2 duration-300  ${isOpen ? "2xl:ml-72 md:ml-64 lg:ml-72 w-11/12 md:w-7/12 lg:w-8/12 2xl:w-10/12" : "2xl:ml-32 xl:ml-20 ml-[4rem] w-9/12 md:w-11/12"}`}>
            {selectedModel && <ModelDetails />} 
            <ul className="flex flex-wrap gap-10 justify-between">
                {models.map(model => (
                    <li key={`${model.uid}`}>
                        <div className={`hover:border-2 hover:border-lightPink shadow-xl rounded-xl bg-blackBackground hover:bg-black lg:p-3 p-4 ${isOpen ? "2xl:w-[22rem] xl:w-[16rem] xl:p-6 lg:w-[12rem] md:w-48 md:p-2" : "2xl:w-[24rem] 2xl:p-6 xl:w-[16rem] xl:w-72 lg:w-[16rem] md:w-48 md:p-2"} `} onClick={() => handleClick(model)}>
                            {model.thumbnails.images.length > 0 && (
                                <img src={model.thumbnails.images[2].url} alt="model thumbnail" className="xl:w-96 xl:h-40 lg:h-[9rem] rounded-xl mx-auto mb-6" />
                            )}
                            <div className="flex items-center">
                                <div className="text-white flex flex-col gap-2">
                                    <h3>{model.name.length > 10 ? model.name.slice(0, 10) + '...' : model.name}</h3>
                                    <p>{model.user.displayName.length > 10 ? model.user.displayName.slice(0, 10) + '...' : model.user.displayName}</p>
                                </div>
                                <div className="text-lightPink ml-auto flex flex-col gap-2">
                                    <p className="flex gap-2"><img src="\assets\img\eye.png" alt="eye icon" className="w-6" />{model.viewCount}</p>
                                    <p className="flex gap-2"><img src="\assets\img\heart.png" alt="heart icon" className="w-6" />{model.viewCount}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Models;