import { useSelector, useDispatch } from 'react-redux';
import { Box, Paper, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/material/styles';

import { selectEatenProducts } from 'redux/day-endpoints/selectors';
import { deleteEatenProduct } from 'redux/day-endpoints/operation';
import { selectDateId } from 'redux/day-endpoints/selectors';
import { setDeleteProductId } from 'redux/day-endpoints/slice';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  boxShadow: 'none',
  borderBottom: ' 1px solid #E0E0E0;',
  color: theme.palette.text.secondary,
}));

const ProductList = () => {
  const dispatch = useDispatch();

  const dayId = useSelector(selectDateId);

  const eatenProducts = useSelector(selectEatenProducts);

  const onClickDeleteProduct = id => {
    if (!dayId) {
      return;
    }
    const requestInfo = {
      dayId: dayId,
      eatenProductId: id,
    };

    dispatch(deleteEatenProduct(requestInfo));
    dispatch(setDeleteProductId(id));
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        {eatenProducts.map(item => {
          return (
            <Grid container item key={item.id}>
              <Grid item xs={5}>
                <Item>{item.title}</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>{item.weight}</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>{Math.ceil(item.kcal)}</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>
                  <IconButton onClick={() => onClickDeleteProduct(item.id)}>
                    <CloseIcon sx={{ width: '12px', height: '12px' }} />
                  </IconButton>
                </Item>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductList;
