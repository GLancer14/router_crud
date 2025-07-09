import { useState, useEffect } from "react";
import { type IPost } from "../models";
import { useParams, useNavigate } from "react-router-dom";
import dateFormat from "../utils/dateFormat";

export default function PostPage() {
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleNavigateToEdit() {
    navigate(`/posts/edit/${id}`);
  }

  async function handleDeletePost(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    await fetch(`http://localhost:7070/posts/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(e => {
      console.log(e);
    });

    navigate("/");
  }

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then(res => res.json())
      .then(postData => {
        return setPost(postData.post);
      }).catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <div className="post-page">
      <div className="post-page_header">
        <img className="post-page_avatar" src="/ava.jpg" alt="author's avatar" />
        <div className="post-page_authors-data">
          <div className="post-page_author">Автор</div>
          <span className="post-page_role">Основатель группы</span>
          <span className="post-page_created">{dateFormat(post?.created)}</span>
        </div>
      </div>
      <div className="post-page_content">{post?.content}</div>
      <div className="post-page_actions">
        <button className="post-page_actions_like-btn">Нравится</button>
        <button className="post-page_actions_comment-btn">Комментировать</button>
      </div>
      <div className="post-page_footer-buttons-wrp">
        <button
          className="post-page_actions_change"
          onClick={handleNavigateToEdit}
        >
          Изменить
        </button>
        <button
          className="post-page_actions_delete"
          onClick={handleDeletePost}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}