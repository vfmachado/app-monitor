import React, { useState } from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/AddRounded';

import './AppTable.css';
import RequestModal from './RequestModal';

const AppTable = () => {

    const [openRequestModal, setOpenRequestModal] = useState(false);

    const showRequestModal = (value) => {
        setOpenRequestModal(value);
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

            <RequestModal 
                open={openRequestModal} 
                close={() => showRequestModal(false)}
            />          

        </Paper>

    );
}

export default AppTable;