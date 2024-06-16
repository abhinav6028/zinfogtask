"use client"
import { Box, Grid, Typography, useScrollTrigger } from '@mui/material'
import React, { useState } from 'react'
import Login from '../Components/Login/Login'
import SentEmail from '../Components/Login/SentEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { PRIMARY_COLOR } from '@/utils';
import { useRouter } from 'next/navigation';
import EnterOtp from '../Components/Login/EnterOtp';
import Password from '../Components/Login/Password';


export default function page() {

    const router = useRouter()

    const [showForm, setShowForm] = useState(1)

    return (
        <Grid container sx={{ height: "100vh" }}>



            <Grid container lg={6} sx={{ height: "100vh", bgcolor: "", justifyContent: 'center', alignItems: 'center' }}>
                <Grid container xs={10} sm={10} md={7} lg={7} sx={{
                    bgcolor: "",
                    borderRadius: 7,
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
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

                        {showForm == 1 ? <SentEmail setShowForm={setShowForm} /> : ''}

                        {showForm == 2 ? <EnterOtp setShowForm={setShowForm} /> : ''}

                        {showForm == 3 ? <Password setShowForm={setShowForm} /> : ''}




                    </Grid>

                    <Grid container sx={{ justifyContent: 'center', my: 1 }}>
                        <Typography onClick={() => router.push('/login')} sx={{ fontWeight: "700", color: PRIMARY_COLOR, fontFamily: 'outfit', cursor: 'pointer' }}>&lt;&lt; <span style={{ textDecoration: 'underline' }}>Back to Login</span> </Typography>
                    </Grid>

                    <Grid container>
                        <Box
                            component="img"
                            src='/Assets/loginVectorimage.png'
                            sx={{
                                height: 80, width: 80, mr: { xs: 2, sm: 2, md: 3, lg: 5 },
                                ml: 2
                            }}
                        />
                    </Grid>

                    <Grid container sx={{ justifyContent: "center" }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5, mb: 2 }}>
                            <LocalPhoneIcon sx={{ bgcolor: "", fontSize: 15, color: PRIMARY_COLOR, }} />
                            <Typography
                                sx={{
                                    color: PRIMARY_COLOR,
                                    fontSize: 15,
                                    fontFamily: 'outfit',
                                    textAlign: 'center',
                                    bgcolor: "",
                                    fontWeight: '700',
                                    cursor: 'pointer'
                                }}
                            >
                                (+91) 9288008801
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>






            <Grid container md={6} lg={6} sx={{
                display: { xs: 'none', sm: 'none', md: 'flex', lg: "flex" }
            }}>

                <Grid
                    component="img"
                    src='/Assets/womenimage.png'
                    sx={{ height: '100vh', ml: "auto", width: 600 }}
                >

                </Grid>

            </Grid>


        </Grid >
    )
}


// <SentEmail />
