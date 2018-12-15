import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey'

export default createMuiTheme({
  palette: {
    primary: {
      light: blue[400],
      main: blue[700],
      dark: blue[700],
    },
    secondary: {
      light: blue[500],
      main: blue[500],
      dark: blue[700],
    },
    error: {
      light: red[500],
      main: red[500],
      dark: red[500],
    },
    common: {
      light: blue[500],
      main: blue[700],
      dark: blue[700],
    },
    disabled: {
      light: grey[400],
      main: grey[700],
      dark: grey[700],
    }
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  },
  // https://stackoverflow.com/questions/45478685/change-onhover-colour-of-textfield-material-ui-v1/45498150#45498150
});
