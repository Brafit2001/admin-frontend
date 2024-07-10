import {importUsers, newUser} from "../../../services/users-ms/UserService";
import MyForm from "../../../components/form/MyForm";
import {useCallback, useState} from "react";
import {Grid} from "react-loader-spinner";

const NewUser = () =>{

    const [file, setFile] = useState()
    const [loading, setLoading] = useState(false);

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event){
        setLoading(true)
        event.preventDefault()
        const formData = new FormData();
        formData.append('import-csv-users', file);
        formData.append('fileName', 'import-csv-users');
        importUsers(formData).then(() => {
            setLoading(false)
            window.location.href = "/clipclass/users"
        })
    }

    const user = {
        username: "",
        name: "",
        surname:  "",
        email: ""
    }

    return (
        <div className={"form-section"}>
            <h1>NewUser</h1>
            <MyForm item={user} actionFunction={newUser} table="users" mode="create"/>
            <span></span>
            <h1>Import from excel</h1>
            <input type="file" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit} className={"submit-button"}>Upload</button>
            {loading && <Grid height="50" width="50" color="#4781FFBA" ariaLabel="grid-loading" radius="12.5"
                              wrapperClass="grid-wrapper" wrapperStyle={{position: "absolute", left: "50%", top: "50%"}}/>}
        </div>

    )
};

export default NewUser;