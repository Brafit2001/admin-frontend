import {useLocation} from "react-router-dom";

const ReadSubject = () =>{
    const location = useLocation()
    const subject  = location.state

    return (
        <div>
            <h1>ReadSubject</h1>
            <div>{Object.keys(subject).map((key) => {
                return (
                    <div>
                        {key + ": " + subject[key]}
                    </div>
                )
            })}</div>
        </div>

    )
};

export default ReadSubject;