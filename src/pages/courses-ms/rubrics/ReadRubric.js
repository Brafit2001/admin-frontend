import {useLocation} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import {useEffect, useState} from "react";
import {deleteRubricSubject, getRubricById, getRubricSubjects} from "../../../services/courses-ms/RubricService";

const ReadRubric = () =>{
    const [subjects, setSubjects] = useState(null)
    const location = useLocation()

    const path = location.pathname.split('/')
    const rubricId = path[path.length - 1]
    const [rubric, setRubric] = useState(location.state)

    useEffect(() => {
        !rubric && getRubricById(rubricId).then((rubric) => {
            setRubric(rubric)
        })
        getRubricSubjects(rubricId).then((subjects) => setSubjects(subjects))
    }, [rubric, rubricId]);

    return (
        <div className={"content-2"}>
            {rubric &&
                <div className={"content-3"}>
                    <h1>ReadRubric</h1>
                    <div>{Object.keys(rubric).map((key) => {
                        return (
                            <div>
                                {key + ": " + rubric[key]}
                            </div>
                        )
                    })}
                    </div>
                    <MyTable content={subjects}
                             table={"subjects"}
                             createPath={"assign-subject"}
                             deleteFunction={deleteRubricSubject}
                             deleteProps={{rubricId: rubricId}}
                             editButtonVisible={false}
                    />
                </div>
            }
        </div>


    )
};

export default ReadRubric;