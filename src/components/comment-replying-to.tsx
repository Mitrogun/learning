interface Props {
    replyingTo: string
}

export default function CommentReplyingTo({ replyingTo }: Props) {
    return (
        <div style={{ color: 'blue' }}>
            @ {replyingTo}
        </div>
    )
}
