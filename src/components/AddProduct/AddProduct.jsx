import { Formik, Form } from 'formik';
import { TextField, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddProduct = () => {
  const initialValues = {
    name: '',
    grams: '',
  };

  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <TextField
            id="name"
            label="Enter product name"
            type="search"
            variant="standard"
            name="name"
          />
          <TextField
            id="grams"
            label="Grams"
            type="search"
            variant="standard"
            name="grams"
          />
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Form>
      </Formik>
    </>
  );
};

export default AddProduct;
