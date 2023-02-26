import { AddProduct } from 'components/AddProduct/AddProduct';
import { ProductList } from 'components/ProductList/ProductList';
import { Calendar } from 'components/Calendar/Calendar';
import { BackgroundSummery } from 'components/Background/BackgroundSummery/BackgroundSummery';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { OpenModalBtn } from 'components/OpenModalBtn/OpenModalBtn';

export const DiaryPage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: '100%', lg: '743px' },
          paddingTop: { xs: '20px', md: '100px', lg: '140px' },
          paddingLeft: { xs: '20px', md: '32px', lg: '16px' },
          paddingRight: { xs: '20px', md: '126px' },
          paddingBottom: { xs: '60px', md: '55px' },
        }}
      >
        <Calendar />
        {!mobile && <AddProduct />}
        <ProductList />
        {mobile && <OpenModalBtn />}
        <BackgroundSummery />
      </Box>
    </>
  );
};
