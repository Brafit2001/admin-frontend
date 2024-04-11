import {useEffect, useState} from "react";
import {deleteCourse, getAllCourses} from "../../../services/courses-ms/CourseService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Courses = () => {
    const [courses, setCourses] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? courses : courses.filter((course)=> course.title.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect(() => {
        getAllCourses(setCourses)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Courses"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"courses"} deleteFunction={deleteCourse}/>
        </div>
    );
};

export default Courses;