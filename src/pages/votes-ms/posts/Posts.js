import {useEffect, useState} from "react";
import {deletePost, getAllPosts} from "../../../services/votes-ms/PostService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts(setPosts)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Posts"} createPath={"/posts/new"}/>
            <MyTable content={posts} table={"posts"} deleteFunction={deletePost}/>
        </div>
    );
};

export default Posts