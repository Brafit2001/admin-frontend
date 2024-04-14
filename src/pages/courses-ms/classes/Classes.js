import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";
import {Filter} from "../../../utils/AuxiliarFunctions";

const Classes = () => {
    const [classes, setClasses] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["classes"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? classes : Filter(classes, filterFields, checkedState, search)
    useEffect(() => {
        getAllClasses().then((classes) => setClasses(classes))
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Classes"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"classes"} deleteFunction={deleteClass}/>
        </div>
    );
};

export default Classes;