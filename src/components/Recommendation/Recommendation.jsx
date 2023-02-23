import { Button} from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { FoodList } from 'components/FoodList/FoodList';
import { useAuth } from 'hooks';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { dailyRate } from 'redux/daily-rate/selection';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const style = (theme) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: '64px 82px 80px',
  width: 508,

  overflow: 'auto',
});

export const Recommendation = memo(({ open, close, values }) => {
  const { user, isLoggedIn } = useAuth();
  let dailyRateState = useSelector(dailyRate);

  if (isLoggedIn) {
    dailyRateState = user.userData.dailyRate;
  }

  return (
    <Box component='div'       
    >
      <Modal
      sx={{display: {xs: 'none', md: 'block' }}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => close(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >

        <Fade in={open}>
          <Box sx={style}>
          <IconButton sx={{position: 'absolute', top: '24px', right: '24px'}} onClick={() => close(false)}>
            <ClearIcon />
        </IconButton>
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
        </Fade>
      </Modal>
    </Box>
  );
});
