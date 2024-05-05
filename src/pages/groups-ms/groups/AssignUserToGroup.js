import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {assignGroup, getGroupRemainingUsers} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";


const AssignUserToGroup = () => {
    const [users, setUsers] = useState(null)
    const [selectedUsers, setSelectedUsers] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const groupId = path[path.length - 2]

    useEffect(() => {
        getGroupRemainingUsers(groupId).then((groups) => setUsers(groups))
    }, [groupId]);


    function addUser(user, checked){

        const newList = [...selectedUsers]
        if (checked === false){
            const index = selectedUsers.indexOf(user.id)
            newList.splice(index, 1)
        }else newList.push(user.id)

        setSelectedUsers(newList)

    }


    function handleSubmit(e) {
        e.preventDefault()
        selectedUsers.forEach((userId) => {
            const body = {user: userId, group: groupId}
            assignGroup(body).then(() => console.log(`User ${userId} Assigned`))
        })
        navigate(`/clipclass/groups/${groupId}`)
    }

    return (
        <div className={"content-2"}>
            <MyTable content={users}
                     table={"users"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addUser}
                     style={{height: 600}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignUserToGroup;