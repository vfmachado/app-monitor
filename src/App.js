import React, { useMemo, useReducer } from 'react';

import './App.css';
import { AppInfoReducer, AppInfoContext, AppInfoActions } from './context/AppInfoContext';
import Applications from './layout/Applications';

const App = () => {

    const [state, dispatch] = useReducer(AppInfoReducer, {apps: []});
    const appInfoContext = useMemo(() => AppInfoActions(dispatch), []);

    return (

        <AppInfoContext.Provider value={{ state, ...appInfoContext }}> 
        <div className="app">
            <header className="app-header">
            
            </header>

            <div className="app-main">

                <Applications>
                    
                </Applications>

            </div>

            <footer className="app">

            </footer>

        </div>
        </AppInfoContext.Provider>

    );
}

export default App;
