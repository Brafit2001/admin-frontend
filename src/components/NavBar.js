import {Link} from "react-router-dom";
import {login} from "../services/AuthService";
import { jwtDecode } from 'jwt-decode'
import {getUserById} from "../services/users-ms/UserService";
import storage from "../utils/storage";
import Capitalize from "../utils/Capitalize";
import {useState} from "react";

const NavBar = () => {

    const user = storage.get("user")

    function handleLogin(){
        login('marce', '0000').then((response) => {
                localStorage.setItem("token", response.data.token)
                const payload = jwtDecode(response.data.token)
                getUserById(payload.userId).then((user) => storage.set("user", user))

            }
        )

    }

    return (
        <header>
            <div className="content">
                <div className="logo">
                    <Link to="/">Logo</Link>
                </div>
                <button onClick={handleLogin}>
                    Login
                </button>
                <div className="profile">
                    <div className="profile-image">

                    </div>
                    <Link className={"profile-info"} to={`users/${user.id}`} state={user}>
                        <p className="name">
                            {Capitalize(storage.get("user").name)}  {Capitalize(storage.get("user").surname)}
                        </p>
                        <p className="role">
                            Admin
                        </p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar