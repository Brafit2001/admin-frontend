import {useLocation} from "react-router-dom";

const ReadRole = () =>{
    const location = useLocation()
    const user  = location.state

    return (
        <div>
            <h1>ReadRole</h1>
            <div>{Object.keys(user).map((key) => {
                return (
                    <div>
                        {key + ": " + user[key]}
                    </div>
                )
            })}</div>
        </div>

    )
};

export default ReadRole;