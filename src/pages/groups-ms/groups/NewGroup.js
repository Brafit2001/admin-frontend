import MyForm from "../../../components/form/MyForm";
import {newGroup} from "../../../services/groups-ms/GroupService";
import {useEffect, useState} from "react";
import {getAllClasses} from "../../../services/courses-ms/ClassService";
import {useLocation} from "react-router-dom";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";

const NewGroup = () =>{

    const [classes, setClasses] = useState(null)
    const location = useLocation()
    const classId = parseInt(getIdFromPath(location, "classes"))

    const group = {
        name: null,
        description: null,
        class: classes ? classes[0]["id"] : classId
    }

    useEffect(() => {
        !classId && getAllClasses().then((classes) => setClasses(classes))
    }, [classId]);


    return (
        <div className={"form-section"}>
            <h1>NewGroup</h1>
            <MyForm item={group}
                    actionFunction={newGroup}
                    table="groups"
                    mode={classId ? "createWithClassId" : "create"}
                    selectList={classes ? {class: classes} : null}
            />
        </div>

    )
};

export default NewGroup;