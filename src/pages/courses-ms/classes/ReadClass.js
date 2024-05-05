import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import MyTable from "../../../components/table/MyTable";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";
import {getClassById} from "../../../services/courses-ms/ClassService";

const ReadClass = () =>{
    const [groups, setGroups] = useState(null)
    const location = useLocation()
    const path = location.pathname.split('/')
    const classId = path[path.length - 1]
    const [classItem, setClassItem] = useState(location.state)

    useEffect(() => {
        !classItem && getClassById(classId).then((classItem) => setClassItem(classItem))
        const params = {class: classId}
        getAllGroups(params).then((groups) => setGroups(groups))
    }, [classItem, classId]);

    return (
        <div className={"content-2"}>
            {classItem &&
                <div style={{height: "100%"}}>
                    <h1>ReadClass</h1>
                    <div>{Object.keys(classItem).map((key) => {
                        return (
                            <div>
                                {key + ": " + classItem[key]}
                            </div>
                        )
                    })}</div>
                    <MyTable content={groups}
                             table={"groups"}
                             createPath={"new-group"}
                             deleteFunction={deleteGroup}
                    />
                </div>
            }

        </div>

    )
};

export default ReadClass;