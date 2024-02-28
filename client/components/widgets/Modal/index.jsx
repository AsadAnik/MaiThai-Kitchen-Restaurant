import { Box, Typography, Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '47%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #eee',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
};

const CustomModal = ({ open, handleClose, title, children }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {children}
                </Typography>
            </Box>
        </Modal>
    );
};

export default CustomModal;