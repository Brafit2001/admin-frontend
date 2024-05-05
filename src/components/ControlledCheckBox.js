import Checkbox from "@mui/material/Checkbox";
import {useState} from "react";


export default function ControlledCheckbox({item, addItem}) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        addItem(item, event.target.checked)
    };

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}