import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {assignTopic, getAllGroups} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";


const AssignGroupToTopic = () => {
    const [groups, setGroups] = useState(null)
    const [selectedGroups, setSelectedGroups] = useState([])
    const [groupId, setGroupId] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const topicId = path[path.length - 2]

    useEffect(() => {
        getAllGroups().then((groups) => {
            setGroups(groups)
            setGroupId(groups[0].id)
        })
    }, []);

    function addGroup(group, checked){

        const newList = [...selectedGroups]
        if (checked === false){
            const index = selectedGroups.indexOf(group.id)
            newList.splice(index, 1)
        }else newList.push(group.id)

        setSelectedGroups(newList)
    }

    function handleSubmit(e) {
        e.preventDefault()
        selectedGroups.forEach((groupId) => {
            const body = {topic: topicId, group: groupId}
            assignTopic(body).then(() => console.log(`Group ${groupId} Assigned`))
        })
        navigate(`/clipclass/topics/${topicId}`)
    }

    return(
        <div className={"content-2"}>
            <MyTable content={groups}
                     table={"groups"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addGroup}
                     style={{height: 600}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}
                    className={"submit-button"}>
                Submit
            </button>
        </div>
    )
}

export default AssignGroupToTopic;