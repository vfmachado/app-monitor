
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

        case 'UPDATE_TEST':

            const testData = action.testData;

            //find APP
            let appIndex;
            for (appIndex = 0; appIndex < prevState.apps.length; appIndex++) {
                if (prevState.apps[appIndex].name === action.appName)
                    break;
            }
            const appsCopyData = prevState.apps;
            const app = appsCopyData[appIndex];

            //find TEST
            let testIndex;
            for (testIndex = 0; testIndex < app.tests.length; testIndex++) {
                if (app.tests[testIndex].name === action.testName)
                    break;
            }

            const oldTestData = appsCopyData[appIndex].tests[testIndex];
            appsCopyData[appIndex].tests[testIndex] = { ...oldTestData, ...testData };

            return {
                ...prevState,
                apps: [...appsCopyData],
            }


        case 'IMPORT':
            const data = JSON.parse(action.data);
            return {...prevState, ...data};

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
        dispatch({type: 'NEW_TEST', appName, testData});
    },

    updateTest: async (appName, testName, testData) => {
        dispatch({type: 'UPDATE_TEST', appName, testName, testData});
    },

    setAll: async (data) => {
        dispatch({type: 'IMPORT', data});
    },

    clearAll: async () => {
        dispatch({type: 'CLEAR'});
    }

});
