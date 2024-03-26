import {useEffect, useState} from "react";
import {deleteSubject, getAllSubjects} from "../../../services/courses-ms/SubjectService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";

const Subjects = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        getAllSubjects(setSubjects)
    }, []);

    return (
        <div className="content-2">
            <h1>Subjects</h1>
            <Link to={"/subjects/new"}>New Subject</Link>
            <MyTable content={subjects} table={"subjects"} deleteFunction={deleteSubject}/>
        </div>
    );
};

export default Subjects;