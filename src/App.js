import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Search from './components/search/Search.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div>
        <AppBar title="Pexel Pics" showMenuIconButton={false} color="primary" />
        <Search />
        </div>
        </MuiThemeProvider>
      );
  }
}
export default App 