import { Formik, Form } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
//import { useDispatch } from 'react-redux';
//import { fetchDaily } from 'redux/dailyRate/operation';
import { Recommendation } from 'components/Recommendation/Recommendation';
import { useState } from 'react';

const initialValues = {
  weight: '',
  height: '',
  age: '',
  desiredWeight: '',
  bloodType: 1,
};

export const CalculateForm = () => {
  const [formData, setFormData] = useState(initialValues);

  const [open, setOpen] = useState(false);
  const handleModalOpen = () => {
    setOpen(!open);
  };

  //const dispatch = useDispatch();

  const handelSubmit = (values, { resetForm }) => {
    const { bloodType, ...res } = values;
    const newFormData = {
      ...res,
      bloodType: Number(bloodType),
    };

    setFormData(newFormData);

    // isLoggedIn ? dispatch(fetchDaily(values)) : handleModalOpen();

    // dispatch(fetchDaily(newFormData));
    handleModalOpen();
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
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  name="height"
                  value={values.height || ''}
                  type="number"
                  onChange={handleChange}
                  required
                  id="standard-required"
                  label="height"
                  variant="standard"
                />
                <TextField
                  name="age"
                  value={values.age || ''}
                  type="number"
                  onChange={handleChange}
                  required
                  id="standard-required"
                  label="age"
                  variant="standard"
                />
                <TextField
                  value={values.weight || ''}
                  onChange={handleChange}
                  type="number"
                  name="weight"
                  required
                  id="standard-required"
                  label="weight"
                  variant="standard"
                />
              </div>
              <div>
                <TextField
                  name="desiredWeight"
                  value={values.desiredWeight || ''}
                  onChange={handleChange}
                  type="number"
                  required
                  id="standard-required"
                  label="desiredWeight"
                  variant="standard"
                />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
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
                      control={<Radio />}
                      label="1"
                    />
                    <FormControlLabel
                      onChange={handleChange}
                      value={2}
                      checked={values.bloodType === '2'}
                      control={<Radio />}
                      label="2"
                    />
                    <FormControlLabel
                      onChange={handleChange}
                      value={3}
                      checked={values.bloodType === '3'}
                      control={<Radio />}
                      label="3"
                    />
                    <FormControlLabel
                      onChange={handleChange}
                      value={4}
                      checked={values.bloodType === '4'}
                      control={<Radio />}
                      label="4"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Box>
            <Button variant="contained" color='primary' type="submit" >
              Start losing weight
            </Button>
          </Form>
        )}
      </Formik>
      {open && <Recommendation open={open} close={setOpen} values={formData} />}
    </>
  );
};
