// import * as React from "react";
import dayjs from "dayjs";
// import Stack from "@mui/material/Stack";
// import TextField from "@mui/material/TextField";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TimePicker } from "@mui/x-date-pickers/TimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { Stack, TextField } from "@mui/material";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";

export default function DateCalendar() {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // document.querySelector(".css-dplwbx-MuiPickersCalendarHeader-label")
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} my={5}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            // minDate={value}
            disablePast
            // PopperProps={{
            //   sx: popperSx,
            // }}
          />
        </Stack>
      </LocalizationProvider>
      {/* <MaterialUIPickers /> */}
    </>
  );
}
