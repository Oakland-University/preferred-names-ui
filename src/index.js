import React from 'react';
import ReactDOM from 'react-dom';
import PrefNames from './prefnames';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Roboto',
        fontSize: '16px'
    }
})
    ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <PrefNames />
    </MuiThemeProvider>,
    document.querySelector('#root')
);
