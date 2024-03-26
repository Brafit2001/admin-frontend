import {useEffect, useState} from "react";
import {deletePost, getAllPosts} from "../../../services/votes-ms/PostService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts(setPosts)
    }, []);

    return (
        <div className="content-2">
            <h1>Posts</h1>
            <Link to={"/posts/new"}>New Post</Link>
            <MyTable content={posts} table={"posts"} deleteFunction={deletePost}/>
        </div>
    );
};

export default Posts