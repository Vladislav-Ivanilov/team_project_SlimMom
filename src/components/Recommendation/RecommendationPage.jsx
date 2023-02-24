import { Button} from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FoodList } from 'components/FoodList/FoodList';
import Divider from '@mui/material/Divider';

const RecommendationPage = ({dailyRateState, values })=> {
    return(
        <Box>
        <Typography variant="h2" component="h2">
        Your recommended daily calorie intake is
                 </Typography>
                 <Typography variant='h3' component="p">
                 {dailyRateState} <Typography component='span' sx={{color: '#264061', fontSize: '16px'}}>ккал</Typography>
                 </Typography>
                 <Divider variant="middle" sx={{width:"330px", marginBottom: '12px', color: '#E0E0E0', marginLeft: "auto", marginRight: 'auto'}}/>
                 
                   <Box sx={{marginLeft: '89px', marginBottom: "40px"}}>
                   <Typography variant='h4' component='p'>Foods you should not eat</Typography>
                   <FoodList values={values} />
                   </Box>
                   <Box sx={{display: "flex"}}><Button variant='contained' sx={{marginLeft: 'auto', marginRight: "auto"}}>Start losing weight</Button ></Box>
               </Box>
    )
}

export default RecommendationPage