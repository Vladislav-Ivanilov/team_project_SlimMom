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
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector } from 'react-redux';
import { dailyRate } from 'redux/daily-rate/selection';
import { Typography } from '@mui/material';
// import RecommendationPage from './RecommendationPage';

const initialValues = {
  weight: '',
  height: '',
  age: '',
  desiredWeight: '',
  bloodType: '',
};

// setTimeout(() => {
//   alert('I love async JS!');
// }, 2000);

export const CalculateForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const { isLoggedIn, user } = useAuth();
  const [visible, setVisible] = useState('');
  const dailyRateState = useSelector(dailyRate);

  let { weight, bloodType, age, desiredWeight, height } = user.userData;

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleModalOpen = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();

  const handelSubmit = values => {
    const { weight, age, desiredWeight, height, bloodType } = values;
    const newFormData = {
      weight: weight ? weight : user.userData.weight,
      age: age ? age : user.userData.age,
      desiredWeight: desiredWeight
        ? desiredWeight
        : user.userData.desiredWeight,
      height: height ? height : user.userData.height,
      bloodType: bloodType ? Number(bloodType) : user.userData.bloodType,
    };

    setFormData(newFormData);

    mobile ? setVisible('none') : setVisible('block');

    const dateChoose = {
      date: '2020-12-31',
    };
    const userLoginInfo = {
      userId: user.id,
      userData: newFormData,
    };

    isLoggedIn
      ? dispatch(fetchDailyRateByUserId(userLoginInfo))
      : dispatch(fetchDaily(newFormData));

    isLoggedIn ? dispatch(getDayInfo(dateChoose)) : handleModalOpen();

    const userLoginedInfo = {
      userId: user.id,
      userData: newFormData,
    };
  };

  return (
    <>
      <Box
        sx={{
          display: {
            xs: dailyRateState > 0 ? 'none' : 'block',
            md: 'block',
            lg: 'block',
          },
        }}
      >
        <Box component="main" sx={{ display: 'flex' }}>
          <Box
            component="div"
            sx={{
              paddingTop: {
                sm: '32px',
                md: '100px ',
                lg: '140px ',
              },
              paddingLeft: {
                sm: '20px',
                md: '32px ',
                lg: '16px ',
              },
              paddingBottom: {
                sm: '100px',
                md: '398px ',
                lg: '111px ',
              },
              paddingRight: { sm: '20px' },
              marginLeft: { sm: 'auto', md: '0' },
              marginRight: { sm: 'auto', md: '0' },
            }}
          >
            <Typography component="h1" variant="h1">
              Calculate your daily calorie
              <br />
              intake right now
            </Typography>
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
                        value={
                          (values.height ? (height = false) : height) ||
                          values.height ||
                          ''
                        }
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
                        value={
                          (values.age ? (age = false) : age) || values.age || ''
                        }
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
                        value={
                          (values.weight ? (weight = false) : weight) ||
                          values.weight ||
                          ''
                        }
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
                        value={
                          (values.desiredWeight
                            ? (desiredWeight = false)
                            : desiredWeight) ||
                          values.desiredWeight ||
                          ''
                        }
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
                          defaultValue={bloodType}
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            value={1}
                            checked={
                              values.bloodType === '1'
                                ? (bloodType = '1')
                                : '' || bloodType == '1'
                            }
                            control={<Radio sx={{ color: '#9B9FAA' }} />}
                            label="1"
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            value={2}
                            checked={
                              values.bloodType === '2'
                                ? (bloodType = '2')
                                : '' || bloodType == '2'
                            }
                            control={<Radio sx={{ color: '#9B9FAA' }} />}
                            label="2"
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            value={3}
                            checked={
                              values.bloodType === '3'
                                ? (bloodType = '3')
                                : '' || bloodType == '3'
                            }
                            control={<Radio sx={{ color: '#9B9FAA' }} />}
                            label="3"
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            value={4}
                            checked={
                              values.bloodType === '4'
                                ? (bloodType = '4')
                                : '' || bloodType == '4'
                            }
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
          </Box>
          {isLoggedIn && <Summary />}
        </Box>
      </Box>
      {open && <Recommendation open={open} close={setOpen} values={formData} />}
    </>
  );
};
