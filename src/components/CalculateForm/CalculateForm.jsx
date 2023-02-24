import { useState } from 'react';
import { getDayInfo } from 'redux/day-endpoints/operation';
import { useDispatch } from 'react-redux';

import { Form, Formik } from 'formik';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

import { useAuth } from 'hooks';
import { fetchDaily, fetchDailyRateByUserId } from 'redux/daily-rate/operation';
import { Recommendation } from 'components/Recommendation/Recommendation';
import { Summary } from 'components/Summary/Summary';

const initialValues = {
  weight: '',
  height: '',
  age: '',
  desiredWeight: '',
  bloodType: 1,
};

export const CalculateForm = () => {
  const { user, isLoggedIn } = useAuth();

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  const dateChoose = {
    date: '2020-12-31',
  };

  const handelSubmit = values => {
    const { bloodType, ...res } = values;
    const newFormData = {
      ...res,
      bloodType: Number(bloodType),
    };

    const userLoginInfo = {
      userId: user.id,
      userData: newFormData,
    };

    isLoggedIn ? dispatch(getDayInfo(dateChoose)) : handleModalOpen();

    isLoggedIn
      ? dispatch(fetchDailyRateByUserId(userLoginInfo))
      : dispatch(fetchDaily(newFormData));

    dispatch(getDayInfo(dateChoose));
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handelSubmit}>
        {({
          values,

          handleChange,
          setFieldValue,

          handleBlur,
        }) => (
          <Form>
            <Box
              component="div"
              sx={{
                display: { sm: 'flex' },
                flexDirection: { sm: 'column', md: 'row' },
                marginBottom: { sm: '40px', md: '60px' },
              }}
            >
              <Box
                component="div"
                sx={{
                  marginRight: { md: '32px' },
                  display: { sm: 'flex' },
                  flexDirection: { sm: 'column' },
                  maxWidth: '240px',
                }}
              >
                <TextField
                  fullWidth
                  name="height"
                  value={values.height || ''}
                  type="number"
                  onChange={handleChange}
                  required
                  id="standard-required"
                  label="Height"
                  variant="standard"
                  color="primary"
                  sx={{
                    label: { color: '#9B9FAA' },
                    input: { paddingBottom: { md: '20px' } },
                  }}
                />
                <TextField
                  fullWidth
                  name="age"
                  value={values.age || ''}
                  type="number"
                  onChange={handleChange}
                  required
                  id="standard-required"
                  label="Age"
                  variant="standard"
                  color="primary"
                  sx={{
                    label: { color: '#9B9FAA' },
                    input: { paddingBottom: { md: '20px' } },
                  }}
                />
                <TextField
                  fullWidth
                  value={values.weight || ''}
                  onChange={handleChange}
                  type="number"
                  name="weight"
                  required
                  id="standard-required"
                  label="Weight"
                  variant="standard"
                  color="primary"
                  sx={{
                    label: { color: '#9B9FAA' },
                    input: {
                      paddingBottom: { md: '20px' },
                      input: { paddingBottom: { md: '20px' } },
                    },
                  }}
                />
              </Box>
              <Box
                component="div"
                sx={{
                  display: { sm: 'flex' },
                  flexDirection: { sm: 'column' },
                  maxWidth: '240px',
                }}
              >
                <TextField
                  fullWidth
                  name="desiredWeight"
                  value={values.desiredWeight || ''}
                  onChange={handleChange}
                  type="number"
                  required
                  id="standard-required"
                  label="DesiredWeight"
                  variant="standard"
                  color="primary"
                  sx={{
                    label: { color: '#9B9FAA' },
                    input: { paddingBottom: { md: '20px' } },
                  }}
                />
                <FormControl
                  variant="standard"
                  sx={{
                    marginTop: { sm: '32px', md: '40px' },
                  }}
                >
                  <FormLabel
                    sx={{ color: '#9B9FAA' }}
                    id="demo-row-radio-buttons-group-label"
                  >
                    Blood type *
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="bloodType"
                  >
                    <FormControlLabel
                      onChange={handleChange}
                      value={1}
                      checked={values.bloodType === '1'}
                      control={<Radio sx={{ color: '#9B9FAA' }} />}
                      label="1"
                    />
                    <FormControlLabel
                      onChange={handleChange}
                      value={2}
                      checked={values.bloodType === '2'}
                      control={<Radio sx={{ color: '#9B9FAA' }} />}
                      label="2"
                    />
                    <FormControlLabel
                      onChange={handleChange}
                      value={3}
                      checked={values.bloodType === '3'}
                      control={<Radio sx={{ color: '#9B9FAA' }} />}
                      label="3"
                    />
                    <FormControlLabel
                      onChange={handleChange}
                      value={4}
                      checked={values.bloodType === '4'}
                      control={<Radio sx={{ color: '#9B9FAA' }} />}
                      label="4"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                display: 'flex',
                width: { sm: '320px', md: '100%' },
                justifyContent: { md: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  marginLeft: { sm: 'auto', md: '0', lg: '307px' },
                  marginRight: { sm: 'auto', md: '0' },
                }}
              >
                Start losing weight
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      {open && <Recommendation open={open} close={setOpen} />}

      {isLoggedIn && <Summary />}
    </>
  );
};
