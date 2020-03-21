import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import store from './store'
import Routes from './routes'
import history from './routes/history'
import firebase from './config/firebase'
import Login from './components/auth/login'
import AuthRoute from './components/auth/authRoute'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b5e20',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',        
      contrastText: '#ffcc00',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
})

function App() {
  const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
  }

  return (    
    <Provider store={store}>
      <ReactReduxFirebaseProvider { ...rrfProps }>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>          
            <Switch>
              {Routes.map((route, i) => <AuthRoute key={i} {...route} />)}
              <Route path="/login" component={Login}/> 
            </Switch>
          </ThemeProvider>       
        </ConnectedRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App;
