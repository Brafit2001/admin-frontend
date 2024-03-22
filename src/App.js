
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Users from "./pages/users/User/Users";
import Courses from "./pages/courses/Courses";
import Groups from "./pages/groups/Groups";
import Votes from "./pages/votes/Votes";
import Roles from "./pages/users/Role/Roles";
import Subjects from "./pages/courses/Subjects";
import Classes from "./pages/courses/Classes";
import Topics from "./pages/groups/Topics";
import Posts from "./pages/votes/Posts";
import EditUser from "./pages/users/User/EditUser";
import NewUser from "./pages/users/User/NewUser";
import ReadUser from "./pages/users/User/ReadUser";
import NewRole from "./pages/users/Role/NewRole";
import EditRole from "./pages/users/Role/EditRole";
import ReadRole from "./pages/users/Role/ReadRole";
import {readUsersRoutes, usersRoutes} from "./routes/users/UsersRoutes";
import {rolesRoutes} from "./routes/users/RolesRoutes";
import {coursesRoutes} from "./routes/courses/CoursesRoutes";
import {votesRoutes} from "./routes/votes/VotesRoutes";
import {subjectsRoutes} from "./routes/courses/SubjectsRoutes";
import {classesRoutes} from "./routes/courses/ClassesRoutes";
import {topicsRoutes} from "./routes/groups/TopicsRoutes";
import {postsRoutes} from "./routes/votes/PostsRoutes";
import {groupsRoutes} from "./routes/groups/GroupsRoutes";

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              {usersRoutes}
              {rolesRoutes}
              {coursesRoutes}
              {subjectsRoutes}
              {classesRoutes}
              {groupsRoutes}
              {topicsRoutes}
              {votesRoutes}
              {postsRoutes}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
