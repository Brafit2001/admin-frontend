import {useEffect, useState} from "react";
import {deleteSubject, getAllSubjects} from "../../../services/courses-ms/SubjectService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Subjects = () => {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        getAllSubjects(setSubjects)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Subjects"} createPath={"/subjects/new"}/>
            <MyTable content={subjects} table={"subjects"} deleteFunction={deleteSubject}/>
        </div>
    );
};

export default Subjects;