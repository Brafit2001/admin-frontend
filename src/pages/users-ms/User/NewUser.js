import {importUsers, newUser} from "../../../services/users-ms/UserService";
import MyForm from "../../../components/form/MyForm";
import {useState} from "react";

const NewUser = () =>{

    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData();
        formData.append('import-csv-users', file);
        formData.append('fileName', 'import-csv-users');
        importUsers(formData)
    }

    const user = {
        username: "",
        name: "",
        surname:  "",
        email: ""
    }

    return (
        <div>
            <h1>NewUser</h1>
            <MyForm item={user} actionFunction={newUser} table="users" mode="create"/>
            <h1>Import from excel</h1>
            <input type="file" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit} className={"submit-button"}>Upload</button>
        </div>

    )
};

export default NewUser;