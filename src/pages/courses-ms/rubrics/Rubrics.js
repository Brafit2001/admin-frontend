import {useEffect, useState} from "react";
import MyTable from "../../../components/table/MyTable";
import {deleteRubric, getAllRubrics} from "../../../services/courses-ms/RubricService";

const Rubrics = () => {
    const [rubrics, setRubrics] = useState([])

    useEffect(() => {
        getAllRubrics().then((rubrics) => setRubrics(rubrics))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={rubrics} table={"rubrics"} deleteFunction={deleteRubric}/>
        </div>
    );
};

export default Rubrics;