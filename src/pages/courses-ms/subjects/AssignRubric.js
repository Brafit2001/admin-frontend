import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import {assignRubric, getSubjectRemainingRubrics} from "../../../services/courses-ms/SubjectService";


const AssignRubric = () =>{
    const [rubrics, setRubrics] = useState(null)
    const [selectedRubrics, setSelectedRubrics] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const subjectId = path[path.length - 2]

    useEffect(() => {
        getSubjectRemainingRubrics(subjectId).then((rubrics) => setRubrics(rubrics))
    }, [subjectId]);


    function addRubric(rubric, checked){

        const newList = [...selectedRubrics]
        if (checked === false){
            const index = selectedRubrics.indexOf(rubric.id)
            newList.splice(index, 1)
        }else newList.push(rubric.id)

        setSelectedRubrics(newList)

    }


    function handleSubmit(e) {
        e.preventDefault()
        selectedRubrics.forEach((rubricId) => {
            const body = {subject: subjectId, rubric: rubricId}
            assignRubric(body).then(() => console.log(`Subject ${rubricId} Assigned`))
        })
        navigate(`/clipclass/subjects/${subjectId}`)
    }

    return (
        <div className={"content-2"}>
            <MyTable content={rubrics}
                     table={"rubrics"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addRubric}
                     style={{height: 600}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                Submit
            </button>
        </div>
    )

}

export default AssignRubric