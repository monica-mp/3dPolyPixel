import { useMenu } from "../../context/menuContext"
import { useElements } from "../../context/context"
const Models = () => {
    const {isOpen} = useMenu()
    const { models } = useElements();

  return (
    <div className={`w-[102rem] justify-between font-font2 duration-300 ${isOpen ? "ml-[22rem] w-[92rem]" : "ml-40"}`}>        
        <ul className="flex flex-wrap gap-8 justify-between">
            {models.map(model => (
                <li key={`${model.uid}`}>
                <div className="w-96 mb-16 h-[24rem] shadow-xl p-6 rounded-xl bg-blackBackground hover:bg-black">
                {model.thumbnails.images.length > 0 && (
                    <img src={model.thumbnails.images[0].url} alt="model thumbnail" className="w-80 h-60 rounded-xl mx-auto mb-4" />
                    )}
                    <div className="flex items-center p-4 ">
                        <div className="text-white flex flex-col gap-2">
                            <h3 className="text-xl">{model.name}</h3>
                            <p>{model.user.displayName}</p>  
                        </div>
                        <div className="text-lightPink ml-auto flex flex-col gap-2">
                            <p className="flex gap-2"><img src="src\assets\img\eye.png" alt="eye icon" className="w-6"/>{model.viewCount}</p>
                            <p className="flex gap-2"><img src="src\assets\img\heart.png" alt="heart icon" className="w-6"/>{model.viewCount}</p>                            
                        </div>                        
                    </div>                
                </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Models