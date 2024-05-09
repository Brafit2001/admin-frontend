import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteTopicGroup, getTopicById, getTopicGroups} from "../../../services/groups-ms/TopicService";
import MyTable from "../../../components/table/MyTable";

const ReadTopic = () =>{
    const [groups, setGroups] = useState(null)
    const location = useLocation()
    const [topic, setTopic] = useState(location.state)

    const path = location.pathname.split("/")
    const topicId = path[path.length - 1]


    useEffect(() => {
        !topic && getTopicById(topicId).then((topic) => setTopic(topic))
        getTopicGroups(topicId).then((groups) => setGroups(groups))
    }, [topic, topicId]);

    return (
        <div className={"content-2"}>
            {topic &&
                <div className={"content-3"}>
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
                             createPath={"assign-group"}
                             deleteFunction={deleteTopicGroup}
                             deleteProps={{topicId: topic.id}}
                             editButtonVisible={false}
                    />
                </div>
            }
        </div>

    )
};

export default ReadTopic;