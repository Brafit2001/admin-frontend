import {useEffect, useState} from "react";
import {deleteCourse, getAllCourses} from "../../../services/courses-ms/CourseService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getAllCourses(setCourses)
    }, []);

    return (
        <div className="content-2">
            <h1>Courses</h1>
            <Link to={"/courses/new"}>New Course</Link>
            <MyTable content={courses} table={"courses"} deleteFunction={deleteCourse}/>
        </div>
    );
};

export default Courses;