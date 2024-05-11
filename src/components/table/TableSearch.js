import SearchButton from "../buttons/SearchButton";
import AddButton from "../buttons/AddButton";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/material/Box';
import {useState} from "react";
import {TableData} from "./TableData";
import FilterListIcon from '@mui/icons-material/FilterList';


const TableSearch = ({title, createPath, setQuery, query, filter ,setFilter,addButtonVisible}) => {

    const filterList = TableData[title.toLowerCase()]["filter"]
    const [open, setOpen] = useState(false);

    const handleOnChange = (position) => {
        const updatedCheckedState = filter.map((item, index) =>
            index === position ? !item : item
        );

        setFilter(updatedCheckedState);
    };
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        width: 100,
        top: 70,
        right: 0,
        left: -30,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };

    return (
        <div className="table-search">
            <h1>{title}</h1>
            <div className="actions">
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Box sx={{ position: 'relative'}} className={"filter"} onClick={handleClick}>
                        <FilterListIcon className={"icon"}/>
                        {open ? (
                            <Box sx={styles}>
                                <form action="" >
                                    {
                                        filterList.map((field, index) => {
                                            return (
                                                <div key={index}>
                                                    <input type="checkbox" id= {field} name={field} value={field}
                                                           checked={filter[index]} onChange={() => handleOnChange(index)}/>
                                                    <label>{field}</label><br/>
                                                </div>
                                            )
                                        })
                                    }
                                </form>
                            </Box>
                        ) : null}
                    </Box>
                </ClickAwayListener>
                <SearchButton setQuery={setQuery} query={query}/>
                {addButtonVisible && <AddButton path={createPath}/>}
            </div>

        </div>
    )

}

export default TableSearch;