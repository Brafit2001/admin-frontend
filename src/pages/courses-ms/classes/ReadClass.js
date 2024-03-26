import {useLocation} from "react-router-dom";

const ReadClass = () =>{
    const location = useLocation()
    const class_item  = location.state

    return (
        <div>
            <h1>ReadClass</h1>
            <div>{Object.keys(class_item).map((key) => {
                return (
                    <div>
                        {key + ": " + class_item[key]}
                    </div>
                )
            })}</div>
        </div>

    )
};

export default ReadClass;