
import React from "react";

export const AppInfoContext = React.createContext();

export const AppInfoReducer = (prevState, action) => {
    switch (action.type) {
        case 'NEW_APP':
            action.appName = {name: action.appName};
            action.appName.tests = [];
            return {
                ...prevState,               
                apps: [...prevState.apps, action.appName],
            };

        case 'NEW_TEST':

            const test = action.testData;
            
            let index;
            for (index = 0; index < prevState.apps.length; index++) {
                if (prevState.apps[index].name === action.appName)
                    break;
            }

            const appsData = prevState.apps;
            appsData[index].tests = [...appsData[index].tests, test];

            return {
                ...prevState, 
                apps: [...appsData],
            };

        case 'CLEAR':
            return {
                ...prevState,
                apps: [],                
            };

        default:
            return prevState;
    }
};


export const AppInfoActions = (dispatch) => ({
    
    newApp: async appName => {

        dispatch({ type: 'NEW_APP', appName });
    
    },

    addTest: async (appName, testData) => {
        dispatch({type: 'NEW_TEST', appName, testData})
    },

    clearAll: async() => {
        dispatch({type: 'CLEAR'});
    }

});
