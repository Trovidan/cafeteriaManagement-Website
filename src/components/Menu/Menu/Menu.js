import React from 'react';
import Filters from '../Filter/Filter.js'
import Card from '../Card/Card.js'
import Grid from '@material-ui/core/Grid';

export default function Menu(props){
    return(
        <React.Fragment>
            <Filters/>
            <div>
                <Grid container spacing={4}>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm ={6} xs={12}>
                        <Card />
                    </Grid>
                </Grid>
            </div>     
        </React.Fragment>
    )
}