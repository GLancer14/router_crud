import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PostCreationPage from './pages/PostCreationPage';
import PostPage from './pages/PostPage';
import PostEdit from "./pages/PostEdit";

function App() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/posts/new" element={<PostCreationPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
      </Routes>
    </main>
  );
}

export default App;
