import {useEffect, useState} from "react";
import {deleteVote, getAllVotes} from "../../../services/votes-ms/VoteService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";

const Votes = () => {
    const [votes, setVotes] = useState([])

    useEffect(() => {
        getAllVotes(setVotes)
    }, []);

    return (
        <div className="content-2">
            <h1>Votes</h1>
            <Link to={"/votes/new"}>New Vote</Link>
            <MyTable content={votes} table={"votes"} deleteFunction={deleteVote}/>
        </div>
    );
};

export default Votes;