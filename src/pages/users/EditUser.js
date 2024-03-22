import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {editUser} from "../../services/UserService";
import {TableData} from "../../components/TableData";
import MyForm from "../../components/MyForm";


const EditUser = () =>{
    const location = useLocation()
    const user = location.state


    return (
        <div>
            <h1>EditUser</h1>
            <MyForm item={user} editFunction={editUser} table="users" mode={"editable"}/>
        </div>

    )
};

export default EditUser;