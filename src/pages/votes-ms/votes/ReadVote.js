import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getVoteById} from "../../../services/votes-ms/VoteService";

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
                    <div>{Object.keys(vote).map((key) => {
                        return (
                            <div>
                                {key + ": " + vote[key]}
                            </div>
                        )
                    })}</div>
                </div>
            }
        </div>

    )
};

export default ReadVote;