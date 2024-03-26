import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        getAllClasses(setClasses)
    }, []);

    return (
        <div className="content-2">
            <h1>Classes</h1>
            <Link to={"/classes/new"}>New Class</Link>
            <MyTable content={classes} table={"classes"} deleteFunction={deleteClass}/>
        </div>
    );
};

export default Classes;