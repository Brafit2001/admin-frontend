import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    deleteUserGroup,
    deleteUserRole, getUserById,
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

    const path = location.pathname.split('/')
    const userId = path[path.length - 1]
    const [user, setUser]  = useState(location.state)

    useEffect(() => {
        !user && getUserById(userId).then((user) => setUser(user))
        getUserRoles(userId).then((list) => setRoles(list))
        getUserGroups(userId).then((list) => setGroups(list))
    }, [user, userId]);

    return (
        <div className={"content-2"}>
            { user &&
                <div className={"content-3"}>
                    <div className={"image-info"} style={{height: "20%"}}>
                        <div className="image">
                            {isOpen &&
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
                             createPath={"assign-role"}
                             deleteFunction={deleteUserRole}
                             deleteProps={{userId: user.id}}
                             style={{height: 400}}
                             editButtonVisible={false}/>
                    <MyTable content={groups}
                             table={"groups"}
                             createPath={"assign-group"}
                             deleteFunction={deleteUserGroup}
                             deleteProps={{userId: user.id}}
                             style={{height: 400}}
                             editButtonVisible={false}/>

                </div>
            }

        </div>

    )
};

export default ReadUser;