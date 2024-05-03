import {useLocation} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import {useEffect, useState} from "react";
import {deleteClass, getAllClasses} from "../../../services/courses-ms/ClassService";

const ReadSubject = () =>{
    const [classes, setClasses] = useState(null)
    const location = useLocation()
    const subject  = location.state

    useEffect(() => {
        const params = {subject: subject.id}
        getAllClasses(params).then((classes) => setClasses(classes))
    }, []);

    return (
        <div className={"content-2"}>
            <h1>ReadSubject</h1>
            <div>{Object.keys(subject).map((key) => {
                return (
                    <div>
                        {key + ": " + subject[key]}
                    </div>
                )
            })}
            </div>
            <MyTable content={classes} table={"classes"}
                     createPath={"new-class"}
                     deleteFunction={deleteClass} style={{height: 200}}/>
        </div>


    )
};

export default ReadSubject;