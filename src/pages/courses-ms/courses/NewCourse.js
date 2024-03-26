import MyForm from "../../../components/MyForm";
import {newCourse} from "../../../services/courses-ms/CourseService";

const NewCourse = () =>{

    const course = {
        title: "",
        year: ""
    }

    return (
        <div>
            <h1>NewCourse</h1>
            <MyForm item={course} actionFunction={newCourse} table="courses" mode="create"/>
        </div>

    )
};

export default NewCourse;