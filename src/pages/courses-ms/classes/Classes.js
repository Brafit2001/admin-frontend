import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Classes = () => {
    const [classes, setClasses] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? classes : classes.filter((class_item)=> class_item.title.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect(() => {
        getAllClasses(setClasses)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Classes"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"classes"} deleteFunction={deleteClass}/>
        </div>
    );
};

export default Classes;