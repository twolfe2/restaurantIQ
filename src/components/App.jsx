import React, { Component, PropTypes } from 'react';
import Header from './common/header';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <MuiThemeProvider>
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
