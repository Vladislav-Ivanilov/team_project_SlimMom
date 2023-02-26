import { memo } from 'react';
import { useSelector } from 'react-redux';

import { Backdrop, Box, Fade, Modal, IconButton, useMediaQuery } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';

import { useAuth } from 'hooks';

import { dailyRate } from 'redux/daily-rate/selection';

import { GoBack } from '../GoBack/GoBack';
import { RecommendationPage } from './RecommendationPage';

const style = {
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
};

export const Recommendation = memo(({ open, close, values }) => {
  const { user, isLoggedIn } = useAuth();
  let dailyRateState = useSelector(dailyRate);

  if (isLoggedIn) {
    dailyRateState = user.userData.dailyRate;
  }

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  if (mobile) {
    return (
      <>
        <GoBack />
        <RecommendationPage dailyRateState={dailyRateState} values={values} />
      </>
    );
  } else {
    return (
      <Modal
        sx={{ display: { xs: 'none', md: 'block' } }}
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
            <IconButton sx={{ position: 'absolute', top: '24px', right: '24px' }} onClick={() => close(false)}>
              <ClearIcon />
            </IconButton>
            <RecommendationPage dailyRateState={dailyRateState} values={values} />
          </Box>
        </Fade>
      </Modal>
    );
  }
});
