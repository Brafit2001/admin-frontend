import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    deleteUserGroup,
    deleteUserRole,
    getUserGroups,
    getUserRoles
} from "../../../services/users-ms/UserService";
import {readImage} from "../../../utils/AuxiliarFunctions";
import {ModalContent} from "../../../components/Modal";
import MyTable from "../../../components/table/MyTable";
const ReadUser = () =>{
    const [roles, setRoles] = useState(null)
    const [groups, setGroups] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()
    const user  = location.state

    useEffect(() => {
        getUserRoles(user.id).then((list) => setRoles(list))
        getUserGroups(user.id).then((list) => setGroups(list))
    }, [user.id]);

    return (
        <div className={"content-2"}>
            <div className={"image-info"}>
                <div className="image">
                    { isOpen &&
                        <ModalContent onClose={() => setIsOpen(false)}>
                            <img src={readImage(user.image, "users")} alt="" className={"modal-image"}/>
                        </ModalContent>
                    }
                    <img src={readImage(user.image, "users")} alt="" onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <div className="info">
                    <p>ID: {user.id}</p>
                    <p>NIA: {user.username}</p>
                    <p>NAME: {user.name}</p>
                    <p>SURNAME: {user.surname}</p>
                    <p>EMAIL: {user.email}</p>
                </div>
            </div>
            <MyTable content={roles}
                     table={"roles"}
                     deleteFunction={deleteUserRole}
                     deleteProps={{userId: user.id}}
                     style={{height: 200}}
                     editButtonVisible={false}/>
            <MyTable content={groups}
                     table={"groups"}
                     deleteFunction={deleteUserGroup}
                     deleteProps={{userId: user.id}}
                     style={{height: 400}}
                     editButtonVisible={false}/>

        </div>

    )
};

export default ReadUser;