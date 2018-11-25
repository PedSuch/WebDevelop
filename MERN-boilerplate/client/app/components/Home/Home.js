import React, { Component } from 'react';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import '../../styles/home.scss';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import { FormHelperText } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  bigAvatar: {
    width:  100,
    height: 100,
  },
});

function TextButtons(props) {
const { classes } = props;
return (
  <>
  <header></header>
  <div className="CenterTitle">
    <p className="CenterSuchite">/Soo-Chi-Teh/</p>
    <p className="CenterTime">{new Date().toLocaleTimeString()} {new Date().toLocaleDateString()} San Diego, Ca</p>
    <div className={classes.row}>
    <Avatar alt="bunny" src="/assets/img/logo3.png" className={classes.bigAvatar}/>
    </div>
    <Button variant="outlined" color="default" href="/mainpage" className={classes.button}>
      Enter Main Site
    </Button>
  </div>
  </>
);
}

export default withStyles(styles)(TextButtons);

  