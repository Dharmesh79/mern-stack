import { Button, Modal, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 50,
    p: 4,
  };
  
function Modelbox({value,setvalue,statement}) {

  // const handleOpen = () => setvalue(value);
  const handleClose = () => setvalue(!value)

    return (
        <div>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
<Modal
  open={value}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Warning:
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {statement}
    </Typography>
  </Box>
</Modal>

        </div>
    )
}

export default Modelbox
