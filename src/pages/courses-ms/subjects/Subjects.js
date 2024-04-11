import {useEffect, useState} from "react";
import {deleteSubject, getAllSubjects} from "../../../services/courses-ms/SubjectService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Subjects = () => {
    const [subjects, setSubjects] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? subjects : subjects.filter((subject)=> subject.title.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect(() => {
        getAllSubjects(setSubjects)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Subjects"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"subjects"} deleteFunction={deleteSubject}/>
        </div>
    );
};

export default Subjects;