import { useMenu } from "../../context/menuContext"
import { useElements } from "../../context/mainContext"
import ModelDetails from "../modelDetails/modelDetails"

const Models = () => {
    const {isOpen} = useMenu()
    const { models, selectedModel, handleClick } = useElements();
    

    return (
        <div className={`relative font-font2 duration-300 ${isOpen ? "2xl:w-[100rem] lg:ml-[16rem] xl:w-[62rem] lg:w-[45rem] md:w-[42rem] w-[20rem] mx-auto" : "2xl:w-[108rem] xl:ml-24 md:w-[42rem] lg:w-[57rem] xl:w-[72rem] 2xl:w-[94rem] lg:ml-[4rem] ml-[4rem] w-[18rem] "}`}>
            {selectedModel && <ModelDetails />} 
            <ul className="flex flex-wrap gap-10 justify-between">
                {models.map(model => (
                    <li key={`${model.uid}`}>
                        <div className={`hover:border-2 hover:border-lightPink shadow-xl rounded-xl bg-blackBackground hover:bg-black lg:p-3 lg:h-62 p-4 ${isOpen ? " xl:w-[18rem] xl:p-6 lg:w-[13rem] md:w-48 md:p-2" : "xl:w-60 lg:w-[16rem] md:w-48 md:p-2"} `} onClick={() => handleClick(model)}>
                            {model.thumbnails.images.length > 0 && (
                                <img src={model.thumbnails.images[2].url} alt="model thumbnail" className="xl:h-40 lg:h-[9rem] rounded-xl mx-auto mb-6" />
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