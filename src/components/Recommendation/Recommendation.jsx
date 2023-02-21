import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiely } from 'redux/DailyRate/operation';
import { dailyRate, notAllowedProducts } from 'redux/DailyRate/selection';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export const Recommendation = () => {
  const dispatch = useDispatch();
  const dailyRateState = useSelector(dailyRate);
  const notAllowedProductsState = useSelector(notAllowedProducts);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchDiely());
  }, []);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
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
                {notAllowedProductsState.map(product => {
                  return <li>{product} </li>;
                })}
              </ol>
            </Typography>
            <button>Start losing weight</button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
