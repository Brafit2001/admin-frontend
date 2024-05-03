import {useEffect, useState} from "react";
import {deletePost, getAllPosts} from "../../../services/votes-ms/PostService";
import MyTable from "../../../components/table/MyTable";

const cache = {};

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        if (cache['data']) {
            setPosts(cache['data']);
        } else {
            getAllPosts().then((posts) => {
                cache['data'] = posts;
                setPosts(posts)
            });
        }
    }, []);

    return (
        <div className="content-2">
            <MyTable content={posts} table={"posts"} deleteFunction={deletePost}/>
        </div>
    );
};

export default Posts