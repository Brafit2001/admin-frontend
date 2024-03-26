import {useLocation} from "react-router-dom";
import {editPost} from "../../../services/votes-ms/PostService";
import MyForm from "../../../components/MyForm";


const EditPost = () =>{
    const location = useLocation()
    const post = location.state


    return (
        <div>
            <h1>EditPost</h1>
            <MyForm item={post} actionFunction={editPost} table="posts" mode={"editable"}/>
        </div>

    )
};

export default EditPost;