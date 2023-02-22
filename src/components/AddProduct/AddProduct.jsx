import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import debounce from 'lodash.debounce';
import {
  Formik,
  Form,
  // useFormik
} from 'formik';
import { TextField, Fab, Autocomplete } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { productSearch } from 'redux/productSearch/operation';
// import { useAuth } from 'hooks';
// import { fetchDailyRateByUserId } from 'redux/daily-rate/operation';
import { selectProduct } from 'redux/productSearch/selection';
// import { addEatenProduct } from 'redux/day-endpoints/operation';

const initialValues = {
  name: '',
  weight: '',
};

const AddProduct = () => {
  const dispatch = useDispatch();
  // const [selectedProduct, setSelectedProduct] = useState('');
  // const [query, setQuery] = useState('');

  // useEffect(() => {
  //   dispatch(productSearch(query));
  // }, [dispatch, query]);

  const handleSubmit = (values, actions) => {
    // actions.setFieldValue();
    console.log(values);
    console.log(actions);
    // actions.resetForm();
  };

  // const formik = useFormik({
  //   initialValues: {
  //     name: '',
  //     weight: '',
  //   },

  //   onSubmit: handleSubmit,
  // });

  // const onSubmit = (values, { resetForm }) => {
  //   const newProduct = {
  //     name: values.name,
  //     weight: values.weight,
  //   };
  //   console.log(newProduct);
  //   // resetForm();
  //   console.log('values', values);
  //   // dispatch(addEatenProduct(newProduct));
  // };

  const onChange = evt => {
    dispatch(productSearch(evt.target.value));
  };

  // const debounceQuery = debounce(e => {
  //   setQuery(e.target.value);
  // }, 300);

  const products = useSelector(selectProduct);
  // console.log('products', products);
  const autocompleteOptions = products.map(product => {
    return {
      label: product.title.ua,
      id: product._id,
      // calories: product.calories,
    };
  });

  // console.log('selectedProduct', selectedProduct);

  // console.log('autocompleteOptions:', autocompleteOptions);
  // console.log('query', query);
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleBlur }) => (
          <Form>
            <Autocomplete
              // value={query}
              disablePortal
              // onChange={(_, value) => {
              //   setSelectedProduct(value);
              // }}
              id="combo-box-demo"
              options={autocompleteOptions}
              sx={{ width: 300 }}
              renderInput={params => (
                <TextField
                  // value={formik.values.name}
                  type="input"
                  onChange={onChange}
                  // onChange={debounceQuery}
                  {...params}
                  label="Enter product name"
                  name="name"
                  id="name"
                />
              )}
            />
            <TextField
              // onChange={handleChange}
              // value={formik.values.weight}
              id="grams"
              label="Grams"
              type="input"
              variant="standard"
              name="weight"
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

export default AddProduct;
