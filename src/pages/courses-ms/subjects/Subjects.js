import {useEffect, useState} from "react";
import {deleteSubject, getAllSubjects} from "../../../services/courses-ms/SubjectService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";
import {Filter} from "../../../utils/Filter";

const Subjects = () => {
    const [subjects, setSubjects] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["subjects"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? subjects : Filter(subjects, filterFields, checkedState, search)
    useEffect(() => {
        getAllSubjects(setSubjects)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Subjects"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"subjects"} deleteFunction={deleteSubject}/>
        </div>
    );
};

export default Subjects;