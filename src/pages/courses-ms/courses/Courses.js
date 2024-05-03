import {useEffect, useState} from "react";
import {deleteCourse, getAllCourses} from "../../../services/courses-ms/CourseService";
import MyTable from "../../../components/table/MyTable";

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getAllCourses().then((response) => setCourses(response))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={courses} table={"courses"} deleteFunction={deleteCourse}/>
        </div>
    );
};

export default Courses;