import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form } from 'formik';
import { TextField, Autocomplete, Box, Button } from '@mui/material';
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

  const handleSubmit = (values, { resetForm }) => {
    const requestInfo = {
      date: day.date,
      productId: values.id,
      weight: values.weight,
    };
    if (requestInfo.productId === null) {
      resetForm();
      return;
    }
    dispatch(addEatenProduct(requestInfo));

    resetForm();
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
            <Box sx={{ display: { lg: 'flex' } }}>
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
                    sx={{ maxWidth: { xs: '280px', md: '240px' }, marginRight: { lg: '50px' } }}
                    type="input"
                    onChange={onChange}
                    {...params}
                    label="Enter product name"
                    name="name"
                    id="name"
                    variant="standard"
                  />
                )}
              />
              <TextField
                sx={{ maxWidth: { xs: '280px', md: '106px' }, marginRight: { md: '87px', lg: '60px' } }}
                id="grams"
                label="Grams"
                type="input"
                variant="standard"
                name="weight"
                value={values.weight}
                onChange={handleChange}
              />
              <Button type="submit" color="primary" aria-label="add" variant="circular">
                <AddIcon />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};
