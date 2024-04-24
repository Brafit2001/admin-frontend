import {useLocation} from "react-router-dom";

const ReadVote = () =>{
    const location = useLocation()
    const course  = location.state

    return (
        <div>
            <h1>ReadVote</h1>
            <div>{Object.keys(course).map((key) => {
                return (
                    <div>
                        {key + ": " + course[key]}
                    </div>
                )
            })}</div>
        </div>

    )
};

export default ReadVote;