import {TableData} from "./TableData";

const MyTable = ({content}) => {

    return (
        <table className="my-table">
            <thead>
            <tr className="row">
                {
                    TableData["users"].headers.map((value) => {
                        return (
                            <td className="cell headers">{value}</td>
                        )
                    })
                }
                <td className="cell headers">Action</td>
            </tr>
            </thead>
            <tbody>
            {content && content.map((item) => {
                return (
                    <tr className="row">
                        {TableData["users"].headers.map((value) => {
                            return (
                                <td className="cell">{item[value.toLowerCase()]}</td>
                            )
                        })}
                        <td className="cell">Action Button</td>
                    </tr>
                )

            })}
            </tbody>
        </table>
    )
};

export default MyTable;