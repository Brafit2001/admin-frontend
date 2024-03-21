
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Courses from "./pages/Courses";
import Groups from "./pages/Groups";
import Votes from "./pages/Votes";
import Roles from "./pages/Roles";
import Subjects from "./pages/Subjects";
import Classes from "./pages/Classes";
import Topics from "./pages/Topics";
import Posts from "./pages/Posts";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="users" element={<Users />} />
              <Route path="roles" element={<Roles />} />
              <Route path="courses" element={<Courses />} />
              <Route path="subjects" element={<Subjects />} />
              <Route path="classes" element={<Classes />} />
              <Route path="groups" element={<Groups />} />
              <Route path="topics" element={<Topics />} />
              <Route path="votes" element={<Votes />} />
              <Route path="posts" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
