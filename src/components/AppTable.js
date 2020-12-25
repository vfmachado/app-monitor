import React, { useState } from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/AddRounded';

import './AppTable.css';
import RequestModal from './RequestModal';
import { AppInfoContext } from '../context/AppInfoContext';

const AppTable = ({appInfo}) => {

    const { addTest } = React.useContext(AppInfoContext);
    
    const [openRequestModal, setOpenRequestModal] = useState(false);


    const showRequestModal = (value) => {
        setOpenRequestModal(value);
    }


    const addRequest = (data) => {
        showRequestModal(false);
        addTest(appInfo.name, data);
    }


    return (

        <Paper width={1}>
            <Toolbar>
                <h2>{appInfo.name}</h2>
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
                            <TableCell>Last Exec</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        
                        {appInfo.tests.map(test => {
                            return (<TableRow key={test.name}>
                                <TableCell>{test.name}</TableCell>
                                <TableCell>{test.address}</TableCell>
                                <TableCell>{test.expectedAnswer}</TableCell>
                                <TableCell>{test.timer}</TableCell>
                                <TableCell>{test.lastExec}</TableCell>
                                <TableCell>{test.status}</TableCell>
                                <TableCell><ArrowDropDownIcon /></TableCell>
                            </TableRow>);
                        })}
        
                    </TableBody>
                </Table>
            </TableContainer>
            <br />

            <RequestModal 
                open={openRequestModal} 
                close={() => showRequestModal(false)}
                onSubmit={(data) => addRequest(data)}
            />          

        </Paper>

    );
}

export default AppTable;