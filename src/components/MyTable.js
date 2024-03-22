import {TableData} from "./TableData";
import {Link} from "react-router-dom";
import {deleteUser} from "../services/UserService";

const MyTable = ({content}) => {

      function handleDelete(item) {

         let text = "Are you sure you want to delete?";
         // eslint-disable-next-line no-restricted-globals
         if (confirm(text) === true) {
             deleteUser(item.id).then(() => window.location.reload())
         }
     }

    return (
        <table className="my-table">
            <thead>
            <tr className="row">
                {
                    TableData["users"].headers.map((value) => {
                        return (
                            <td className="cell headers">{value.toUpperCase()}</td>
                        )
                    })
                }
                <td className="cell headers">ACTION</td>
            </tr>
            </thead>
            <tbody>
            {content && content.map((item) => {
                return (
                    <tr className="row">
                        {TableData["users"].headers.map((value) => {
                            return (
                                <td className="cell">
                                    <Link to={`${item.id}`} state={item}>
                                        {item[value.toLowerCase()]}
                                    </Link>
                                </td>
                            )
                        })}
                        <td className="cell">
                            <div className="action-button">
                                <option value="">Action</option>
                                <Link state={item} to={ item.id + "/edit"} id={item.id}>Edit</Link>
                                <button onClick={() => handleDelete(item)}>Delete</button>
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