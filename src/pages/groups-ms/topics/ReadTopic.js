import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTopicGroups} from "../../../services/groups-ms/TopicService";

const ReadTopic = () =>{
    const [groups, setGroups] = useState(null)
    const location = useLocation()
    const topic  = location.state


    useEffect(() => {
        getTopicGroups(topic.id).then((groups) => setGroups(groups))
    }, [topic.id]);

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
            <h1>Groups:</h1>
            {
                groups ? groups.map((group) => {
                    return (
                        <div>
                            <p>Group id: {group.id}</p>
                        </div>
                    )
                }) : <p>No Groups</p>
            }
        </div>

    )
};

export default ReadTopic;