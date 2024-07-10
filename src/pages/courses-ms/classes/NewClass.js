import MyForm from "../../../components/form/MyForm";
import {newClass} from "../../../services/courses-ms/ClassService";
import {useEffect, useState} from "react";
import {getAllSubjects, getSubjectById} from "../../../services/courses-ms/SubjectService";
import {useLocation} from "react-router-dom";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";

const NewClass = () =>{

    const [subjects, setSubjects] = useState(null)

    const location = useLocation()
    const subjectId = parseInt(getIdFromPath(location, "subjects"))

    useEffect(() => {
        !subjectId && getAllSubjects().then((subjects) => setSubjects(subjects))
    }, [subjectId]);

    const class_item = {
        subject: subjects ? subjects[0]["id"] : subjectId,
        title: null,
        image: null
    }

    return (
        <div className={"form-section"}>
            <h1>NewClass</h1>
            <MyForm item={class_item} actionFunction={newClass} table="classes"
                    mode={subjectId ? "createWithSubjectId" : "create"}
                    selectList={subjects ? {subject: subjects} : null}/>
        </div>

    )
};

export default NewClass;