import React, { useState, useEffect } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core';
import { Delete, Save, ImportExport, ThumbUpAlt, ThumbDown, ThumbUp } from '@material-ui/icons';

import { AppInfoContext } from '../context/AppInfoContext';
import AppTable from '../components/AppTable';

import './../App.css';
import Axios from 'axios';

const Applications = () => {

    const { newApp, setAll, clearAll } = React.useContext(AppInfoContext);
    const globalState = React.useContext(AppInfoContext).state;

    const [appName, setAppName] = useState('');
    const [newAppForm, setNewAppForm] = useState(false);

    const [importData, setImportData] = useState('');
    const [importModal, setImportModal] = useState(false);

    const [running, setRunning] = useState(false);
    const [testIntervalID, setTestIntervalID] = useState();


    const checkTestAnswer = (test, response) => {

        switch (test.expectedType) {
            case 'data':
                console.log(test.expectedAnswer, response.data);
                return test.expectedAnswer == response.data;
            case 'status':
                console.log(test.expectedAnswer, response.status);
                return test.expectedAnswer == response.status;
            default:
                return false;
        }
    }


    const startFunction = () => {

        setTestIntervalID(setInterval(async function () {
    
            console.log("Timeout")
            await runTests();
            
        }, 5000))
    }


    const stopFunction = () => {
        clearInterval(testIntervalID);
    }
    

    useEffect(() => {
    
        console.log("Running Changed", running)
        if (running)
            startFunction();
        else
            stopFunction();
      
    }, [running]);


    const runTests = async () => {
        console.log("Checking for requests", Date.now())

        for (const app of globalState.apps) {
            
            for (const test of app.tests) {
                let response = await Axios.get(test.address);
                
                console.log("TESTING", test.name);
                console.log(checkTestAnswer(test, response));

            }
        }
    }


    const showNewAppForm = () => {
        if (!newAppForm)
            setNewAppForm(true);
    }


    const closeNewAppForm = () => {
        if (newAppForm)
            setNewAppForm(false);
    }


    return (
        <>
            { !newAppForm &&
                <Button variant="outlined" color="primary"
                    onClick={showNewAppForm}
                >
                    Add App
                </Button>
            }

            <Button variant="outlined" color="primary"
                onClick={runTests}
            >
                Run All Once
            </Button>

            {
            running ? 
            <Button variant="outlined" color="primary"
            onClick={() => setRunning(false)}
            startIcon={<ThumbUp />}>
                Running
            </Button>
            :
            <Button variant="outlined" color="primary"
            onClick={() => setRunning(true)}
            startIcon={<ThumbDown />}>
                Stopped
            </Button>
            }


            { newAppForm &&
                <div className="newapp-form">
                    <TextField id="standard-basic" label="App Name" onChange={e => setAppName(e.target.value)} />
                    <Button variant="outlined" color="primary" onClick={() => { newApp(appName); closeNewAppForm() }}>Confirm</Button>
                    <Button variant="outlined" color="secondary" onClick={closeNewAppForm}>Cancel</Button>
                </div>
            }

            <br /><br />

            { globalState.apps.map(app => (<AppTable key={app.name} appInfo={app} />))}

            <br /><br /><br />

            <div className="div-buttons">
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<ImportExport />}
                    onClick={() => { setImportModal(true) }}
                >
                    Import Data
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<Save />}
                >
                    Save
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    startIcon={<Delete />}
                    onClick={() => { clearAll() }}
                >
                    Clear All
                </Button>
            </div>
            <pre className="description">
                {JSON.stringify(globalState, null, 4)}
            </pre>


            <Dialog open={importModal} onClose={() => setImportModal(false)} aria-labelledby="form-dialog-title" fullWidth={true}
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
                    <Button onClick={() => setImportModal(false)} color="primary">
                        Close
                    </Button>

                    <Button onClick={() => { setAll(importData); setImportModal(false); }} color="primary">
                        Import
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    );
}

export default Applications;