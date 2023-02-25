import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form } from 'formik';
import { TextField, Fab, Autocomplete } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { productSearch } from 'redux/productSearch/operation';
import { selectProduct } from 'redux/productSearch/selection';
import { addEatenProduct } from 'redux/day-endpoints/operation';
import { selectDay } from 'redux/day-endpoints/selectors';

export const AddProduct = () => {
  const dispatch = useDispatch();

  const day = useSelector(selectDay);

  const initialValues = {
    weight: '',
    id: null,
  };

  const handleSubmit = (values, actions) => {
    const requestInfo = {
      date: day.date,
      productId: values.id,
      weight: values.weight,
    };
    if (!values.id) {
      return;
    }
    dispatch(addEatenProduct(requestInfo));

    actions.resetForm();
    values.weight = '';
  };

  const onChange = evt => {
    dispatch(productSearch(evt.target.value));
  };

  const products = useSelector(selectProduct);
  const autocompleteOptions = products.map(product => {
    return {
      label: product.title.ua,
      id: product._id,
    };
  });

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={autocompleteOptions}
              sx={{ width: 300 }}
              value={values.name}
              onChange={(e, newValue) => {
                handleChange(e);
                if (!newValue) {
                  return;
                }
                setFieldValue('id', newValue.id);
              }}
              renderInput={params => (
                <TextField
                  type="input"
                  onChange={onChange}
                  {...params}
                  label="Enter product name"
                  name="name"
                  id="name"
                />
              )}
            />
            <TextField
              id="grams"
              label="Grams"
              type="input"
              variant="standard"
              name="weight"
              value={values.weight}
              onChange={handleChange}
            />
            <Fab type="submit" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Form>
        )}
      </Formik>
    </>
  );
};
