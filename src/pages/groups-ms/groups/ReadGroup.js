import {useLocation} from "react-router-dom";

const ReadGroup = () =>{
    const location = useLocation()
    const Group  = location.state

    return (
        <div>
            <h1>ReadGroup</h1>
            <div>{Object.keys(Group).map((key) => {
                return (
                    <div>
                        {key + ": " + Group[key]}
                    </div>
                )
            })}</div>
        </div>

    )
};

export default ReadGroup;