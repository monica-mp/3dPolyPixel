export interface Model {
    uid: string;
    name: string;
    user: {
        displayName: string;
        username: string;
        uid: string;
        avatar: {
            images: {
                url: string;
            }[];
        }
    };
    thumbnails: {
        images: {
            url: string;
        }[];
    };
    embedUrl: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    vertexCount: number;
    faceCount: number;
    isDownloadable: boolean;
    tags: Tag[];
    publishedAt: Date;
    comments: Comment[]; 
    collection: Collection[];
}

interface Comment {
    id: string;
    text: string;
    user: {
        displayName: string;
        username: string;
        uid: string;
        avatar: {
            images: {
                url: string;
            }[];
        }
    };
    createdAt: Date;
}


interface Tag {
    slug: string;
    uri: string;
}

interface Collection {
    id: string;
    name: string;
    thumbnails: {
        images: {
            url: string;
        }
    }
}

