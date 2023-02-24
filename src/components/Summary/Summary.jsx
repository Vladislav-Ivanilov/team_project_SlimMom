import { useSelector } from 'react-redux';
import { dayInfo } from 'redux/day-endpoints/selectors';
import { selectDay } from 'redux/day-endpoints/selectors';
import { FoodList } from 'components/FoodList/FoodList';
import { Box, Typography } from '@mui/material';

export const Summary = () => {
  const { kcalConsumed, kcalLeft, dailyRate, percentsOfDailyRate } =
    useSelector(dayInfo);
  const day = useSelector(selectDay);

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  let date = new Date()
    .toLocaleDateString('uk-UA', options)
    .split('.')
    .join('/');

  if (day) {
    date = day.date.split('-').reverse().join('/');
  }

  return (
    <>
      {/* <BackgroundSummery/> */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', md: 'row', lg: 'column'},
          justifyContent: {md: 'space-around'},
          maxWidth: {lg: '270px', md: '100%', xs: '270px',},
          width: '100%',
        }}
      >
<Box>
<Typography
          variant="h4"
          component="h4"
        >{`Summary for ${date}`}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box component="ul" sx={{ marginBottom: { lg: '60px', xs: '40px' } }}>
            <Typography variant="liSummery" component="li">
              Left
            </Typography>
            <Typography variant="liSummery" component="li">
              Consumed{' '}
            </Typography>
            <Typography variant="liSummery" component="li">
              Daily rate{' '}
            </Typography>
            <Typography variant="liSummery" component="li">
              n% of normal{' '}
            </Typography>
          </Box>
          <Box component="ul">
            <Typography variant="liSummery" component="li">
              {Math.round(kcalLeft)} kcal
            </Typography>
            <Typography variant="liSummery" component="li">
              {kcalConsumed} kcal
            </Typography>
            <Typography variant="liSummery" component="li">
              {dailyRate} kcal
            </Typography>
            <Typography variant="liSummery" component="li">
              {Math.round(percentsOfDailyRate)}%
            </Typography>
          </Box>
        </Box>
</Box>
<Box>
<Typography variant="h4" component="h4">
          Food not recommended
        </Typography>
        <FoodList />
</Box>
      </Box>
    </>
  );
};
