import {TableData} from "./TableData";
import {Link} from "react-router-dom";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import {CheckElementInList, readImage} from "../../utils/AuxiliarFunctions";

const MyTable = ({content, table, deleteFunction, deleteProps ,style}) => {
    function rowColor(index) {

        if (index % 2 === 0) {
            return {backgroundColor: "#FFFFFF"}
        }
        else {
            return {backgroundColor: "#F9FAFB"}
        }

    }


    function handleDeleteProps(item){
        if (table === "permissions") return   {...deleteProps, id: item.id, type: item.type}
        else return {...deleteProps, id: item.id}
    }

    function selectLink(item, key, table){

        const specialKeys = {
            course: "courses",
            subject: "subjects",
            class: "classes",
            user: "users",
            post: "posts",
            topic: "topics"
        }

        if (CheckElementInList(Object.keys(specialKeys), key)){
            return (
                <Link to={`/clipclass/${specialKeys[key]}/${item.id}`} state={item}>
                    {item[key.toLowerCase()]}
                </Link>
            )
        }else{
            return (
                <Link to={`/clipclass/${table}/${item.id}`} state={item}>
                    {(key === "image") ?
                        <div className="profile-image">
                            <img src={readImage(item, table)} alt=""/>
                        </div>
                        : item[key.toLowerCase()]}
                </Link>
            )
        }
    }


    return (
        <table className="my-table" style={style}>
            <thead>
                <tr className="row headers" style={{backgroundColor: "#F9FAFB"}}>
                    {
                        TableData[table].headers.map((value, index) => {
                            return (
                                <th className="cell header-cell" key={index}>{value.toUpperCase()}</th>
                            )
                        })
                    }
                    <th className="cell header-cell">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {content ? content.map((item, index) => {
                return (
                    <tr className="row" style={rowColor(index)} key={index}>
                        {TableData[table].headers.map((key, index) => {
                            return (
                                <td className="cell" key={index}>
                                    {selectLink(item, key, table)}
                                </td>
                            )
                        })}
                        <td className="cell">
                            <div className="action-buttons">
                                <EditButton item={item}/>
                                <DeleteButton deleteProps={handleDeleteProps(item)}
                                              deleteFunction={deleteFunction}
                                />
                            </div>
                        </td>
                    </tr>
                )}) : <tr><td>No result</td></tr>
                }
            </tbody>
        </table>
    )
};

export default MyTable;