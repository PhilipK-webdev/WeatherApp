import { Grid } from '@material-ui/core'
import React from 'react'
import Dashboard from './Dashboard/Dashboard';

function Main() {

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Dashboard />
            </Grid>
        </Grid>
    )
}

export default Main
