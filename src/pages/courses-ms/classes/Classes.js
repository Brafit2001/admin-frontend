import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";
import MyTable from "../../../components/table/MyTable";

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        getAllClasses().then((classes) => setClasses(classes))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={classes} table={"classes"} deleteFunction={deleteClass}/>
        </div>
    );
};

export default Classes;