import {useEffect, useState} from "react";
import {deleteVote, getAllVotes} from "../../../services/votes-ms/VoteService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Votes = () => {
    const [votes, setVotes] = useState([])

    useEffect(() => {
        getAllVotes(setVotes)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Votes"} createPath={"/votes/new"}/>
            <MyTable content={votes} table={"votes"} deleteFunction={deleteVote}/>
        </div>
    );
};

export default Votes;