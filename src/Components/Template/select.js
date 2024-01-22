import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{  minWidth: 260 }}>
      
        <InputLabel id="demo-simple-select-helper-label">Source</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="In Office"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>In Office</MenuItem>
          <MenuItem value={20}>Online</MenuItem>
          <MenuItem value={30}>At Client Place</MenuItem>
          <MenuItem value={30}>Onsite</MenuItem>
        </Select>
      </FormControl>

    </div>
  );
}