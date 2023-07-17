import { Comment } from "../store/commentsSlice"

import CommentUserInfo from "./comment-user-info"

interface Props {
    comment: Comment
}

export const CommentHeader = ({ comment }: Props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <CommentUserInfo user={comment.user} />
            <p> {comment.createdAt} </p>
        </div>
    )
}