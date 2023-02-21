import { useDispatch } from 'react-redux';
import { Typography, TextField, Box, Button } from '@mui/material';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { register } from 'redux/auth/operation';

const validationSchemeForm = yup.object().shape({
  name: yup
    .string()
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles d'Artagnan"
    ),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(8)
    .required('Password may contain at least 8 characters'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const newUser = {
      username: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(register(newUser));

    //  console.log(newUser);
    resetForm();
    setSubmitting(false);
  };
  return (
    <Box>
      <Typography sx={{ marginBottom: '10px' }} variant="h6">
        Register
      </Typography>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchemeForm}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              <TextField
                required
                sx={{ width: '240px' }}
                InputLabelProps={{
                  shrink: true,
                }}
                name="name"
                label="Name"
                value={values.name}
                placeholder="Enter your name"
                variant="standard"
                onChange={handleChange}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />

              <TextField
                required
                sx={{ width: '240px' }}
                InputLabelProps={{
                  shrink: true,
                }}
                name="email"
                label="Email"
                value={values.email}
                placeholder="example@mail.com"
                variant="standard"
                onChange={handleChange}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                required
                sx={{ width: '240px' }}
                InputLabelProps={{
                  shrink: true,
                }}
                name="password"
                value={values.password}
                label="Password"
                type="password"
                placeholder="Min 8 characters"
                variant="standard"
                onChange={handleChange}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>

            <Button
              sx={{
                bgcolor: 'orange',
                borderRadius: '30px',
                marginX: '10px',
                marginY: '10px',
              }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>

            <Button
              sx={{
                color: 'orange',
                borderColor: 'orange',
                borderRadius: '30px',

                marginY: '10px',
              }}
              variant="outlined"
              href="#contained-buttons"
            >
              Log in
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
