import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Calendar = () => {
  const [date, setDate] = useState(Date.now());

  const handleChange = newValue => {
    setDate(newValue.format('YYYY-MM-DD'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} sx={{ width: '400px' }}>
        <DesktopDatePicker
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={handleChange}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default Calendar;
