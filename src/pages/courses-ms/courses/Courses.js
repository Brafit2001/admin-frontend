import {useEffect, useState} from "react";
import {deleteCourse, getAllCourses} from "../../../services/courses-ms/CourseService";
import MyTable from "../../../components/table/MyTable";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getAllCourses().then((response) => setCourses(response))
    }, []);

    return (
        <MyTable content={courses} table={"courses"} deleteFunction={deleteCourse}/>
    );
};

export default Courses;