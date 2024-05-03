import {useEffect, useState} from "react";
import {deleteSubject, getAllSubjects} from "../../../services/courses-ms/SubjectService";
import MyTable from "../../../components/table/MyTable";

const Subjects = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        getAllSubjects().then((subjects) => setSubjects(subjects))
    }, []);

    return (
        <MyTable content={subjects} table={"subjects"} deleteFunction={deleteSubject}/>
    );
};

export default Subjects;