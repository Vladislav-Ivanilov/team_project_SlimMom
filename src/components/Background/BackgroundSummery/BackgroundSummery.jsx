import { BGContainer, BgImages, WhiteWrapp, GreyWrapp } from './BackgroundSummery.styled';
import { Box, Grid } from '@mui/material/';
import { Summary } from 'components/Summary/Summary';

export const BackgroundSummery = () => {
  return (
    <>
      <BGContainer>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: '1', lg: '2' }}>
            <Grid item xs={12} lg={7}>
              <WhiteWrapp />
            </Grid>
            <Grid item xs={12} lg={5}>
              <GreyWrapp>
                <Summary />
              </GreyWrapp>
            </Grid>
          </Grid>
        </Box>
        <BgImages />
      </BGContainer>
    </>
  );
};
