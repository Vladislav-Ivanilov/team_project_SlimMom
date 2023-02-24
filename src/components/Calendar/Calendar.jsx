import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { getDayInfo } from 'redux/day-endpoints/operation';
import { setDate } from 'redux/day-endpoints/slice';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);

export const Calendar = () => {
  const [dateValue, setDateValue] = useState(formattedDate);
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const requestInfo = { date: formattedDate };
    dispatch(setDate(requestInfo));

    dispatch(getDayInfo(requestInfo));
  }, [dispatch, isLoggedIn]);

  const onChange = newValue => {
    setDateValue(newValue.format('YYYY-MM-DD'));
    const dateObject = { date: newValue.format('YYYY-MM-DD') };
    dispatch(getDayInfo(dateObject));
    dispatch(setDate(dateObject));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3} sx={{ width: '400px' }}>
        <DesktopDatePicker
          inputFormat="MM/DD/YYYY"
          value={dateValue}
          onChange={onChange}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};
