import MyForm from "../../../components/form/MyForm";
import {newClass} from "../../../services/courses-ms/ClassService";
import {useEffect, useState} from "react";
import {getAllSubjects} from "../../../services/courses-ms/SubjectService";
import {useLocation} from "react-router-dom";

const NewClass = () =>{

    const [subjectsIds, setSubjectsIds] = useState([])

    const path = useLocation().pathname.split('/')
    const subjectId = parseInt(path[path.length - 2]) || null

    const class_item = {
        subject: subjectId ? subjectId : subjectsIds.sort()[0],
        title: null,
        image: null
    }

    useEffect(() => {
        getAllSubjects().then((subjects) => setSubjectsIds(subjects.map((subject) => subject.id)))
    }, []);

    return (
        <div>
            <h1>NewClass</h1>
            <MyForm item={class_item}
                    actionFunction={newClass}
                    table="classes"
                    mode="create"
                    selectList={{subject: subjectsIds}}
            />
        </div>

    )
};

export default NewClass;