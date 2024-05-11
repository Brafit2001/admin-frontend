import {useLocation, useNavigate} from "react-router-dom";
import {editVote} from "../../../services/votes-ms/VoteService";


const EditVote = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    const vote = location.state

    function handleOnchange(rubric, e) {
        e.preventDefault()
        rubric["rating"] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        editVote(vote).then(() => navigate("/clipclass/votes"))

    }

    return (
        <div>
            <h1>EditVote</h1>

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

export default EditVote;