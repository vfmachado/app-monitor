import React, { useState } from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText, TextField, Button } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/AddRounded';

import './AppTable.css';

const AppTable = () => {

    const [requestModal, setRequestModal] = useState(false);

    const showRequestModal = (value) => {
        setRequestModal(value);
    }

    return (

        <Paper width={1}>
            <Toolbar>
                <h2>Covid Osório</h2>
                <AddIcon className="add-request" onClick={() => showRequestModal(true)} />
            </Toolbar>
            <TableContainer>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Request</TableCell>
                            <TableCell>Expected Answer</TableCell>
                            <TableCell>Timer</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>Front-end</TableCell>
                            <TableCell>http://covid19.saude.osorio.rs.gov.br</TableCell>
                            <TableCell>Status 200</TableCell>
                            <TableCell>10 min</TableCell>
                            <TableCell>OK</TableCell>
                            <TableCell><ArrowDropDownIcon /></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Back-end</TableCell>
                            <TableCell>http://covid19.saude.osorio.rs.gov.br:3003</TableCell>
                            <TableCell>Status 200 JSON: Server Answering</TableCell>
                            <TableCell>10 min</TableCell>
                            <TableCell>OK</TableCell>
                            <TableCell><ArrowDropDownIcon /></TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Back-end</TableCell>
                            <TableCell>http://covid19.saude.osorio.rs.gov.br:3003/getUser/123</TableCell>
                            <TableCell>Status 200 JSON: User Data</TableCell>
                            <TableCell>10 min</TableCell>
                            <TableCell>ERROR</TableCell>
                            <TableCell><ArrowDropDownIcon /></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />


            <Dialog open={requestModal} onClose={() => showRequestModal(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Request</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill the fields bellow.
              </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => showRequestModal(false)} color="primary">
                        Cancel
              </Button>
                    <Button onClick={() => showRequestModal(false)} color="primary">
                        Subscribe
              </Button>
                </DialogActions>
            </Dialog>

        </Paper>

    );
}

export default AppTable;