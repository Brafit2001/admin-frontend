
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import {usersRoutes} from "./routes/users-ms/UsersRoutes";
import {rolesRoutes} from "./routes/users-ms/RolesRoutes";
import {coursesRoutes} from "./routes/courses-ms/CoursesRoutes";
import {votesRoutes} from "./routes/votes-ms/VotesRoutes";
import {subjectsRoutes} from "./routes/courses-ms/SubjectsRoutes";
import {classesRoutes} from "./routes/courses-ms/ClassesRoutes";
import {topicsRoutes} from "./routes/groups-ms/TopicsRoutes";
import {postsRoutes} from "./routes/votes-ms/PostsRoutes";
import {groupsRoutes} from "./routes/groups-ms/GroupsRoutes";
import Login from "./pages/Login";
function App() {
    const token = localStorage.getItem("token")

    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/clipclass"
                   element={(token) ? <Layout /> : <Navigate to={"/"} replace/> }>
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
