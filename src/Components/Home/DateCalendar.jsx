import { Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} my={5}>
          <DesktopDatePicker
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField onClick={(e) => setOpen(true)} {...params} />
            )}
            disablePast
          />
        </Stack>
      </LocalizationProvider>
    </>
  );
}