import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Classes = () => {
    const [classes, setClasses] = useState([])

    useEffect(() => {
        getAllClasses(setClasses)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Classes"} createPath={"/classes/new"}/>
            <MyTable content={classes} table={"classes"} deleteFunction={deleteClass}/>
        </div>
    );
};

export default Classes;