import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function PostCreationPage() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("http://localhost:7070/posts", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 0,
        content: content,
      }),
    });

    navigate("/");
  }

  return (
    <form className="post-creation-form" onSubmit={handleSubmit}>
      <div className="post-edit-form_header">
        <ul className="post-edit-form_types">
          <li className="post-edit-form_types_items">Публикация</li>
          <li className="post-edit-form_types_items">Фото/видео</li>
          <li className="post-edit-form_types_items">Прямой эфир</li>
          <li className="post-edit-form_types_items">Ещё</li>
        </ul>
        <Link className="post-edit-form_close" to="/">X</Link>
      </div>
      <div className="post-creation-form_content">
        <img className="post-creation-form_avatar" src="/ava.jpg" alt="author's avatar" />
        <textarea
          className="post-creation-form_input-content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </div>
      <button className="post-creation-form_submit">Опубликовать</button>
    </form>
  );
}