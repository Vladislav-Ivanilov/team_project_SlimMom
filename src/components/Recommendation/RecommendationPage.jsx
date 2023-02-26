import { Button, Box, Typography, Divider } from '@mui/material';
import { FoodList } from 'components/FoodList/FoodList';
import { useAuth } from 'hooks';

export const RecommendationPage = ({ dailyRateState, values }) => {
  const { isLoggedIn } = useAuth();
  return (
    <Box>
      <Box sx={{ display: 'flex', padding: '0 20px' }}>
        <Typography variant="h2" component="h2" sx={{ marginLeft: { xs: 'auto' }, marginRight: { xs: 'auto' } }}>
          Your recommended daily calorie intake is
        </Typography>
      </Box>
      <Typography variant="h3" component="p">
        {Math.round(dailyRateState)}{' '}
        <Typography component="span" sx={{ color: '#264061', fontSize: '16px' }}>
          ккал
        </Typography>
      </Typography>
      <Divider
        variant="middle"
        sx={{ maxWidth: '330px', marginBottom: '12px', color: '#E0E0E0', marginLeft: 'auto', marginRight: 'auto' }}
      />

      <Box sx={{ paddingLeft: { xs: '20px', md: '89px' }, marginBottom: '40px', marginRight: 'auto' }}>
        <Typography variant="h4" component="p">
          Foods you should not eat
        </Typography>
        <FoodList values={values} />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button
          href={isLoggedIn ? console.log('dary') : '/team_project_SlimMom/register'}
          variant="contained"
          sx={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: { xs: '119px', md: '0' } }}
        >
          Start losing weight
        </Button>
      </Box>
    </Box>
  );
};
