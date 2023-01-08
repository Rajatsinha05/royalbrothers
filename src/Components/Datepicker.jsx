import React, { useState ,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Datepicker= () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = date => {
    setStartDate(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      minDate={new Date()} // Only future dates can be selected
    />
  );
};


export default Datepicker