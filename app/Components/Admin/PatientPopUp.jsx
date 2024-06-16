import { Grid, Typography } from '@mui/material'
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function PatientPopUp({ popUp, setPopUp, clickedItem }) {
    return (
        <Grid container className='animate__animated  animate__backInDown ' style={{
            zIndex: 2000, position: 'absolute', top: 0, justifyContent: 'center', alignItems: 'center',
            position: 'fixed',
            display: popUp ? 'flex' : 'none'
        }}>
            <Grid container className='alert-danger' sx={{
                bgcolor: "rgba(184, 250, 206, 1)",
                mt: 10,
                transition: 1,
                justifyContent: 'space-between', borderRadius: 3,
                py: { xs: 1, sm: 1, md: 2, lg: 2 },
                border: '2px solid rgba(80, 80, 80, 1)'
            }} xs={10} sm={10} md={9} lg={4.5}>
                <Grid container xs={10} sm={10} md={10} lg={10}>
                    <Typography sx={{
                        ml: {
                            xs: 1, sm: 1, md: 2, lg: 2
                        },
                        fontWeight: 'bold',
                        color: "rgba(80, 80, 80, 1)",
                        fontFamily: 'outfit',
                    }}>{clickedItem?.patientName}	</Typography>

                    <Grid container>
                        <Typography sx={{ fontSize: { xs: 13, sm: 15, md: 17, lg: 17, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit" }, ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>Age : {clickedItem?.age} Y</Typography>
                        <Typography sx={{ fontSize: { xs: 13, sm: 15, md: 17, lg: 17, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit" }, ml: 4 }}>Gender : {clickedItem?.gender}</Typography>

                    </Grid>
                    <Grid container>
                        <Typography sx={{ fontSize: { xs: 13, sm: 15, md: 17, lg: 17, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit" }, ml: { xs: 1, sm: 1, md: 2, lg: 2 } }}>Bill No : {clickedItem?.hospitalId} </Typography>
                        <Typography sx={{ fontSize: { xs: 13, sm: 15, md: 17, lg: 17, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit" }, ml: 4 }}>Bill Date :{clickedItem?.date}</Typography>

                    </Grid>
                </Grid >

                <Grid>
                    <Typography xs={2} sm={2} md={2} lg={2} sx={{
                        mr: 2,
                        color: "rgba(80, 80, 80, 1)",
                        cursor: 'pointer',
                    }}
                        onClick={() => setPopUp(false)}
                    >
                        <CloseIcon />
                    </Typography>
                </Grid>

            </Grid >
        </Grid >
    )
}

export default PatientPopUp
