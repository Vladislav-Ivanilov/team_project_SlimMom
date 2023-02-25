import { AddProduct } from 'components/AddProduct/AddProduct';
import { ProductList } from 'components/ProductList/ProductList';
import { Calendar } from 'components/Calendar/Calendar';
import BackgroundSummery from 'components/Background/BackgroundSummery/BackgroundSummery';
import { Box } from '@mui/material';

export const DiaryPage = () => {
  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: '100%', lg: '743px' },
          paddingTop: { xs: '40px', md: '100px', lg: '140px' },
          paddingLeft: { xs: '20px', md: '32px', lg: '16px' },
          paddingRight: { xs: '0', md: '126px' },
          paddingBottom: { xs: '60px', md: '55px' },
        }}
      >
        <Calendar />
        <AddProduct />
        <ProductList />
        <BackgroundSummery />
      </Box>
    </>
  );
};
