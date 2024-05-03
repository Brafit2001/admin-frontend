import {useEffect, useState} from "react";
import {deleteVote, getAllVotes} from "../../../services/votes-ms/VoteService";
import MyTable from "../../../components/table/MyTable";

const Votes = () => {
    const [votes, setVotes] = useState([])

    useEffect(() => {
        getAllVotes().then((votes) => setVotes(votes))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={votes} table={"votes"} deleteFunction={deleteVote}/>
        </div>
    );
};

export default Votes;