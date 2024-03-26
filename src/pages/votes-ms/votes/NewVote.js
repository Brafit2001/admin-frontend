import MyForm from "../../../components/MyForm";
import {newVote} from "../../../services/votes-ms/VoteService";

const NewVote = () =>{

    const vote = {
        user: null,
        post: null,
        topic: null,
        content: null,
        originality: null,
        clarity: null,
        mean: null

    }

    return (
        <div>
            <h1>NewVote</h1>
            <MyForm item={vote} actionFunction={newVote} table="votes" mode="create"/>
        </div>

    )
};

export default NewVote;