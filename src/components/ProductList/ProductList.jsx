import { Box, Paper, Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const items = [
  { name: 'Eggplant', gram: '100g', kcal: '320kcal' },
  { name: 'Banana', gram: '100g', kcal: '320kcal' },
  { name: 'Potato', gram: '100g', kcal: '320kcal' },
  { name: 'Egg', gram: '100g', kcal: '320kcal' },
];

const ProductList = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={2}>
        {items.map(item => {
          return (
            <>
              <Grid item xs={5}>
                <Item>{item.name}</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>{item.gram}</Item>
              </Grid>
              <Grid item xs={2}>
                <Item>{item.kcal}</Item>
              </Grid>
              <Grid item xs={1}>
                <Item>
                  <IconButton>
                    <CloseIcon sx={{ width: '12px', height: '12px' }} />
                  </IconButton>
                </Item>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ProductList;
