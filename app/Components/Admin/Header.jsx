import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
    return (
        <Grid container sx={{ justifyContent: 'center', py: 1, boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.5)" }}>
            <Grid md={11} lg={11} container bgcolor="" sx={{ justifyContent: "space-between", alignItems: "center" }}>

                <Box
                    component="img"
                    src='/Assets/logo.png'
                    sx={{
                        width: { xs: 150, lg: '195.71px' },
                        // bgcolor: 'blue',
                        cursor: 'pointer'
                    }}
                />

                <Grid sx={{ display: "flex", alignItems: "center" }}>

                    <Typography sx={{
                        color: "#808080",
                        fontSize: 18, fontWeight: 600, fontFamily: 'outfit',
                        mr: 4,
                        cursor: 'pointer'
                    }}>Username</Typography>

                    <Box
                        component="img"
                        src='/Assets/avatar.png'
                        sx={{ mr: 4, cursor: 'pointer' }}

                    />


                    <Box
                        component="img"
                        src='/Assets/sign-out.png'
                        sx={{ cursor: 'pointer' }}
                    />



                </Grid>
            </Grid>
        </Grid >
    )
}
