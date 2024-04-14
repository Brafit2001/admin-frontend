import {useLocation} from "react-router-dom";
const ReadUser = () =>{
    const location = useLocation()
    const user  = location.state

    return (
        <div>
            <h1>ReadUser</h1>
            <div>
                <div className="image">
                    IMAGE: {user.image}
                </div>
                <div className="info">
                    <p>ID: {user.id}</p>
                    <p>NIA: {user.username}</p>
                    <p>NAME: {user.name}</p>
                    <p>SURNAME: {user.surname}</p>
                    <p>EMAIL: {user.email}</p>
                </div>
            </div>
        </div>

    )
};

export default ReadUser;