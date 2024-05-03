import {useLocation} from "react-router-dom";
import {editPost} from "../../../services/votes-ms/PostService";
import MyForm from "../../../components/form/MyForm";
import {useEffect, useState} from "react";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {getAllTopics} from "../../../services/groups-ms/TopicService";


const EditPost = () =>{
    const [userIds, setUserIds] = useState([])
    const [topicIds, setTopicIds] = useState([])
    const location = useLocation()
    const post = location.state

    useEffect(() => {
        getAllUsers().then((users) => {setUserIds(users.map((user) => user.id))})
        getAllTopics().then((topics) => setTopicIds(topics.map((topic) => topic.id)))
    }, []);

    return (
        <div>
            <h1>EditPost</h1>
            <MyForm item={post}
                    actionFunction={editPost}
                    table="posts"
                    mode={"editable"}
                    selectList={{user: userIds, topic: topicIds}}

            />
        </div>

    )
};

export default EditPost;