import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Typography, TextField, Box, Button } from '@mui/material';
import { register } from 'redux/auth/operation';

const validationSchemeForm = yup.object().shape({
  name: yup
    .string()
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles d'Artagnan"
    ),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup.string().min(8).required('Password may contain at least 8 characters'),
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

    resetForm();
    setSubmitting(false);
  };
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',

        flexDirection: { xs: 'column' },
        paddingTop: {
          sm: '40px',
          md: '160px ',
          lg: '160px ',
        },
        paddingLeft: {
          sm: '20px',
          md: '32px ',
          lg: '16px ',
        },
        paddingBottom: {
          sm: '100px',
          md: '419px ',
          lg: '179px ',
        },
        paddingRight: { sm: '20px' },
      }}
    >
      <Typography
        sx={{
          marginLeft: { xs: 'auto', md: '0px' },
          marginRight: { xs: 'auto', md: '0px' },
        }}
        variant="h5"
      >
        Register
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchemeForm}>
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '40px',

                  marginLeft: { xs: 'auto', md: '0px' },
                  marginRight: { xs: 'auto', md: '0px' },
                  marginBottom: '60px',
                  maxWidth: { sm: '280px', md: '240px' },
                  width: '100%',
                }}
              >
                <TextField
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    label: { color: '#9B9FAA' },
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
                  fullWidth
                  sx={{
                    label: { color: '#9B9FAA' },
                  }}
                  required
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
                  fullWidth
                  sx={{
                    label: { color: '#9B9FAA' },
                  }}
                  required
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

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  marginLeft: { xs: 'auto', md: '0px' },
                  marginRight: { xs: 'auto', md: '0px' },
                }}
              >
                <Button
                  sx={{
                    textTransform: 'capitalize',
                    marginBottom: { xs: '20px', md: '0px' },
                    marginRight: { md: '32px' },
                    padding: { xs: '13px 50px', lg: '13px 37px' },
                  }}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>

                <Button
                  sx={{
                    textTransform: 'capitalize',
                  }}
                  variant="outlined"
                  href="/team_project_SlimMom/login"
                >
                  Log in
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
