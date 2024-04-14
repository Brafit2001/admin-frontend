import MyForm from "../../../components/MyForm";
import {newVote} from "../../../services/votes-ms/VoteService";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {getAllPosts} from "../../../services/votes-ms/PostService";
import {getAllTopics} from "../../../services/groups-ms/TopicService";

const NewVote = () =>{
    const [userIds, setUserIds] = useState([])
    const [topicIds, setTopicIds] = useState([])
    const [postIds, setPostIds] = useState([])
    const vote = {
        user: null,
        post: null,
        topic: null,
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