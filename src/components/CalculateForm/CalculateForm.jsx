import { Formik } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';


export const CalculateForm = () => {
  const initialValues = {
    id: "",
    weight: "",
    height: "",
    age: "",
    desiredWeight: "",
    bloodType: "",
  };

  return (
    <Formik>
      
      <div>
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
              required
              id="standard-required"
              label=""
              defaultValue="Height *"
              variant="standard"
            />
            <TextField
              required
              id="standard-required"
              label=""
              defaultValue="Age *"
              variant="standard"
            />
            <TextField
              required
              id="standard-required"
              label=""
              defaultValue="Current weight *"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label=""
              defaultValue="Desired weight *"
              variant="standard"
            />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Blood type *
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
              </RadioGroup>
            </FormControl>
          </div>
        </Box>
        <Button variant="contained">Start losing weight</Button>
      </div>
    </Formik>
  );
};
