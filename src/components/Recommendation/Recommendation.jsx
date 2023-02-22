import { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDaily, fetchDailyRateByUserId } from 'redux/daily-rate/operation';
import { dailyRate, notAllowedProducts } from 'redux/daily-rate/selection';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useAuth } from 'hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  overflow: 'auto',
  height: '500px',
};

export const Recommendation = memo(({ open, close, values }) => {
  const dispatch = useDispatch();
  const dailyRateState = useSelector(dailyRate);
  const notAllowedProductsState = useSelector(notAllowedProducts);
  const { user } = useAuth();

  const userLoginedInfo = {
    userId: user.id,
    userData: values,
  };

  function getRandomElement() {
    return Math.floor(Math.random() * notAllowedProductsState.length - 1);
  }

  useEffect(() => {
    'id' in user
      ? dispatch(fetchDailyRateByUserId(userLoginedInfo))
      : dispatch(fetchDaily(values));
  }, [values]);

  return (
    <div>
      <Modal
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <h2> Your recommended daily calorie intake is</h2>
              <p>{dailyRateState} ккал</p>
              <p>Foods you should not eat</p>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <ol>
                <li>{notAllowedProductsState[getRandomElement()]}</li>
                <li>{notAllowedProductsState[getRandomElement()]}</li>
                <li>{notAllowedProductsState[getRandomElement()]}</li>
                <li>{notAllowedProductsState[getRandomElement()]}</li>
              </ol>
            </Typography>
            <button>Start losing weight</button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
});
