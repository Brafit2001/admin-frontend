import {useLocation} from "react-router-dom";
import {editVote} from "../../../services/votes-ms/VoteService";
import MyForm from "../../../components/form/MyForm";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {getAllTopics} from "../../../services/groups-ms/TopicService";
import {getAllPosts} from "../../../services/votes-ms/PostService";


const EditVote = () =>{
    const [userIds, setUserIds] = useState([])
    const [topicIds, setTopicIds] = useState([])
    const [postIds, setPostIds] = useState([])
    const location = useLocation()
    const vote = location.state

    useEffect(() => {
        getAllUsers().then((users) => setUserIds(users.map((user) => user.id)))
        getAllPosts().then((posts) => setPostIds(posts.map((post) => post.id)))
        getAllTopics().then((topics) => setTopicIds(topics.map((topic) => topic.id)))
    }, []);

    return (
        <div>
            <h1>EditVote</h1>
            <MyForm item={vote}
                    actionFunction={editVote}
                    table="votes"
                    mode={"editable"}
                    selectList={{user: userIds, post: postIds ,topic: topicIds}}
            />
        </div>

    )
};

export default EditVote;