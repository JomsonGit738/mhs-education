import type { Comment } from '../data/content';
import { images } from '../data/images';

type CommentTreeProps = {
  comments: Comment[];
};

const CommentItem = ({ comment }: { comment: Comment }) => (
  <li className="comment">
    <div className="vcard bio">
      <img src={images.teacher1} alt="Comment author" />
    </div>
    <div className="comment-body">
      <h3>{comment.author}</h3>
      <div className="meta mb-2">{comment.date}</div>
      <p>{comment.text}</p>
      <p>
        <a href="#" className="reply">
          Reply
        </a>
      </p>
    </div>
    {comment.replies && comment.replies.length > 0 && (
      <ul className="children">
        {comment.replies.map((child) => (
          <CommentItem key={child.id} comment={child} />
        ))}
      </ul>
    )}
  </li>
);

export const CommentTree = ({ comments }: CommentTreeProps) => (
  <ul className="comment-list">
    {comments.map((comment) => (
      <CommentItem key={comment.id} comment={comment} />
    ))}
  </ul>
);
