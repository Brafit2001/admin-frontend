import {useEffect, useState} from "react";
import {deleteCourse, getAllCourses} from "../../../services/courses-ms/CourseService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getAllCourses(setCourses)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Courses"} createPath={"/courses/new"}/>
            <MyTable content={courses} table={"courses"} deleteFunction={deleteCourse}/>
        </div>
    );
};

export default Courses;