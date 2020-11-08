import React from "react";
import logoKidsLoop from "./kidsloop_min_logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveButton from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Link from '@material-ui/core/Link';
import { useEffect, useState } from "react";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";




const appliedTheme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 16,
      marginBottom: 15
    },
    h3: {
      fontSize: 12,
    },
  },

});

const useStyles2 = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "0 30px"
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default function App() {
  return (
    <ThemeProvider theme={appliedTheme}>
      <Container maxWidth="xs" boxShadow={3}>
      
        <div className="App">
          <header className="App-header">
          
          <img src={logoKidsLoop} alt="website logo" className="logo" />
            <Typography variant="h2" component="div">
              Sign In
            </Typography>
            <Grid
              container
              direction="column"
              /*justify="center"
              alignItems="center"*/
              /*className={classes.root}*/
            >
              <Grid
              container
              direction="column"
              justify="space-around"
              alignItems="stretch"
              className="App-inputs"
              >
                <TextField
                  variant="outlined"
                  color="secondary"
                  type="text"
                  label="Email or Phone *"
                  placeholder="Email or Phone *"
                ></TextField>
                <TextField
                  variant="outlined"
                  color="secondary"
                  type="password"
                  label="Password *"
                  placeholder="password"
                ></TextField>
              </Grid>
            </Grid>
            <Grid container 
              direction="row"
              justify="space-between"
              alignItems="center">
            <Link
              component="button"
              variant="h3"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
            Forgot Password ?
            </Link>
            <ButtonGroup 
              size="medium" 
              variant="contained"
              >
              <Button color="primary">Sign In</Button>
            </ButtonGroup>
            </Grid>
            <Grid container 
              direction="row"
              justify="space-between"
              alignItems="flex-start">
            <Link
              component="button"
              className="App-account-create"
              variant="h3"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
            Create an account
            </Link>
            </Grid>
  

          </header>
        </div>
       
        
      <div className="footer">
      <Box display="flex" p={1} >
        <Box p={1} flexGrow={1} >
        
        <Grid container direction="row" alignItems="center">
         
         
            <Grid item>  <BrightnessHighIcon/>  </Grid>
            <div class="dropdown">
            <Grid item>Select language ▼</Grid>
         
            <div class="dropdown-content"><a href="#">English</a><a href="#">Korean</a><a href="#">Spanish</a></div>
         </div>
         </Grid>
        </Box>
        <Box p={1} >
          Help
        </Box>
        <Box p={1} >
          Privacy
        </Box>
        <Box p={1} >
          Terms
        </Box>
      </Box>
 
    </div>


    
      </Container>

    </ThemeProvider>
  );
}


export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};

