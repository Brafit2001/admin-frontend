import {useLocation} from "react-router-dom";
import {editGroup} from "../../../services/groups-ms/GroupService";
import MyForm from "../../../components/form/MyForm";
import {useEffect, useState} from "react";
import {getAllClasses} from "../../../services/courses-ms/ClassService";


const EditGroup = () =>{
    const [classesIds, setClassesIds] = useState([])
    const location = useLocation()
    const groups = location.state

    useEffect(() => {
        getAllClasses().then((classes) => {
            setClassesIds(classes.map((class_item) => class_item.id))
        })
    }, []);

    return (
        <div>
            <h1>EditGroup</h1>
            <MyForm item={groups}
                    actionFunction={editGroup}
                    table="groups"
                    mode={"editable"}
                    selectList={{class: classesIds}}
            />
        </div>

    )
};

export default EditGroup;