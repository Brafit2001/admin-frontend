import {useEffect, useState} from "react";
import {deleteVote, getAllVotes} from "../../../services/votes-ms/VoteService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";

import {Filter} from "../../../utils/AuxiliarFunctions";

const Votes = () => {
    const [votes, setVotes] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["votes"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? votes : Filter(votes, filterFields, checkedState, search)
    useEffect(() => {
        getAllVotes().then((votes) => setVotes(votes))
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Votes"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"votes"} deleteFunction={deleteVote}/>
        </div>
    );
};

export default Votes;