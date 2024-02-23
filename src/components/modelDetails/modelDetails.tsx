import { useEffect, useState } from "react";
import { useElements } from "../../context/mainContext";
import { useMenu } from "../../context/menuContext";
const ModelDetails = () => {
    const { selectedModel, handleClose, getRandomNumber, getRandomYesOrNo } = useElements();
    const { isOpen } = useMenu();
    const [comments, setComments] = useState([]);
    const [userCollections, setUserCollections] = useState([]);

    // Función para cargar las colecciones del usuario
    const loadUserCollections = async () => {
        if (selectedModel && selectedModel.user) {
            try {
                const response = await fetch(`https://api.sketchfab.com/v3/collections?user=${selectedModel.user.username}`);
                if (response.ok) {
                    const data = await response.json();
                    setUserCollections(data.results);
                } else {
                    throw new Error('Failed to fetch user collections');
                }
            } catch (error) {
                console.error('Error fetching user collections:', error);
            }
        }
    };
    // Función para cargar los comentarios del modelo seleccionado
    const loadComments = async () => {
        if (selectedModel) {
            try {
                const response = await fetch(`https://api.sketchfab.com/v3/comments?model=${selectedModel.uid}`);
                if (response.ok) {
                    const data = await response.json();
                    setComments(data.results);
                } else {
                    throw new Error('Failed to fetch comments');
                }
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        }
    };
    useEffect(() => {
        loadComments();
        loadUserCollections();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedModel]);

    return (
        <div className={`text-whiteText fixed xl:top-[2rem] bg-blackBackground w-[92rem] h-[54rem] border-2 border-lightPink flex flex-col shadow-xl rounded-xl p-6 z-10 duration-300 ${isOpen ? "xl:left-[22rem]" : "xl:left-[8rem] "}	`}>
            <div className="overflow-auto px-4 flex flex-col gap-4" id="custom-scroll">
                <button className="btn btn-sm bg-gray absolute top-4 right-10 text-white border-lightPink hover:text-black hover:bg-lightPink rounded-full" onClick={handleClose}>X</button>
                <div className="flex gap-8">
                    <iframe
                        title={selectedModel!.name}
                        src={selectedModel!.embedUrl}
                        width="1000"
                        height="600"
                        allowFullScreen
                    />
                    <div className="flex flex-col justify-between mt-6">
                        <div className="flex flex-col gap-4">
                            <h1 className="uppercase text-3xl text-rosaClar">{selectedModel!.name}</h1>
                            <div className="flex gap-6">
                                <div className="flex gap-1 text-lightPink"><img src="src\assets\img\eye.png" className="w-6 h-6" />{selectedModel!.viewCount}</div>
                                <div className="flex gap-1 text-lightPink"><img src="src\assets\img\heart.png" className="w-6" />{selectedModel!.likeCount}</div>
                                <div className="flex gap-1 text-lightPink"><img src="src\assets\img\comments.png" className="w-6" />{selectedModel!.commentCount}</div>
                            </div>
                        </div>
                        <div className="border-2 border-lightPurple flex  w-72 bg-black bg-opacity-40 py-2 pr-4 pl-2 rounded-xl justify-between items-center">
                            <div className="flex gap-2">
                                <div>
                                    <img
                                        src={selectedModel!.user.avatar.images[1].url}
                                        alt="User Avatar"
                                        className="w-16 h-16 rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p>{selectedModel!.user.username.length > 10 ? selectedModel!.user.username.slice(0, 10) + '...' : selectedModel!.user.username}</p>
                                    <p className="text-xs">{selectedModel!.user.displayName.length > 10 ? selectedModel!.user.displayName.slice(0, 10) + '...' : selectedModel!.user.displayName}</p>
                                </div>
                            </div>
                            <button className="btn btn-sm text-whiteText bg-gray border-lightPink hover:text-black hover:bg-lightPink rounded-full">Follow</button>
                        </div>
                        <div className="w-72 p-4 rounded-xl flex flex-col gap-2  border-2 border-gray shadow-xl bg-black bg-opacity-40">
                            <h2 className="text-xl mb-4 text-lightPink" >DETAILS</h2>
                            <p>Vertex count: {selectedModel!.vertexCount}</p>
                            <p>Face count: {selectedModel!.faceCount}</p>
                            <p>Material count: {getRandomNumber()}</p>
                            <p>Texture count: {getRandomNumber()}</p>
                            <p>UVMap: {getRandomYesOrNo()}</p>
                            <p>Rigged: {getRandomYesOrNo()}</p>
                            <p>Animated: {getRandomYesOrNo()}</p>
                            <p>{selectedModel!.isDownloadable ? "Downloadable" : "Not Downloadable"}</p>
                        </div>

                    </div>
                </div>
                <div className="text-xs">PublishedAt: {selectedModel!.publishedAt.toLocaleString()}</div>
                <div className="flex gap-2 items-center">
                    <img src="src\assets\img\tag.png" alt="tag icon" className="w-4 h-4" />
                    <ul className="flex gap-2">
                        {selectedModel!.tags.map(tag => (
                            <li key={tag.slug} className="bg-gray border-2 border-borderWhite rounded-full px-2 text-xs ">{tag.slug}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    {userCollections.length > 0 && (
                        <div className="flex flex-col gap-2 p-2 mt-10 border-2 border-gray bg-black bg-opacity-40 rounded-xl">
                            <h2 className="text-xl ml-2 mb-4 text-lightPink">OTHER COLLECTIONS OF {selectedModel!.user.username.toLocaleUpperCase()} </h2>
                            <div className="flex flex-wrap  gap-4 justify-start">
                                {userCollections.map((collection: { id: string, name: string, thumbnails: { images: { url: string }[] } }) => (
                                    <div key={collection.id} className="flex flex-col gap-1 items-center px-2 py-2">
                                        <img src={collection.thumbnails.images[2].url} alt={`Collection Thumbnail`} className="rounded-md w-72 h-52 border-2 border-borderWhite" />
                                        <p className="mr-auto">{collection.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {comments.length > 0 && (
                        <div className="border-2 border-gray bg-black bg-opacity-40 p-4 mt-10 rounded-xl flex flex-col gap-4">
                            <h2 className="text-xl text-lightPink">COMMENTS</h2>
                            {comments.map((comment: { user: { avatar: { images: { url: string }[] }, displayName: string }, body: string, createdAt: string }) => (

                                <div className="flex gap-4">
                                    <img src={comment.user.avatar.images[1].url} alt="User Avatar" className="w-16 h-16 rounded-md" />
                                    <div className="flex flex-col my-auto">
                                        <div>{comment.user.displayName}</div>
                                        <div>{comment.body}</div>
                                        <div>{new Date(comment.createdAt).toLocaleString()}</div>
                                        <span className="w-[70rem] h-[1px] bg-lightPurple rounded-sm my-6"></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>



            </div>
        </div>
    );
};

export default ModelDetails;