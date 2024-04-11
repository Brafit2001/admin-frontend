import {useEffect, useState} from "react";
import {deletePost, getAllPosts} from "../../../services/votes-ms/PostService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? posts : posts.filter((post)=> post.user.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect(() => {
        getAllPosts(setPosts)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Posts"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"posts"} deleteFunction={deletePost}/>
        </div>
    );
};

export default Posts