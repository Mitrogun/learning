import { useState } from "react"

interface Props {
    initialScore: number
}

export default function CommentScore({ initialScore }: Props) {

    const [score, setScore] = useState(initialScore)

    return (
        <div style={{ margin: '1em' }}>
            <label>
                Score:
            </label>
            <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />
        </div>
    )
}
