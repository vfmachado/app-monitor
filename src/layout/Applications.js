import React, { useState, useEffect } from 'react';

import { Button, TextField } from '@material-ui/core';
import { Delete, Save, ImportExport } from '@material-ui/icons';

import { AppInfoContext } from '../context/AppInfoContext';
import AppTable from '../components/AppTable';

import './../App.css';

const Applications = () => {

    const { newApp } = React.useContext(AppInfoContext);
    const globalState = React.useContext(AppInfoContext).state;

    const [appName, setAppName] = useState('');
    const [newAppForm, setNewAppForm] = useState(false);


    useEffect(() => {
    
        function timeout() {
            setTimeout(function () {
                
                console.log("Checking for requests")

                timeout();
            }, 5000);
        }

        //timeout();
    }, [])


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
            
            { newAppForm &&
            <div className="newapp-form">
                <TextField id="standard-basic" label="App Name" onChange={e => setAppName(e.target.value)} />
                <Button variant="outlined" color="primary" onClick={() => {newApp(appName); closeNewAppForm()}}>Confirm</Button>
                <Button variant="outlined" color="secondary" onClick={closeNewAppForm}>Cancel</Button>
            </div>
            }

            <br/><br/> 
            
            { globalState.apps.map(app => (<AppTable key={app.name} appInfo={app} />)) }

            <br/><br/><br/>

            <div className="div-buttons">
                <Button 
                    variant="contained" 
                    color="primary"
                    size="small"
                    startIcon={<ImportExport />} 
                    onClick={() => {}}
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
                    onClick={() => {}}
                >
                    Clear All
                </Button>
            </div>
            <pre className="description">
                {JSON.stringify(globalState, null, 4)}
            </pre>

        </>
    );
}

export default Applications;