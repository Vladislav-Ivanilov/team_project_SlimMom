import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { login } from 'redux/auth/operation';

const validationSchemeForm = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .min(8)
    .required('Password may contain at least 8 characters'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(login(values));

    resetForm();
  };

  return (
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
              //   width: '100%',
            }}
          >
            <Box
              component="div"
              sx={{
                gap: '40px',
                maxWidth: { sm: '280px', md: '240px' },
              }}
            >
              <TextField
                required
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  label: { color: '#9B9FAA' },
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
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  label: { color: '#9B9FAA' },
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

            <Box
              component="div"
              sx={{
                display: { sm: 'flex' },
                flexDirection: { sm: 'column', md: 'row' },
                marginTop: '60px',
                gap: '20px',
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ textTransform: 'none', marginRight: { md: '32px' } }}
              >
                Log in
              </Button>

              <Button
                sx={{
                  textTransform: 'none',
                }}
                variant="outlined"
              >
                <NavLink
                  to="/register"
                  sx={{
                    fontFamily: 'Verdana',
                    fontWeight: '700',
                    fontSize: ' 14px',
                    lineHeight: '1.2',
                    color: '#FC842D',
                    //  a: { color: '#FC842D' },
                  }}
                >
                  Register
                </NavLink>
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
