import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserById} from "../services/users-ms/UserService";
import {jwtDecode} from "jwt-decode";
import LogoutIcon from '@mui/icons-material/Logout';

import Capitalize, {readImage} from "../utils/AuxiliarFunctions";


const NavBar = ({token}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null)

    const logOut = () => {
        localStorage.clear()
        navigate("/")
    };


    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token){
            const userid = jwtDecode(token)["userId"]
            getUserById(userid).then((user) => setUser(user))
        }
    }, []);

    return (
        <header>
            <div className="content">
                <div className="logo">
                    <Link to="/clipclass">ClipClass</Link>
                </div>
                {user &&
                    <div className="profile">
                        <Link className="profile-image" to={`users/${user && user.id}`} state={user}>
                            <img src={readImage(user.image, "users")} alt=""/>
                        </Link>
                        <Link className={"profile-info"} to={`users/${user && user.id}`} state={user}>
                            <p className="name">
                                {Capitalize(user.name)} {Capitalize(user.surname)}
                            </p>
                            <p className="role">
                                Admin
                            </p>
                        </Link>

                        <button onClick={logOut} className={"logout-icon"}>{<LogoutIcon/>}</button>
                    </div>
                }
            </div>
        </header>
    )
}

export default NavBar