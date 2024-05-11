import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import {getRubricRemainingSubjects} from "../../../services/courses-ms/RubricService";
import {assignRubric} from "../../../services/courses-ms/SubjectService";


const AssignSubject = () => {
    const [subjects, setSubjects] = useState(null)
    const [selectedSubjects, setSelectedSubjects] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const rubricId = path[path.length - 2]

    useEffect(() => {
        getRubricRemainingSubjects(rubricId).then((subjects) => setSubjects(subjects))
    }, [rubricId]);


    function addSubject(subject, checked){

        const newList = [...selectedSubjects]
        if (checked === false){
            const index = selectedSubjects.indexOf(subject.id)
            newList.splice(index, 1)
        }else newList.push(subject.id)

        setSelectedSubjects(newList)

    }


    function handleSubmit(e) {
        e.preventDefault()
        selectedSubjects.forEach((subjectId) => {
            const body = {subject: subjectId, rubric: rubricId}
            assignRubric(body).then(() => console.log(`Subject ${subjectId} Assigned`))
        })
        navigate(`/clipclass/rubrics/${rubricId}`)
    }

    return (
        <div className={"content-2"}>
            <MyTable content={subjects}
                     table={"subjects"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addSubject}
                     style={{height: 600}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                Submit
            </button>
        </div>
    )
}

export default AssignSubject;