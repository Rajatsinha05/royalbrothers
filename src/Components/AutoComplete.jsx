import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: "100%" }}
      outline="yellow"
      renderInput={(params) => <TextField {...params} label="location" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Indiranagar' },
  { label: 'The Godfather', year: 1972 },
  { label: "Yeshwanthpur"},
  { label: "Koramangala"},
  { label:"HSR Layout"},
   
  
];