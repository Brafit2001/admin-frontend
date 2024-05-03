import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteTopicGroup, getTopicGroups} from "../../../services/groups-ms/TopicService";
import MyTable from "../../../components/table/MyTable";

const ReadTopic = () =>{
    const [groups, setGroups] = useState(null)
    const location = useLocation()
    const topic  = location.state


    useEffect(() => {
        getTopicGroups(topic.id).then((groups) => setGroups(groups))
    }, [topic.id]);

    return (
        <div className={"content-2"}>
            <h1>ReadTopic</h1>
            <div>{Object.keys(topic).map((key) => {
                return (
                    <div>
                        {key + ": " + topic[key]}
                    </div>
                )
            })}</div>
            <MyTable content={groups}
                     table={"groups"}
                     deleteFunction={deleteTopicGroup}
                     deleteProps={{topicId: topic.id}}
                     style={{height: 200}}
                     editButtonVisible={false}
            />
        </div>

    )
};

export default ReadTopic;