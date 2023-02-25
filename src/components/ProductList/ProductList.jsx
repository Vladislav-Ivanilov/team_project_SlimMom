import { useSelector, useDispatch } from 'react-redux';
import { Box, Paper, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/material/styles';

import { selectEatenProducts } from 'redux/day-endpoints/selectors';
import { deleteEatenProduct } from 'redux/day-endpoints/operation';
import { selectDateId } from 'redux/day-endpoints/selectors';
import { setDeleteProductId } from 'redux/day-endpoints/slice';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  boxShadow: 'none',
  borderBottom: ' 1px solid #E0E0E0;',
  color: theme.palette.text.secondary,
}));

export const ProductList = () => {
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
        marginTop: { xs: '30px', md: '60px' },
      }}
    >
      <Grid container spacing={1}>
        {eatenProducts.map(item => {
          return (
            <Grid container item key={item.id} sx={{ maxWidth: '100%' }}>
              <Grid
                item
                xs={5}
                sx={{
                  marginRight: { lg: '48px' },
                  maxWidth: { xs: '130px', md: '240px' },
                }}
              >
                <Item sx={{ padding: { lg: '0 0 20px 0' } }}>{item.title}</Item>
              </Grid>
              <Grid sx={{ marginRight: { lg: '32px' }, maxWidth: { xs: '49px', md: '106px' } }} item xs={2}>
                <Item>{item.weight}</Item>
              </Grid>
              <Grid item xs={2} sx={{ marginRight: { lg: '32px' }, maxWidth: { xs: '58px', md: '106px' } }}>
                <Item>{Math.ceil(item.kcal)}</Item>
              </Grid>
              <Grid item xs={1}>
                <Item sx={{ maxWidth: { sx: '10px', md: '12px' }, border: 'none' }}>
                  <IconButton onClick={() => onClickDeleteProduct(item.id)} sx={{ padding: '0px' }}>
                    <CloseIcon sx={{ width: { sx: '10px', md: '12px' } }} />
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
