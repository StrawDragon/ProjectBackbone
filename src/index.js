import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import App from './App';

import { initStore, injectGlobalStyles } from 'services';
import themeSC from 'sources/themeSC';
import themeMui from 'sources/themeMui';

const moment = require('moment');
require('moment/locale/ru');

moment.locale('ru');

require('es6-shim');

injectGlobalStyles();

export const { store, history } = initStore();

// необходимо для перезаписи стилей mui через SC
// https://material-ui-next.com/customization/css-in-js/#css-injection-order
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
jss.options.insertionPoint = 'jss-insertion-point';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={themeMui}>
          <ThemeProvider theme={themeSC}>
            <Route component={App} />
          </ThemeProvider>
        </MuiThemeProvider>
      </JssProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

