import React from 'react'
import ReactDOM from 'react-dom'
import PrefNames from './prefnames'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// Do not delete. This is required to authenticate the view in uPortal.
/* global token */

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
    fontSize: '16px'
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <PrefNames token={token} />
  </MuiThemeProvider>,
  document.querySelector('#preferrednames-root')
)
