import MyForm from "../../../components/form/MyForm";
import {newPost} from "../../../services/votes-ms/PostService";
import {useEffect, useState} from "react";
import {getAllTopics} from "../../../services/groups-ms/TopicService";
import {getLoggedUserId} from "../../../utils/AuxiliarFunctions";

const NewPost = () =>{
    const [topics, setTopics] = useState(null)
    const postType = [{type: 0},{type:1},{type: 2}]

    const post = {
        user: getLoggedUserId(),
        topic: topics && topics[0]["id"],
        title: null,
        type: 0,
        content: null,
        visible: 0
    }
    useEffect(() => {
        getAllTopics().then((topics) => setTopics(topics))
    }, []);

    return (
        <div className={"form-section"}>
            <h1>NewPost</h1>
            <MyForm item={post}
                    actionFunction={newPost}
                    table="posts"
                    mode="create"
                    selectList={(topics) && {topic: topics, type: postType}}
            />
        </div>

    )
};

export default NewPost;