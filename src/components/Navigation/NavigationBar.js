import React from 'react'
import MainPage from './components/Main/MainPage'
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FavouritePage from './components/FavouritePage/FavouritePage';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const useStyles = makeStyles({
    root: {
        justifyContent: "flex-end",
        flexWrap: "initial !important"
    },
    item: {
        marginRight: "10px",
        marginTop: "5px"
    },
    title: {
        fontSize: "25px",
        marginLeft: "10px",
        display: "flex",
        color: "white"
    },
    mainRoot: {
        flexWrap: "initial",
        marginTop: "10px",
    },
    toggle: {
        marginTop: "0.3%",
        color: "white",

    }

});
function NavigationBar(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.mainRoot} >
            <Grid item >
                <Typography className={classes.title}>
                    Weather
                    <Typography className={classes.title}>
                        App
                    </Typography>
                </Typography>
            </Grid>
            <Grid container className={classes.root}>
                <Grid item className={classes.item}>
                    <MainPage />
                </Grid>

                <Grid item className={classes.item}>
                    <FavouritePage />
                </Grid>
                <Grid item className={classes.toggle}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={props.checked} onChange={props.handleChange} />}
                            label="Toggle"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NavigationBar

