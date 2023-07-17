// commentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

interface CommentsState {
    comments: Comment[];
}

const initialState: CommentsState = {
    comments: [
        {
            id: 1,
            content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            createdAt: "1 month ago",
            score: 12,
            user: {
                image: {
                    png: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    webp: "./images/avatars/image-amyrobson.webp"
                },
                username: "amyrobson"
            },
            replies: []
        },
        {
            id: 2,
            content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            createdAt: "2 weeks ago",
            score: 5,
            user: {
                image: {
                    png: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                    webp: "./images/avatars/image-maxblagun.webp"
                },
                username: "maxblagun"
            },
            replies: [
                {
                    id: 3,
                    content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    createdAt: "1 week ago",
                    score: 4,
                    replyingTo: "maxblagun",
                    user: {
                        image: {
                            png: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80",
                            webp: "./images/avatars/image-ramsesmiron.webp"
                        },
                        username: "ramsesmiron"
                    }
                },
                {
                    id: 4,
                    content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    createdAt: "2 days ago",
                    score: 2,
                    replyingTo: "ramsesmiron",
                    user: {
                        image: {
                            png: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
                            webp: "./images/avatars/image-juliusomo.webp"
                        },
                        username: "juliusomo"
                    }
                }
            ]
        }

    ]
}


const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<Comment[]>) => {
            state.comments = action.payload;
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.comments.push(action.payload);
        },
    },
});

export const { setComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
