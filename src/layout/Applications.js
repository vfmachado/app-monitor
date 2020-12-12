import React, { useState } from 'react';

import { Button, TextField } from '@material-ui/core';
import { AppInfoContext } from '../context/AppInfoContext';
import AppTable from '../components/AppTable';

const Applications = () => {

    const { newApp } = React.useContext(AppInfoContext);
    const globalState = React.useContext(AppInfoContext).state;

    const [appName, setAppName] = useState('');
    const [newAppForm, setNewAppForm] = useState(false);

    const showNewAppForm = () => {
        if (!newAppForm)    
            setNewAppForm(true);
    }

    const closeNewAppForm = () => {
        if (newAppForm)
            setNewAppForm(false);
    }

    return (
        <div>
            <h1>Your monitored Apps</h1>

            { !newAppForm &&
            <Button variant="outlined" color="primary"
                onClick={showNewAppForm}
            >
                + App
            </Button>
            }
            
            { newAppForm &&
            <div>
                <TextField id="standard-basic" label="App Name" onChange={e => setAppName(e.target.value)} />
                <Button variant="outlined" color="primary" onClick={() => {newApp(appName); closeNewAppForm()}}>Confirm</Button>
                <Button variant="outlined" color="secondary" onClick={closeNewAppForm}>Cancel</Button>
            </div>
            }

            { globalState.apps.map(app => (<AppTable />)) }

            <pre>
                {JSON.stringify(globalState, null, 4)}
            </pre>

        </div>
    );
}

export default Applications;