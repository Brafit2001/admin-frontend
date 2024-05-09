import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {
    assignTopic,
    getGroupRemainingTopics
} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";


const AssignTopic = () => {
    const [topics, setTopics] = useState(null)
    const [selectedTopics, setSelectedTopics] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const groupId = path[path.length - 2]

    useEffect(() => {
        getGroupRemainingTopics(groupId).then((groups) => setTopics(groups))
    }, [groupId]);


    function addTopic(topic, checked){

        const newList = [...selectedTopics]
        if (checked === false){
            const index = selectedTopics.indexOf(topic.id)
            newList.splice(index, 1)
        }else newList.push(topic.id)

        setSelectedTopics(newList)

    }


    function handleSubmit(e) {
        e.preventDefault()
        selectedTopics.forEach((topicId) => {
            const body = {topic: topicId, group: groupId}
            assignTopic(body).then(() => console.log(`Topic ${topicId} Assigned`))
        })
        navigate(`/clipclass/groups/${groupId}`)
    }

    return (
        <div className={"content-2"}>
            <MyTable content={topics}
                     table={"topics"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addTopic}
                     style={{height: 600}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                Submit
            </button>
        </div>
    )
}

export default AssignTopic;