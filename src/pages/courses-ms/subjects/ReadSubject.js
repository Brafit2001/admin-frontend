import {useLocation} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";
import {getSubjectById} from "../../../services/courses-ms/SubjectService";

const ReadSubject = () =>{
    const [classes, setClasses] = useState(null)
    const location = useLocation()

    const path = location.pathname.split('/')
    const subjectId = path[path.length - 1]
    const [subject, setSubject] = useState(location.state)

    useEffect(() => {
        !subject && getSubjectById(subjectId).then((subject) => {
            setSubject(subject)
        })
        const params = {subject: subjectId}
        getAllClasses(params).then((classes) => setClasses(classes))
    }, [subject, subjectId]);

    return (
        <div className={"content-2"}>
            {subject &&
                <div className={"content-3"}>
                    <h1>ReadSubject</h1>
                    <div>{Object.keys(subject).map((key) => {
                        return (
                            <div>
                                {key + ": " + subject[key]}
                            </div>
                        )
                    })}
                    </div>
                    <MyTable content={classes}
                             table={"classes"}
                             createPath={"new-class"}
                             deleteFunction={deleteClass}
                    />
                </div>
            }
        </div>


    )
};

export default ReadSubject;