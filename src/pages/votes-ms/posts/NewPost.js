import MyForm from "../../../components/MyForm";
import {newPost} from "../../../services/votes-ms/PostService";

const NewPost = () =>{

    const post = {
        user: null,
        topic: null,
        title: null,
        type: null,
        content: null
    }

    return (
        <div>
            <h1>NewPost</h1>
            <MyForm item={post} actionFunction={newPost} table="posts" mode="create"/>
        </div>

    )
};

export default NewPost;