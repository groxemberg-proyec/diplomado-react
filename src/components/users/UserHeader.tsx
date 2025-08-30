import { Box, Button, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface Props {
  handleOpenCreateDialog: () => void;
}

export const UserHeader = ({ handleOpenCreateDialog }: Props) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography variant="h5" fontWeight={'bold'}>
        Gestión de usuarios
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpenCreateDialog}
        sx={{ borderRadius: 3 }}
      >
        Nuevo usuario
      </Button>
    </Box>
  );
};
