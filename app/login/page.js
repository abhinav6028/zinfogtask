"use client"
import { Box, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Login from '../Components/Login/Login';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { PRIMARY_COLOR } from '@/utils';
import { useRouter } from 'next/navigation';

export default function Page() {


    const [showValidationMsg, setShowValidationMsg] = useState()

    return (
        <Grid
            container
            sx={{
                height: '100vh',
                background: `url("/Assets/loginimg.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container xs={10} sm={10} md={7} lg={4.3} sx={{
                bgcolor: '#FFFF',
                borderRadius: 7
            }}>


                <>
                    <Box
                        component="img"
                        src='/Assets/loginVectorimage.png'
                        sx={{ m: { xs: 2, sm: '', md: '', lg: 3 } }}
                    />
                    <Grid container sx={{ justifyContent: 'center' }}>
                        <Box
                            component="img"
                            src='/Assets/logo.png'
                            sx={{
                                width: { xs: 150, lg: '195.71px' },
                                // bgcolor: 'blue',
                                mt: { xs: - 3, sm: '', md: '', lg: '' }
                            }}
                        />
                    </Grid>
                    <Box
                        component="img"
                        src='/Assets/loginVectorimage.png'
                        sx={{ ml: 'auto', height: 60, width: 60, mr: { xs: 2, sm: 2, md: 3, lg: 5 }, mt: -2 }}
                    />
                </>

                <Grid container sx={{ justifyContent: 'center' }}>


                    <Login setShowValidationMsg={setShowValidationMsg} />

                </Grid>

                {
                    showValidationMsg && <Typography sx={{
                        textDecoration: 'underline',
                        width: '100%', textAlign: 'center', fontSize: 15, color: 'red', fontFamily: 'outfit', fontWeight: 600
                    }}>Wrong Credentials! your email Id or password entered is wrong</Typography>
                }


                <Grid container sx={{ alignItems: 'center', bgcolor: "", justifyContent: 'center', }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 5 }}>
                        <LocalPhoneIcon sx={{ bgcolor: "", fontSize: 24, color: PRIMARY_COLOR, }} />
                        <Typography
                            sx={{
                                color: PRIMARY_COLOR,
                                fontSize: 22,
                                fontFamily: 'outfit',
                                textAlign: 'center',
                                bgcolor: "",
                                fontWeight: '700'
                            }}
                        >
                            (+91) 9288008801
                        </Typography>
                    </Box>



                    <Typography sx={{ pb: 3, fontWeight: 600, fontSize: 12, width: '100%', textAlign: 'center' }}>
                        I hereby agree and accept the <span style={{ color: PRIMARY_COLOR }}>Terms of service and Privacy policy</span>
                    </Typography>



                </Grid>



            </Grid>
        </Grid>
    );
}