import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getVoteById} from "../../../services/votes-ms/VoteService";
import {TableData} from "../../../components/table/TableData";

const ReadVote = () =>{
    const location = useLocation()

    const [vote, setVote] = useState(location.state)
    const path = location.pathname.split('/')
    const voteId = path[path.length - 1]


    useEffect(() => {
        !vote && getVoteById(voteId).then((vote) => setVote(vote))
    }, [vote, voteId]);

    return (
        <div className={"content-2"}>
            {vote &&
                <div style={{height: "100%"}}>
                    <h1>ReadVote</h1>
                    <div>{TableData["votes"]["show"].map((field) => {
                        return (<p>{field}: {vote[field]}</p>)
                    })}</div>
                    {vote["ratings"].map((rubric) => {
                        return (
                            <div style={{marginTop: 20}}>
                                <p>Rubric: {rubric["rubric_name"]}</p>
                                <p>Rating : {rubric["rating"]}</p>
                            </div>
                        )
                    })}
                </div>
            }
        </div>

    )
};

export default ReadVote;