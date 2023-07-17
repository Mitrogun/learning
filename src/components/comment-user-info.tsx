import { Comment } from "../store/commentsSlice"

interface Props {
    user: Comment['user']
}

export default function CommentUserInfo({ user }: Props) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} >
            <img src={user.image.png} alt="userimage" width='20px' height='20px' style={{ borderRadius: '10px' }} />
            <p> {user.username}</p>
        </div>
    )
}
