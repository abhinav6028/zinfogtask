import { PRIMARY_COLOR } from '@/utils'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function ContactUs() {

    // Assets/loginVectorimage.png

    return (
        <Grid container sx={{
            justifyContent: 'center',
            bgcolor: '#eff8ff',
        }}>

            <Grid container sx={{
                justifyContent: 'center',
                mt: 3
            }} >
                <Box
                    component="img"
                    src='Assets/loginVectorimage.png'

                    sx={{
                        width: { xs: 35, sm: 40, md: 55, lg: 60 },
                        height: { xs: 35, sm: 40, md: 55, lg: 60 },
                        position: 'relative',
                        top: '',
                        mr: -5,
                        zIndex: 200,
                        height: 'fit-content',
                        display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' }
                    }}

                />


                <Grid container xs={11} sm={11} md={10} lg={10} sx={{ justifyContent: 'center', bgcolor: '' }
                } >
                    <Grid container xs={10} sm={10} md={8} lg={7} sx={{ bgcolor: '', justifyContent: 'center' }}>
                        <Typography sx={{
                            fontSize: { xs: 25, sm: 27, md: 35, lg: 40 },
                            fontWeight: 'bold',
                            color: PRIMARY_COLOR,
                            fontFamily: 'outfit'
                        }}>Feel free to contact us</Typography>

                        <Typography sx={{
                            width: '90%',
                            fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit" }, color: 'rgba(0, 0, 0, 1)',
                            textAlign: 'center',
                            mt: 1
                        }}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer
                        </Typography>

                        <Typography
                            sx={{
                                bgcolor: PRIMARY_COLOR,
                                fontFamily: 'outfit',
                                color: '#FFF',
                                py: { xs: 1, sm: 1, md: 1.3, lg: 1.3 },
                                px: { xs: 1.7, sm: 2, md: 2.5, lg: 3 },
                                mt: { xs: 1.5, sm: 1.6, md: 2., lg: 3 },
                                borderRadius: 1,
                                fontSize: { xs: 11, sm: 11, md: 15, lg: 16 },
                                cursor: 'pointer'
                            }}
                        >Contact us</Typography>
                    </Grid>

                    <Grid container>
                        <Box
                            component="img"
                            src='Assets/loginVectorimage.png'

                            sx={{
                                width: { xs: 35, sm: 40, md: 55, lg: 60 },
                                height: { xs: 35, sm: 40, md: 55, lg: 60 },
                                position: 'relative',
                                top: '',
                                ml: 30,
                                mt: -5,
                               
                                height: 'fit-content',
                                display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }
                            }}

                        />
                    </Grid>

                </ Grid>

                <Grid container>
                    <Box
                        component="img"
                        src='Assets/icon2.png'

                        sx={{
                            width: { xs: 80, sm: 80, md: 130, lg: 200 },
                            height: { xs: 80, sm: 80, md: 130, lg: 200 },
                            // position: 'relative',
                            mt: { xs: 'auto', sm: 'auto', md: 'auto', lg: -10 },
                            ml: 'auto',
                            // zIndex: 2000,
                            height: 'fit-content',
                            mr: { xs: 6, sm: 5, md: 4, lg: 4 }
                        }}

                    />
                </Grid>

            </Grid>


        </Grid>
    )
}

export default ContactUs

