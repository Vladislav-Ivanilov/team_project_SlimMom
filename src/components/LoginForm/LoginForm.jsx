import { Typography, TextField, Box, Button } from '@mui/material';
import { Formik, Form } from 'formik';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const newUser = {
      email: values.email,
      password: values.password,
    };

    console.log(newUser);
    resetForm();
    setSubmitting(false);
  };
  return (
    <Box>
      <Typography sx={{ marginBottom: '10px' }} variant="h6">
        Log In
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur }) => (
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
                name="email"
                label="Email"
                value={values.email}
                placeholder="example@mail.com"
                variant="standard"
                onChange={handleChange}
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
                placeholder="Min 8 symbols"
                variant="standard"
                onChange={handleChange}
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
              Log in
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
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
