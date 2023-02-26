import { useSelector, useDispatch } from 'react-redux';
import { AddProduct } from 'components/AddProduct/AddProduct';
import { Wrapp, AddWrap } from './AddMobile.styled';
import { IconButton, Box, Typography, Divider, Button } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { selectUserName } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operation';

export const AddMobile = ({ onClick }) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <Wrapp>
      <Box sx={{ backgroundColor: '#EFF1F3', padding: '4px 20px ', marginBottom: '80px', display: 'flex' }}>
        <IconButton onClick={() => onClick()}>
          <KeyboardReturnIcon sx={{ color: '#000' }} />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginLeft: 'auto' }}>
          <Typography variant="p" component="p" sx={{ marginRight: '20px' }}>
            {userName}
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: 'block',
              height: '32px',
              border: '2px solid #E0E0E0',
              padding: '4px, 0',
            }}
          />
          <Button type="button" variant="text" onClick={() => dispatch(logout())}>
            <Typography variant="p" component="p" sx={{ color: '#9B9FAA' }}>
              Exit
            </Typography>
          </Button>
        </Box>
      </Box>
      <AddWrap>
        <AddProduct />
      </AddWrap>
    </Wrapp>
  );
};
