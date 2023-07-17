import { Comment } from "../store/commentsSlice"
import CommentContent from "./comment-content"
import { CommentHeader } from "./comment-header"
import CommentReplyingTo from "./comment-replying-to"
import CommentScore from "./comment-score"

interface Props {
    comment: Comment
    header?: React.ReactNode
    content?: React.ReactNode
    actions?: React.ReactNode
    replies?: React.ReactNode
}


export function CommentComponent({ comment }: Props) {
    return (
        // <div style={{ width: 'auto', border: '2px solid black', borderRadius: '5px', margin: '1em' }}>
        //     <div>
        //         {header}
        //     </div>
        //     <div>
        //         {content}
        //     </div>
        //     <div>
        //         {actions}
        //     </div>
        //     <div>
        //         {replies}
        //     </div>
        // </div>
        <div key={comment.id} style={{ width: 'auto', border: '2px solid black', borderRadius: '5px', margin: '1em' }}>
            <CommentHeader comment={comment} />
            <CommentContent content={comment.content} />
            <CommentScore initialScore={comment.score} />
            {
                comment.replyingTo && <CommentReplyingTo replyingTo={comment.replyingTo} />
            }
            {
                comment.replies &&
                comment.replies.map((reply) => (
                    <CommentComponent comment={reply} />
                ))
            }
        </div>
    )
}


