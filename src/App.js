
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/users/Users";
import Courses from "./pages/courses/Courses";
import Groups from "./pages/groups/Groups";
import Votes from "./pages/votes/Votes";
import Roles from "./pages/users/Roles";
import Subjects from "./pages/courses/Subjects";
import Classes from "./pages/courses/Classes";
import Topics from "./pages/groups/Topics";
import Posts from "./pages/votes/Posts";
import EditUser from "./pages/users/EditUser";
import NewUser from "./pages/users/NewUser";
import ReadUser from "./pages/users/ReadUser";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {/* USERS */}
              <Route path="users" element={<Users />}/>
              <Route path="users/:userId" element={<ReadUser/>} />
              <Route path="users/:userId/edit" element={<EditUser/>} />
              <Route path="users/new" element={<NewUser />} />
              {/* ROLES */}
              <Route path="roles" element={<Roles />} />
              {/* COURSES */}
              <Route path="courses" element={<Courses />} />
              {/* SUBJECTS */}
              <Route path="subjects" element={<Subjects />} />
              {/* CLASSES */}
              <Route path="classes" element={<Classes />} />
              {/* GROUPS */}
              <Route path="groups" element={<Groups />} />
              {/* TOPICS */}
              <Route path="topics" element={<Topics />} />
              {/* VOTES */}
              <Route path="votes" element={<Votes />} />
              {/* POSTS */}
              <Route path="posts" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
