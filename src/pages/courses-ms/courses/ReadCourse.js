import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";
import {deleteVote} from "../../../services/votes-ms/VoteService";
import MyTable from "../../../components/table/MyTable";
import {deleteSubject, getAllSubjects} from "../../../services/courses-ms/SubjectService";

const ReadCourse = () =>{
    const [subjects, setSubjects] = useState(null)
    const location = useLocation()
    const course  = location.state

    useEffect(() => {
        const params = {course: course.id}
        getAllSubjects(params).then((subjects) => setSubjects(subjects))
    }, []);

    return (
        <div className={"content-2"}>
            <h1>ReadCourse</h1>
            <div>{Object.keys(course).map((key) => {
                return (
                    <div>
                        {key + ": " + course[key]}
                    </div>
                )
            })}</div>
            <MyTable content={subjects} table={"subjects"} deleteFunction={deleteSubject} style={{height: 200}}/>
        </div>

    )
};

export default ReadCourse;