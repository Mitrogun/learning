// import { Comment } from "../store/commentsSlice"
// import CommentContent from "./comment-content"
// import { CommentHeader } from "./comment-header"
// import CommentReplyingTo from "./comment-replying-to"
// import CommentScore from "./comment-score"

interface Props {
    //comment: Comment
    header?: React.ReactNode
    content?: React.ReactNode
    actions?: React.ReactNode
    replies?: React.ReactNode
}

// the commented code is from an older version of the app that i want to discuss about, thats why i still have it.


export function CommentComponent({ header, actions, content, replies }: Props) {
    return (
        <div style={{ width: 'auto', border: '2px solid black', borderRadius: '5px', margin: '1em' }}>
            <div>
                {header}
            </div>
            <div>
                {content}
            </div>
            <div>
                {actions}
            </div>
            <div>
                {replies}
            </div>
        </div>
    )
}



    // <div key={comment.id} style={{ width: 'auto', border: '2px solid black', borderRadius: '5px', margin: '1em' }}>
    //     <CommentHeader comment={comment} />
    //     <CommentContent content={comment.content} />
    //     <CommentScore initialScore={comment.score} />
    //     {
    //         comment.replyingTo && <CommentReplyingTo replyingTo={comment.replyingTo} />
    //     }
    //     {
    //         comment.replies &&
    //         comment.replies.map((reply) => (
    //             <CommentComponent comment={reply} />
    //         ))
    //     }
    // </div>
