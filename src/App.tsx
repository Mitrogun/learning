import './App.css'
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { Comment } from './store/commentsSlice';
import { CommentComponent } from './components/comment-component';
import { CommentHeader } from './components/comment-header';
import CommentContent from './components/comment-content';
import CommentScore from './components/comment-score';

function App() {

  const comments = useSelector((state: RootState) => state.comments.comments);

  return (

    <div>
      {comments.map((comment: Comment) => (
        <CommentComponent comment={comment} />
        //     header={<CommentHeader comment={comment} />}
        //     content={<CommentContent content={comment.content} />}
        //     actions={<CommentScore initialScore={comment.score} />}
        //     replies={
        //       comment.replies &&
        //       comment.replies.map((reply) => (
        //         <CommentComponent header={<CommentHeader comment={reply} />}
        //           content={<CommentContent content={reply.content} />}
        //           actions={<CommentScore initialScore={reply.score}
        //           />}
        //            replies={}
        //         />
        //       ))
        //     }
        //   />
      ))}
    </div>

  );
}

export default App
