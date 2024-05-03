import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteVote, getAllVotes} from "../../../services/votes-ms/VoteService";
import {readImage} from "../../../utils/AuxiliarFunctions";
import {ModalContent} from "../../../components/Modal";
import {getPostById} from "../../../services/votes-ms/PostService";
import MyTable from "../../../components/table/MyTable";

const ReadPost = () =>{
    const location = useLocation()
    const [votes, setVotes] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [post, setPost] = useState(location.state)

    const path = location.pathname.split('/')
    const postId = path[path.length - 1]

    useEffect(() => {
        !post && getPostById(postId).then((post) => setPost(post))
        const params = {post: postId}
        getAllVotes(params).then((votes) => setVotes(votes))
    }, [post, postId]);


    return (
        <div className={"content-2"}>
            { post &&
                <div style={{height: "100%"}}>
                    <h1>ReadPost</h1>
                    <div className={"post-image-info"}>
                        <div className="image">
                            {(isOpen && post.type === 0) &&
                                <ModalContent onClose={() => setIsOpen(false)}>
                                    <img src={readImage(post.content, "users")} alt="" className={"modal-image"}/>
                                </ModalContent>
                            }
                            {
                                (post.type === 1) ?
                                    <video width="320" height="240" controls>
                                        <source src={`data:video/mp4;base64,${post.content}`} type="video/mp4"/>
                                    </video> :
                                    <img src={readImage(post.content, "users")} alt="" onClick={() => setIsOpen(!isOpen)}
                                         className={"post-image"}/>
                            }

                        </div>
                        <div className="info">
                            <p>ID: {post.id}</p>
                            <p>TITLE: {post.title}</p>
                            <p>TOPIC: {post.topic}</p>
                            <p>TYPE: {post.type}</p>
                            <p>USER: {post.user}</p>
                        </div>
                    </div>
                    <MyTable content={votes}
                             table={"votes"}
                             createPath={"new-vote"}
                             deleteFunction={deleteVote}
                             style={{height: 200}}/>
                </div>
            }
        </div>

    )
};

export default ReadPost;