import {TableData} from "./TableData";
import {Link} from "react-router-dom";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import {CheckElementInList, readImage} from "../../utils/AuxiliarFunctions";
import {Grid} from "react-loader-spinner";
import PageHeader from "../PageHeader";
import {useState} from "react";
import {Filter} from "../../utils/AuxiliarFunctions";
import Checkbox from '@mui/material/Checkbox';
import ControlledCheckbox from "../ControlledCheckBox";



const MyTable = ({content, table, deleteFunction, deleteProps ,style, editButtonVisible,
                     deleteButtonVisible, checkButtonVisible = false,createPath = "new",
                     addItemToList}) => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const filterFields = TableData[table]["filter"]
    const [search,setSearch ] = useState("")
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));
    const results = !search ? content : Filter(content, filterFields, checkedState, search)

    function rowColor(index){
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
                            <img src={readImage(item.image, table)} alt=""/>
                        </div>
                        : item[key.toLowerCase()]}
                </Link>
            )
        }
    }


    return (
        <div>
            <PageHeader title={table} createPath={createPath} setQuery={setSearch} query={search} filter={checkedState}
                        setFilter={setCheckedState}/>
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
                {results ?
                    <tbody>
                    {(results.length !== 0) ?
                        results.map((item, index) => {
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
                                        {(editButtonVisible !== false) &&
                                            <EditButton item={item}/>
                                        }
                                        {(deleteButtonVisible !== false) &&
                                            <DeleteButton deleteProps={handleDeleteProps(item)}
                                                          deleteFunction={deleteFunction}/>
                                        }
                                        {(checkButtonVisible !== false) &&
                                            <ControlledCheckbox item={item} addItem={addItemToList}/>
                                        }

                                    </div>
                                </td>
                            </tr>
                        )
                    })
                        :
                        <tr>
                            <td>
                                <Grid height="50" width="50" color="#4781FFBA" ariaLabel="grid-loading" radius="12.5"
                                      wrapperStyle={{justifyContent: "center", marginTop: "10%"}}
                                      wrapperClass="grid-wrapper" style={{}}/>
                            </td>
                        </tr>
                    }
                    </tbody>
                    : <tbody><tr><td>No result</td></tr></tbody>
                }

            </table>
        </div>
    )
};

export default MyTable;