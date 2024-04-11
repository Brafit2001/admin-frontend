import {useEffect, useState} from "react";
import {deleteVote, getAllVotes} from "../../../services/votes-ms/VoteService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Votes = () => {
    const [votes, setVotes] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? votes : votes.filter((vote)=> vote.user.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect(() => {
        getAllVotes(setVotes)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Votes"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"votes"} deleteFunction={deleteVote}/>
        </div>
    );
};

export default Votes;