import React from 'react';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar } from '@material-ui/core';

const AppTable = () => {

    return (

        <Paper>
            <Toolbar>Table Title</Toolbar>
            <TableContainer>
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                            <TableCell>Content</TableCell>
                            <TableCell>A</TableCell>
                            <TableCell>B</TableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
            <br/>
        </Paper>

    );
}

export default AppTable;