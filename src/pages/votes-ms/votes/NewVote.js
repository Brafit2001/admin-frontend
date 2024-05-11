import {newVote} from "../../../services/votes-ms/VoteService";
import {useEffect, useState} from "react";
import {getPostById} from "../../../services/votes-ms/PostService";
import {getTopicRubrics} from "../../../services/groups-ms/TopicService";
import {useLocation, useNavigate} from "react-router-dom";

const NewVote = () =>{
    const navigate = useNavigate()
    const [ratings, setRatings] = useState([])
    const path = useLocation().pathname.split('/')
    const postId = parseInt(path[path.length - 2]) || null

    const vote = {
        post: postId,
        mean: null,
        ratings: ratings
    }

    function handleOnchange(rubric, e) {
        e.preventDefault()
        rubric["rating"] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        newVote(vote).then(() => navigate("/clipclass/votes"))

    }

    useEffect(() => {
        getPostById(postId).then((post) => {
            getTopicRubrics(post.topic).then((rubrics) => setRatings(rubrics.map((rubric) => {
                return (
                    {rating: 0, rubric_name: rubric.name, rubric_id: rubric.id}
                )
            })))
        })
    }, [postId]);

    return (
        <div>
            <h1>NewVote</h1>
            {vote["ratings"].map((rubric) => {
                return <div>
                    <p>{rubric["rubric_name"]}</p>
                    <input
                        type="number"
                        defaultValue={rubric["rating"]}
                        onChange={(e) => handleOnchange(rubric, e)}/>
                </div>
            })}
            <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                Submit
            </button>
        </div>

    )
};

export default NewVote;