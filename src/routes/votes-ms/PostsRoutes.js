import Posts from "../../pages/votes-ms/posts/Posts";
import {Route} from "react-router-dom";
import ReadPost from "../../pages/votes-ms/posts/ReadPost";
import EditPost from "../../pages/votes-ms/posts/EditPost";
import NewPost from "../../pages/votes-ms/posts/NewPost";
import NewVote from "../../pages/votes-ms/votes/NewVote";


export const postsRoutes = [
    <Route path="posts" element={<Posts />} />,
    <Route path="posts/:postId" element={<ReadPost/>} />,
    <Route path="posts/:postId/edit" element={<EditPost/>} />,
    <Route path="posts/new" element={<NewPost />} />,
    <Route path="posts/:postId/new-vote" element={<NewVote/>} />,
]