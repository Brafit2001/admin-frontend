import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {assignGroup} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";
import {getUserRemainingGroups} from "../../../services/users-ms/UserService";


const AssignGroup = () => {

    const [groups, setGroups] = useState(null)
    const [selectedGroups, setSelectedGroups] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const userId = path[path.length - 2]

    useEffect(() => {
        getUserRemainingGroups(userId).then((groups) => setGroups(groups))
    }, [userId]);


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
            const body = {user: userId, group: groupId}
            assignGroup(body).then(() => console.log(`Group ${groupId} Assigned`))
        })
        navigate(`/clipclass/users/${userId}`)
    }

    return (
        <div className={"content-2"}>
            <MyTable content={groups}
                     table={"roles"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addGroup}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                Submit
            </button>
        </div>
    )
}

export default AssignGroup;