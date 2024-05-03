import MyForm from "../../../components/form/MyForm";
import {newVote} from "../../../services/votes-ms/VoteService";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {getAllPosts} from "../../../services/votes-ms/PostService";
import {getAllTopics} from "../../../services/groups-ms/TopicService";
import {useLocation} from "react-router-dom";

const NewVote = () =>{
    const [userIds, setUserIds] = useState([])
    const [topicIds, setTopicIds] = useState([])
    const [postIds, setPostIds] = useState([])

    const path = useLocation().pathname.split('/')
    const postId = parseInt(path[path.length - 2]) || null

    const vote = {
        user: userIds.sort()[0],
        post: postId ? postId : postIds.sort()[0],
        topic: topicIds.sort()[0],
        content: null,
        originality: null,
        clarity: null,
        mean: null

    }

    useEffect(() => {
        getAllUsers().then((users) => setUserIds(users.map((user) => user.id)))
        getAllPosts().then((posts) => setPostIds(posts.map((post) => post.id)))
        getAllTopics().then((topics) => setTopicIds(topics.map((topic) => topic.id)))
    }, []);

    return (
        <div>
            <h1>NewVote</h1>
            <MyForm item={vote}
                    actionFunction={newVote}
                    table="votes"
                    mode="create"
                    selectList={{user: userIds, post: postIds ,topic: topicIds}}
            />
        </div>

    )
};

export default NewVote;