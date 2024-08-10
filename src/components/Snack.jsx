import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const Snack = ({ isOpen, handleClose }) => {
  return (
    <Snackbar
        open = {isOpen}
        onClose = {handleClose}
        autoHideDuration={3000}
    >
        <Alert severity="success">
            Товар добавлен в корзину!
        </Alert>
    </Snackbar>
  )
}

export default Snack