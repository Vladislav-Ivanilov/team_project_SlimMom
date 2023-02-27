import { useSelector, useDispatch } from 'react-redux';
import { Box, Paper, Grid, IconButton, List, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { selectEatenProducts, selectDateId } from 'redux/day-endpoints/selectors';
import { deleteEatenProduct } from 'redux/day-endpoints/operation';
import { setDeleteProductId } from 'redux/day-endpoints/slice';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  fontSize: '14px',
  lineHeight: '1.2',
  textAlign: 'start',
  boxShadow: 'none',
  borderBottom: '1px solid #E0E0E0',
  color: theme.palette.dark,
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
    <Box sx={{ position: 'relative', height: { lg: '337px', md: '260px' }, marginBottom: { xs: '60px', md: '0' } }}>
      {eatenProducts.length > 0 ? (
        <>
          <List
            sx={{
              flexGrow: 1,
              maxHeight: { lg: '320px', md: '240px', xs: '220px' },
              marginTop: { xs: '30px', md: '60px' },
              maxWidth: { md: '650px' },
              overflowY: eatenProducts.length > 3 ? 'scroll' : 'hidden',
            }}
          >
            <Grid container spacing={1}>
              {eatenProducts.map(item => {
                return (
                  <Grid container item key={item.id} sx={{ maxWidth: '100%', alignItems: 'flex-end' }}>
                    <Grid
                      item
                      xs={5}
                      sx={{
                        marginRight: { lg: '48px', md: '22px', xs: '8px' },
                        marginBottom: '16px',
                        maxWidth: { xs: '100%', md: '240px' },
                      }}
                    >
                      <Item sx={{ paddingBottom: { md: '20px', xs: '8px' } }}>{item.title}</Item>
                    </Grid>
                    <Grid
                      sx={{
                        marginRight: { lg: '32px', md: '22px', xs: '8px' },
                        maxWidth: { xs: '100%', md: '106px' },
                        marginBottom: '16px',
                      }}
                      item
                      xs={2}
                    >
                      <Item sx={{ paddingBottom: { md: '20px', xs: '8px' }, textAlign: 'right' }}>{item.weight} g</Item>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      sx={{
                        marginRight: { lg: '32px', md: '22px', xs: '8px' },
                        marginBottom: '16px',
                        maxWidth: { xs: '100%', md: '106px' },
                      }}
                    >
                      <Item sx={{ paddingBottom: { md: '20px', xs: '8px' }, textAlign: 'right' }}>
                        {Math.ceil(item.kcal)} kcal
                      </Item>
                    </Grid>
                    <Grid item xs={1} sx={{ marginBottom: { lg: '32px', xs: '15px' } }}>
                      <Item sx={{ paddingBottom: { md: '20px', xs: '8px' }, border: 'none' }}>
                        <IconButton onClick={() => onClickDeleteProduct(item.id)} sx={{ padding: '0px' }}>
                          <CloseIcon />
                        </IconButton>
                      </Item>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </List>
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              width: '650px',
              height: '70px',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, #ffffff 42.19%)',
              position: 'absolute',
              bottom: '0',
              left: '0',
            }}
          />
        </>
      ) : (
        <Typography component="h2" variant="h2" sx={{ marginTop: '60px' }}>
          Start adding your products
        </Typography>
      )}
    </Box>
  );
};
