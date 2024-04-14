import {useEffect, useState} from "react";
import {deletePost, getAllPosts} from "../../../services/votes-ms/PostService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";

import {Filter} from "../../../utils/AuxiliarFunctions";

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["posts"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? posts : Filter(posts, filterFields, checkedState, search)
    useEffect(() => {
        getAllPosts().then((posts) => setPosts(posts))
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Posts"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"posts"} deleteFunction={deletePost}/>
        </div>
    );
};

export default Posts