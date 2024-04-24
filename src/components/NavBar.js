import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserById} from "../services/users-ms/UserService";
import {jwtDecode} from "jwt-decode";

import Capitalize from "../utils/AuxiliarFunctions";

const NavBar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const logOut = () => {
        localStorage.clear()
        navigate("/")
    };

    useEffect(() => {
        const userid = jwtDecode(localStorage.getItem("token"))["userId"]
        getUserById(userid).then((user) => setUser(user))
    }, []);

    return (
        <header>
            <div className="content">
                <div className="logo">
                    <Link to="/clipclass">Logo</Link>
                </div>
                <div className="profile">
                    <div className="profile-image">

                    </div>
                    {
                        user &&
                        <Link className={"profile-info"} to={`users/${user && user.id}`} state={user}>
                            <p className="name">
                                {Capitalize(user.name)} {Capitalize(user.surname)}
                            </p>
                            <p className="role">
                                Admin
                            </p>
                        </Link>
                    }
                    <button onClick={logOut}>Log out</button>
                </div>

            </div>
        </header>
    )
}

export default NavBar