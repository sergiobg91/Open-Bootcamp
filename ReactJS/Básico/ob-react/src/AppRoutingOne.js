import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskPage from "./pages/task/TaskPage";
import TaskDetailPage from "./pages/task/TaskDetailPage";

function AppRoutingOne() {
  return (
    <>
      <aside>
        <Link to="/"> HOME |</Link>
        <Link to="/about"> ABOUT |</Link>
        <Link to="/faqs"> FAQs</Link>
      </aside>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tasks" element={<TaskPage/>}></Route>
          <Route path="/task/:id" element={<TaskDetailPage/>}></Route>

          {/* Siempre dejarla al final */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default AppRoutingOne;
