import React, { useState } from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';


const ImportJsonModal = (props) => {

    const [importData, setImportData] = useState('');

    return (
        <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title" fullWidth={true}
            maxWidth={"lg"}>
            <DialogTitle id="form-dialog-title">JSON DATA</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Paste your JSON code. All current data will be replaced
            </DialogContentText>
            </DialogContent>

            <TextField
                id="answer"
                type="textarea"
                style={{ margin: "20px" }}
                multiline={true}
                rows={10}
                onChange={e => setImportData(e.target.value)}
            />

            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                    Close
                </Button>

                <Button onClick={() => { props.setData(importData); props.onClose() }} color="primary">
                    Import
                </Button>
            </DialogActions>

        </Dialog>
    );

}

export default ImportJsonModal;
