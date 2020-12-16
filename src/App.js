import React, { useMemo, useReducer } from 'react';

import './App.css';
import { AppInfoReducer, AppInfoContext, AppInfoActions } from './context/AppInfoContext';
import Applications from './layout/Applications';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import WebIcon from '@material-ui/icons/Web';
import { GitHub } from '@material-ui/icons';

const App = () => {

    const [state, dispatch] = useReducer(AppInfoReducer, {apps: []});
    const appInfoContext = useMemo(() => AppInfoActions(dispatch), []);

    return (

        <AppInfoContext.Provider value={{ state, ...appInfoContext }}> 
        <div className="app">
            <header className="app-header">
                <h1>My App Monitor</h1>
            </header>

            <div className="app-main">

                <Applications>
                    
                </Applications>

            </div>

            <footer className="app-footer">
                <p>Made with {`<3`} by Vinícius Machado</p>
                <div className="social">
                    <WebIcon fontSize="large"/>
                    <LinkedInIcon fontSize="large" />
                    <InstagramIcon fontSize="large" />
                    <FacebookIcon fontSize="large" />
                    <GitHub fontSize="large"/>
                </div>
            </footer>

        </div>
        </AppInfoContext.Provider>

    );
}

export default App;
