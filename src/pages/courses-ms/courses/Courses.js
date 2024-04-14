import {useEffect, useState} from "react";
import {deleteCourse, getAllCourses} from "../../../services/courses-ms/CourseService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";

import {Filter} from "../../../utils/AuxiliarFunctions";

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["courses"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? courses : Filter(courses, filterFields, checkedState, search)
    useEffect(() => {
        getAllCourses().then((response) => setCourses(response))
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Courses"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"courses"} deleteFunction={deleteCourse}/>
        </div>
    );
};

export default Courses;