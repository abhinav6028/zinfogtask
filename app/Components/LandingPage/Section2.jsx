import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { PRIMARY_COLOR } from '@/utils';

function Section2() {


    const items = ["Liver Function Test", "Vitamin D (25-OH)", "CBC", "Diabetes Screening", "COVID-RTPCR", "Thyroid profile Total", "Thyroid profile Total", "CBC", "Vitamin D (25-OH)", "Diabetes Screening", "Liver Function Test", "Thyroid profile Total", "CBC", "Liver Function Test", "COVID-RTPCR "]

    return (

        <>

            <Grid container sx={{ justifyContent: "center", bgcolor: 'rgba(255, 255, 255, 1)' }}>
                <Typography sx={{
                    fontWeight: 'bold', fontFamily: "outfit",
                    fontSize: { xs: 20, sm: 22, md: 23, lg: 25 }, width: '100%', textAlign: 'center', mt: 5
                }}>
                    Popular Lab in your city
                </Typography>

                <Grid container xs={11} sm={11} md={10} lg={10} sx={{
                    // bgcolor: { xs: 'green', sm: 'blue', md: 'pink', lg: "red" },
                    mt: 3, justifyContent: 'center', flexWrap: 'wrap' // Add this line
                }}>
                    {
                        Array.from({ length: 25 }, (_, i) => (
                            <Grid
                                container
                                lg={1.5}
                                xs={2}
                                sm={1}
                                md={1}
                                key={i}
                                component="img"
                                src={`/Assets/user/labs/${i}.png`}
                                sx={{
                                    my: { xs: .8, sm: 1, md: 1.3, lg: 1.5 },
                                    mx: { xs: 1, sm: 1, md: 1.5, lg: 2 },
                                    height: { xs: 20, sm: 25, md: 35, lg: 50 },

                                }}
                            />
                        ))
                    }
                </Grid>

            </Grid>


            <Grid container sx={{ justifyContent: "center", mb: 5 }}>
                <Typography sx={{
                    fontWeight: 'bold', fontFamily: "outfit",
                    fontSize: { xs: 20, sm: 22, md: 23, lg: 25 }, width: '100%', textAlign: 'center', mt: 5
                }}>
                    Popular Lab in your city
                </Typography>

                <Grid container xs={11} sm={11} md={10} lg={10} sx={{ mt: 3, justifyContent: 'center', bgcolor: '' }}>
                    {[...Array(3)].map((_, i) => (
                        <Grid container key={i} direction="row" sx={{ marginLeft: `${i * 2}rem`, justifyContent: 'center' }}>
                            {[...Array(6 - i)].map((_, j) => (
                                <Grid item key={j} sx={{ bgcolor: '', width: 'fit-content' }}>

                                    <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(245, 247, 248, 1)', mt: 1.5, mx: 1, px: 1, py: .7, borderRadius: 6 }}>
                                        <Box>
                                            <VaccinesIcon sx={{ bgcolor: PRIMARY_COLOR, p: .5, borderRadius: '50%', color: '#FFF' }} />
                                        </Box>

                                        <Typography sx={{
                                            fontFamily: 'outfit',
                                            color: 'rgba(80, 80, 80, 1)', ml: 1
                                        }}>{items[i * 2 + j + 1]} </Typography>
                                    </Box>


                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>

            </Grid>

        </>
    )
}

export default Section2