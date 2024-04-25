import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteTopicGroup, getTopicGroups} from "../../../services/groups-ms/TopicService";
import {getAllPosts, getPostVotes} from "../../../services/votes-ms/PostService";
import MyTable from "../../../components/table/MyTable";
import {deleteVote, getAllVotes} from "../../../services/votes-ms/VoteService";

const ReadPost = () =>{
    const [votes, setVotes] = useState(null)
    const location = useLocation()
    const post  = location.state

    useEffect(() => {
        const params = {post: post.id}
        getAllVotes(params).then((votes) => setVotes(votes))
    }, [post.id]);


    return (
        <div className={"content-2"}>
            <h1>ReadPost</h1>
            <div>{Object.keys(post).map((key) => {
                return (
                    <div>
                        {key + ": " + post[key]}
                    </div>
                )
            })}</div>
            <h1>Votes:</h1>
            <MyTable content={votes} table={"votes"}
                     deleteFunction={deleteVote}
                     style={{height: 200}}
            />
        </div>

    )
};

export default ReadPost;