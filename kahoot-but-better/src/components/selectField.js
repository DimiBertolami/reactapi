
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import {Box} from "@mui/system";
import React, { useState } from "react";
const SelectField = props => {
    const { label } = props;
    const [value, setValue] = useState('');
    const handleChange = () => {};
    return (
        <div>
            <Box mt={3} width="100%">
                <FormControl size="small" fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <select value={value} label={label} onChange={handleChange}>
                        <MenuItem>Option1</MenuItem>
                        <MenuItem>Option2</MenuItem>
                        <MenuItem>Option3</MenuItem>
                    </select>
                </FormControl>
            </Box>
        </div>
    )
}
export default SelectField