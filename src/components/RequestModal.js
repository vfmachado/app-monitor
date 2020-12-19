import React, { useState } from 'react'

import { Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Button } from '@material-ui/core';

const RequestModal = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [expectedAnswer, setExpectedAnswer] = useState('');
    const [timer, setTimer] = useState(0);

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
                        onChange={e => setName(e.target.value)}
                    />

                    <TextField
                        margin="dense"
                        id="http"
                        label="HTTP Address"
                        type="text"
                        fullWidth
                        onChange={e => setAddress(e.target.value)}
                    />

                    
                    <TextField
                        margin="dense"
                        id="answer"
                        label="Expected Answer"
                        type="textarea"
                        fullWidth
                        multiline={true}
                        rows={5}                   
                        onChange={e => setExpectedAnswer(e.target.value)}
                    />

                    <TextField
                        margin="normal"
                        id="timer"
                        label="Time between successful requests"
                        type="number"
                        fullWidth
                        onChange={e => setTimer(e.target.value)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close} color="primary">
                        Cancel
              </Button>
                    <Button onClick={() => props.onSubmit({name, address, expectedAnswer, timer})} color="primary">
                        Create
              </Button>
                </DialogActions>
            </Dialog>
    );

}

export default RequestModal;
