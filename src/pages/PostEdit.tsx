import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function PostEdit() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch(`http://localhost:7070/posts/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        content: content,
      })
    });

    navigate("/");
  }

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${id}`)
      .then(res => res.json())
      .then(postData => {
        return setContent(postData.post.content);
      });
  }, []);

  return (
    <form className="post-edit-form" onSubmit={handleSubmit}>
      <div className="post-edit-form_header">
        <span>Редактировать публикацию</span>
        <Link className="post-edit-form_close" to={`/posts/${id}`}>X</Link>
      </div>
      <div className="post-edit-form_content">
        <img className="post-edit-form_avatar" src="/ava.jpg" alt="author's avatar" />
        <textarea
          className="post-edit-form_input-content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <ul className="post-edit-form_attachment-list">
        <li className="post-edit-form_attachment-item">Фото/видео</li>
        <li className="post-edit-form_attachment-item">Отметить друзей</li>
        <li className="post-edit-form_attachment-item">Чувства/действия</li>
        <li className="post-edit-form_attachment-item">Отметить посещение</li>
        <li className="post-edit-form_attachment-item">GIF</li>
      </ul>
      <button className="post-edit-form_submit">Сохранить</button>
    </form>
  );
}