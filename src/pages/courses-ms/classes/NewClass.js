import MyForm from "../../../components/MyForm";
import {newClass} from "../../../services/courses-ms/ClassService";

const NewClass = () =>{

    const class_item = {
        subject: null,
        title: null,
        image: null
    }

    return (
        <div>
            <h1>NewClass</h1>
            <MyForm item={class_item} actionFunction={newClass} table="classes" mode="create"/>
        </div>

    )
};

export default NewClass;