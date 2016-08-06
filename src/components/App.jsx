import React, { Component, PropTypes } from 'react';
import Header from './common/header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import customTheme from './theme';


class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
          <Header />
        </MuiThemeProvider>
          {this.props.children}

      </div>
    );
  }

}
App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
