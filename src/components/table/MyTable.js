import {TableData} from "./TableData";
import {Link} from "react-router-dom";
import TrashIcon from "../../resources/images/trash.svg"
import EditIcon from "../../resources/images/edit.svg"
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

const MyTable = ({content, table, deleteFunction}) => {
    function rowColor(index) {

        if (index % 2 === 0) {
            return {backgroundColor: "#FFFFFF"}
        }
        else {
            return {backgroundColor: "#F9FAFB"}
        }

    }



    return (
        <table className="my-table">
            <thead>
            <tr className="row" style={{backgroundColor: "#F9FAFB"}}>
                {
                    TableData[table].headers.map((value, index) => {
                        return (
                            <td className="cell headers" key={index}>{value.toUpperCase()}</td>
                        )
                    })
                }
                <td className="cell headers">ACTION</td>
            </tr>
            </thead>
            <tbody>
            {content && content.map((item, index) => {
                return (
                    <tr className="row" style={rowColor(index)} key={index}>
                        {TableData[table].headers.map((value, index) => {
                            return (
                                <td className="cell" key={index}>
                                    <Link to={`${item.id}`} state={item}>
                                        {item[value.toLowerCase()]}
                                    </Link>
                                </td>
                            )
                        })}
                        <td className="cell">
                            <div className="action-buttons">
                                <EditButton item={item}/>
                                <DeleteButton item={item} deleteFunction={deleteFunction}/>
                            </div>
                        </td>
                    </tr>
                )

            })}
            </tbody>
        </table>
    )
};

export default MyTable;