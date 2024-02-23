import { useMenu } from "../../context/menuContext"
import { useElements } from "../../context/mainContext"
import ModelDetails from "../modelDetails/modelDetails"

const Models = () => {
    const {isOpen} = useMenu()
    const { models, selectedModel, handleClick } = useElements();
    

    return (
        <div className={` font-font2 duration-300  ${isOpen ? "xl:ml-[19rem] xl:w-[60rem] w-[22rem]" : "xl:ml-28 md:w-[68rem] ml-[3rem] w-[20rem]  "}`}>
            {selectedModel && <ModelDetails />} 
            <ul className="flex flex-wrap gap-4 justify-between w-4/5">
                {models.map(model => (
                    <li key={`${model.uid}`}>
                        <div className="hover:border-2 hover:border-lightPink md:w-48 md:h-5/6 mb-16  shadow-xl p-6 rounded-xl bg-blackBackground hover:bg-black" onClick={() => handleClick(model)}>
                            {model.thumbnails.images.length > 0 && (
                                <img src={model.thumbnails.images[1].url} alt="model thumbnail" className="h-56  rounded-xl mx-auto mb-6" />
                            )}
                            <div className="flex items-center">
                                <div className="text-white flex flex-col gap-2">
                                    <h3 className="text-xl">{model.name}</h3>
                                    <p>{model.user.displayName}</p>
                                </div>
                                <div className="text-lightPink ml-auto flex flex-col gap-2">
                                    <p className="flex gap-2"><img src="src\assets\img\eye.png" alt="eye icon" className="w-6" />{model.viewCount}</p>
                                    <p className="flex gap-2"><img src="src\assets\img\heart.png" alt="heart icon" className="w-6" />{model.viewCount}</p>
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