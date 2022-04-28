import React from 'react';
import  Grid  from '@mui/material/Grid';
import DisplayUser from '../../DisplayUser/DisplayUser';



const DashboardHome = () => {
   
    return (
        <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
       <DisplayUser></DisplayUser>
        </Grid>
       
      </Grid>

    );
};

export default DashboardHome;