import { Link } from "react-router-dom";
import { type IPost } from "../models";
import dateFormat from "../utils/dateFormat";

export default function ({ postData }: { postData: IPost }) {
  return (
    <div className="post-card">
      <div className="post-card_header">
        <img className="post-card_avatar" src="/ava.jpg" alt="author's avatar" />
        <div className="post-card_authors-data">
          <div className="post-card_author">Автор</div>
          <span className="post-card_role">Основатель группы</span>
          <span className="post-card_created">{dateFormat(postData.created)}</span>
        </div>
      </div>
      <div className="post-card_content">
        <Link to={`/posts/${postData.id}`} key={postData.id}>{postData.content}</Link>
      </div>
      <div className="post-card_actions">
        <button className="post-card_like-btn">Нравится</button>
        <button className="post-card_comment-btn">Комментировать</button>
      </div>
      <div className="post-card_write-comment">
        <img className="write-comment_avatar" src="/ava.jpg" alt="your avatar" />
        <input
          className="write-comment_input-text"
          type="text" 
          placeholder="Напишите комментарий"
        />
      </div>
    </div>
  );
}