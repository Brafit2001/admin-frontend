import {useLocation} from "react-router-dom";

const ReadTopic = () =>{
    const location = useLocation()
    const topic  = location.state

    return (
        <div>
            <h1>ReadTopic</h1>
            <div>{Object.keys(topic).map((key) => {
                return (
                    <div>
                        {key + ": " + topic[key]}
                    </div>
                )
            })}</div>
        </div>

    )
};

export default ReadTopic;