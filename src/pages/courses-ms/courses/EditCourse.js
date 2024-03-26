import {useLocation} from "react-router-dom";
import {editCourse} from "../../../services/courses-ms/CourseService";
import MyForm from "../../../components/MyForm";


const EditCourse = () =>{
    const location = useLocation()
    const course = location.state


    return (
        <div>
            <h1>EditCourse</h1>
            <MyForm item={course} actionFunction={editCourse} table="courses" mode={"editable"}/>
        </div>

    )
};

export default EditCourse;