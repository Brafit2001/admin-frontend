import {useLocation} from "react-router-dom";

const ReadPost = () =>{
    const location = useLocation()
    const post  = location.state

    return (
        <div>
            <h1>ReadPost</h1>
            <div>{Object.keys(post).map((key) => {
                return (
                    <div>
                        {key + ": " + post[key]}
                    </div>
                )
            })}</div>
        </div>

    )
};

export default ReadPost;