import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { PRIMARY_COLOR } from '@/utils';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {



    return (
        <Grid container sx={{ justifyContent: 'center', bgcolor: '#' }}>

            <Grid container xs={11} sm={11} md={10} lg={10} sx={{
                justifyContent: { xs: 'center', sm: 'center', md: 'space-between', lg: 'space-between' },
                py: 8
            }}>

                <Grid container xs={10} sm={10} md={4.5} lg={4.5} sx={{ bgcolor: "" }}>

                    <Box
                        component="img"
                        src='/Assets/user/userLogo.png'
                        sx={{ cursor: 'pointer' }}
                    />


                    <Typography sx={{
                        width: '60%',
                        fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit" }, color: 'rgba(80, 80, 80, 1)',
                        textAlign: 'start',
                        my: 2.5
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                    </Typography>

                    <Grid container>
                        {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YouTubeIcon].map((Icon, index) => (
                            <Box key={index} sx={{ ml: 1 }}>
                                <Icon sx={{ fontSize: 27, color: '#3f51b5', cursor: 'pointer' }} />
                            </Box>
                        ))}
                    </Grid>

                </Grid>













                <Grid container xs={10} sm={10} md={2.3} lg={2.3} sx={{ bgcolor: "", }}>
                    <Box sx={{ mt: { xs: 1, sm: 0, md: 0, lg: 0 } }}>

                        <Typography
                            sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 20 }, fontWeight: 500, color: PRIMARY_COLOR, fontFamily: "outfit" }}
                        >Cities</Typography>

                        <Box sx={{ mt: { xs: .6, sm: 3, md: 4, lg: 4 } }}>
                            {
                                ["Bangalore", "Delhi", "Noida", "Hydrabad"]?.map((data, index) =>
                                    <Typography sx={{
                                        fontSize: { xs: 14, sm: 15, md: 17, lg: 18 }, fontFamily: "outfit", color: 'rgba(80, 80, 80, 1)',
                                        mt: {
                                            xs: index > 0 && .6,
                                            sm: index > 0 && .8,
                                            md: index > 0 && 1,
                                            lg: index > 0 && 1
                                        }, cursor: 'pointer'
                                    }}>{data}</Typography>

                                )
                            }

                        </Box>


                    </Box>
                </Grid>

                <Grid container xs={10} sm={10} md={2.3} lg={2.3} sx={{ bgcolor: "", justifyContent: '' }}>
                    <Box sx={{ mt: { xs: 1, sm: 0, md: 0, lg: 0 } }}>
                        <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 20 }, fontWeight: 500, color: PRIMARY_COLOR, fontFamily: "outfit" }} >Support</Typography>

                        <Box sx={{ mt: { xs: 1, sm: 3, md: 4, lg: 4 } }}>
                            {
                                ["Getting started", "Help center", "Report a bug", "Refund policy", "Call support"]?.map((data, index) =>
                                    <Typography sx={{
                                        fontSize: { xs: 14, sm: 15, md: 17, lg: 18 }, fontFamily: "outfit", color: 'rgba(80, 80, 80, 1)',
                                        mt: {
                                            xs: index > 0 && .6,
                                            sm: index > 0 && .8,
                                            md: index > 0 && 1,
                                            lg: index > 0 && 1
                                        }, cursor: 'pointer'
                                    }}>{data}</Typography>

                                )
                            }

                        </Box>


                    </Box>


                </Grid>

                <Grid container xs={10} sm={10} md={2.3} lg={2.3} sx={{ bgcolor: "" }}>
                    <Box sx={{ mt: { xs: 1, sm: 0, md: 0, lg: 0 } }}>

                        <Typography sx={{ fontSize: { xs: 16, sm: 18, md: 20, lg: 20 }, fontWeight: 500, color: PRIMARY_COLOR, fontFamily: "outfit" }}>Cities</Typography>

                        <Box sx={{ mt: { xs: 1, sm: 3, md: 4, lg: 4 } }}>


                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mt: { xs: .6, sm: .8, md: 1, lg: 1 }, cursor: 'pointer' }}>

                                <MailOutlineIcon sx={{ fontSize: 18, color: 'rgba(80, 80, 80, 1)' }} />
                                <Typography sx={{ fontSize: { xs: 15, sm: 15, md: 17, lg: 18 }, fontFamily: "outfit", color: 'rgba(80, 80, 80, 1)', ml: 1 }}> info@accesslabz.com</Typography>

                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mt: 1 }}>

                                <PhoneIcon sx={{ fontSize: 18, color: 'rgba(80, 80, 80, 1)', }} />
                                <Typography sx={{ fontSize: { xs: 15, sm: 15, md: 17, lg: 18 }, fontFamily: "outfit", color: 'rgba(80, 80, 80, 1)', ml: 1 }}> (+91) 9288008801</Typography>

                            </Box>

                            <Box sx={{ display: 'flex', alignItems: '', cursor: 'pointer', mt: 1 }}>

                                <Box>
                                    <LocationOnIcon sx={{ fontSize: 18, color: 'rgba(80, 80, 80, 1)', mt: 1 }} />
                                </Box>

                                <Box sx={{ ml: 1 }}>
                                    <Typography sx={{
                                        fontSize: { xs: 15, sm: 15, md: 17, lg: 18 }, fontFamily: "outfit", color: 'rgba(80, 80, 80, 1)',
                                        mt: { xs: .6, sm: .8, md: 1, lg: 1 }, cursor: 'pointer', cursor: 'pointer'
                                    }}>Door No. 28/69/1,</Typography>
                                    <Typography sx={{
                                        fontSize: { xs: 15, sm: 15, md: 17, lg: 18 }, fontFamily: "outfit", color: 'rgba(80, 80, 80, 1)',
                                        mt: { xs: .6, sm: .8, md: 1, lg: 1 }, cursor: 'pointer'
                                    }}>Patturaikkal, Thrissur,</Typography>
                                    <Typography sx={{ fontSize: { xs: 15, sm: 15, md: 17, lg: 18 }, fontFamily: "outfit", color: 'rgba(80, 80, 80, 1)', mt: { xs: .6, sm: .8, md: 1, lg: 1 }, cursor: 'pointer' }}>Kerala 680008, India</Typography>

                                </Box>


                            </Box>


                        </Box>

                    </Box>


                </Grid>
            </Grid>
        </Grid >
    )
}

export default Footer
