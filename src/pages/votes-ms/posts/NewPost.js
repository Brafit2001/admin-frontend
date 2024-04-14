import MyForm from "../../../components/MyForm";
import {newPost} from "../../../services/votes-ms/PostService";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {getAllTopics} from "../../../services/groups-ms/TopicService";

const NewPost = () =>{
    const [userIds, setUserIds] = useState([])
    const [topicIds, setTopicIds] = useState([])
    const post = {
        user: null,
        topic: null,
        title: null,
        type: null,
        content: null
    }
    useEffect(() => {
        getAllUsers().then((users) => {setUserIds(users.map((user) => user.id))})
        getAllTopics().then((topics) => setTopicIds(topics.map((topic) => topic.id)))
    }, []);

    return (
        <div>
            <h1>NewPost</h1>
            <MyForm item={post}
                    actionFunction={newPost}
                    table="posts"
                    mode="create"
                    selectList={{user: userIds, topic: topicIds}}
            />
        </div>

    )
};

export default NewPost;