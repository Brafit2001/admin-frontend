import MyForm from "../../../components/form/MyForm";
import {newCourse} from "../../../services/courses-ms/CourseService";

const NewCourse = () =>{

    const course = {
        title: "",
        year: ""
    }

    return (
        <div className={"form-section"}>
            <h1>NewCourse</h1>
            <MyForm item={course} actionFunction={newCourse} table="courses" mode="create"/>
        </div>

    )
};

export default NewCourse;