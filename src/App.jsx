import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Authorization from 'containers/Authorization';

class App extends React.Component {
  render() {
    return <Route component={Authorization} />;
  }
}

const mapStateToProps = state => ({
  authentificated: !!state.app.apiKey,
});

export default connect(mapStateToProps)(App);
