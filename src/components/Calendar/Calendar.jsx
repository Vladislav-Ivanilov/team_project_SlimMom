import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState } from 'react';

const Calendar = () => {
  const [date, setDate] = useState(Date.now());

  const onChange = newValue => {
    setDate(newValue.format('YYYY-MM-DD'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} sx={{ width: '400px' }}>
        <DesktopDatePicker
          inputFormat="MM/DD/YYYY"
          value={date}
          onChange={onChange}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default Calendar;
