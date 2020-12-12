
import React from "react";

export const AppInfoContext = React.createContext();

export const AppInfoReducer = (prevState, action) => {
    switch (action.type) {
        case 'NEW_APP':
            return {
                ...prevState,
                apps: [...prevState.apps, action.appName],
            };
        case 'NEW_TEST':
            return {
                ...prevState,
            };
        default:
            return prevState;
    }
};


export const AppInfoActions = (dispatch) => ({
    
    newApp: async appName => {

        dispatch({ type: 'NEW_APP', appName });
    
    },

});
