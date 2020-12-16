import React, { useState } from 'react'

import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Button } from '@material-ui/core';

const RequestModal = (props) => {

    const [name, setName] = useState('');
    const [httpAddress, setHttpAddress] = useState('');
    const [expectedAnswer, setExpectedAnswer] = useState('');
    const [timer, setTime] = useState('');

    return (
        <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Request</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill the fields bellow.
              </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />

                    <TextField
                        margin="dense"
                        id="http"
                        label="HTTP Address"
                        type="text"
                        fullWidth
                    />

                    
                    <TextField
                        margin="dense"
                        id="answer"
                        label="Expected Answer"
                        type="textarea"
                        fullWidth
                        multiline={true}
                        rows={5}                   
                    />

                    <TextField
                        margin="normal"
                        id="timer"
                        label="Time between successful requests"
                        type="number"
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Cancel
              </Button>
                    <Button onClick={() => {console.log("Creating request.")}} color="primary">
                        Create
              </Button>
                </DialogActions>
            </Dialog>
    );

}

export default RequestModal;
