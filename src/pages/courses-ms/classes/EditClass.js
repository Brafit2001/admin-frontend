import {useLocation} from "react-router-dom";
import {editClass} from "../../../services/courses-ms/ClassService";
import MyForm from "../../../components/form/MyForm";
import {useEffect, useState} from "react";
import {getAllSubjects} from "../../../services/courses-ms/SubjectService";


const EditClass = () =>{
    const [subjectsIds, setSubjectsIds] = useState([])
    const location = useLocation()
    const class_item = location.state

    useEffect(() => {
        getAllSubjects().then((subjects) => setSubjectsIds(subjects.map((subject) => subject.id)))
    }, []);


    return (
        <div>
            <h1>EditClass</h1>
            <MyForm item={class_item}
                    actionFunction={editClass}
                    table="classes"
                    mode={"editable"}
                    selectList={{subject: subjectsIds}}
            />
        </div>

    )
};

export default EditClass;