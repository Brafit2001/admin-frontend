import {useLocation} from "react-router-dom";
import {editPost, getPostById} from "../../../services/votes-ms/PostService";
import MyForm from "../../../components/form/MyForm";
import {useEffect, useState} from "react";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";


const EditPost = () =>{

    const location = useLocation()
    const [post, setPost] = useState(location.state)

    const postId = getIdFromPath(location, "posts")
    useEffect(() => {
        !post && getPostById(postId).then((post) => setPost(post))

    }, [post, postId]);

    return (
        <div className={"form-section"}>
            <h1>EditPost</h1>
            <MyForm item={post}
                    actionFunction={editPost}
                    table="posts"
                    mode={"editable"}
            />
        </div>

    )
};

export default EditPost;