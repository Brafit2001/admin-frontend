import MyForm from "../../../components/form/MyForm";
import {newClass} from "../../../services/courses-ms/ClassService";
import {useEffect, useState} from "react";
import {getAllSubjects} from "../../../services/courses-ms/SubjectService";

const NewClass = () =>{

    const [subjectsIds, setSubjectsIds] = useState([])
    const class_item = {
        subject: null,
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