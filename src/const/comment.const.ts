<<<<<<< HEAD
export interface Comment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
        image: {
            png: string;
            webp: string;
        };
        username: string;
    };
    replyingTo?: string;
    replies?: Comment[];
}
=======
export interface Comment {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
        image: {
            png: string;
            webp: string;
        };
        username: string;
    };
    replyingTo?: string;
    replies?: Comment[];
}
>>>>>>> 0d1dabf (tranformed to composed componenents)
