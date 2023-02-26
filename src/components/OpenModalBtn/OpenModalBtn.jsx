import { useState } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AddMobile } from './AddMobile';

export const OpenModalBtn = () => {
  const [openAdd, setOpenAdd] = useState(false);

  const onClick = () => {
    setOpenAdd(!openAdd);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button type="submit" color="primary" aria-label="add" variant="circular" onClick={onClick}>
          <AddIcon />
        </Button>
      </Box>
      {openAdd && <AddMobile onClick={onClick} />}
    </>
  );
};
