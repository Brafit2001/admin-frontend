import MyForm from "../../../components/form/MyForm";
import {newGroup} from "../../../services/groups-ms/GroupService";
import {useEffect, useState} from "react";
import {getAllClasses} from "../../../services/courses-ms/ClassService";
import {useLocation} from "react-router-dom";

const NewGroup = () =>{

    const [classesIds, setClassesIds] = useState([])

    const path = useLocation().pathname.split('/')
    const classId = parseInt(path[path.length - 2]) || null

    const group = {
        name: null,
        description: null,
        class: classId ? classId : classesIds.sort()[0]
    }

    useEffect(() => {
        getAllClasses().then((classes) => {
            setClassesIds(classes.map((class_item) => class_item.id))
        })
    }, []);


    return (
        <div>
            <h1>NewGroup</h1>
            <MyForm item={group}
                    actionFunction={newGroup}
                    table="groups"
                    mode="create"
                    selectList={{class: classesIds}}
            />
        </div>

    )
};

export default NewGroup;