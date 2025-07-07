import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { type IPost } from "../models";
import PostCard from "./PostCard";

export default function MainPage() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((res) => res.json())
      .then(data => {
        setPosts(data);
      }).catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="main_actions">
        <Link className="main_create-post" to="posts/new">Создать пост</Link>
      </div>
      <div className="main_posts">
        {posts.map(item => <PostCard key={item.id} postData={item} />)}
      </div>
    </>
  );
}

