import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PRIMARY_COLOR } from '@/utils';
import SearchIcon from '@mui/icons-material/Search';

function Banner() {
    return (
        <Grid container sx={{
            height: '85vh',
            backgroundImage: `url("/Assets/user/banner.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mt: { xs: 7, sm: 8, md: 10, lg: 10 },
            justifyContent: 'center',
            alignItems: 'center',
        }} >
            <Grid container xs={11.5} sm={11.5} md={11} lg={10} sx={{
                // bgcolor: { xs: 'pink', sm: 'orange', md: 'green', lg: 'red' },
                height: 'fit-content'
            }}>
                <Typography sx={{
                    fontSize: { xs: 22, sm: 33, md: 40, lg: 40 },
                    color: '#FFF',
                    fontWeight: 600, fontFamily: 'outfit',
                    width: { xs: '80%', md: "50%", lg: '40%' },
                    lineHeight: 1.3
                }}>
                    We have served more
                    than 7000+ customers
                </Typography>

                <Grid container>
                    <Typography sx={{
                        fontSize: { xs: 15, sm: 20, md: 22, lg: 18 },
                        color: '#FFF', fontFamily: 'outfit',
                        width: { xs: '80%', md: "60%", lg: '30%' },
                        lineHeight: 1.3,
                        my: { xs: 1.5, sm: 1, md: 2, lg: 2.5 }
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit mollis quisque senectus massa lobortis, scelerisque maecenas sagittis faucibus integer
                    </Typography>
                </Grid>

                <Grid container sx={{
                    bgcolor: '#FFF', py: 1,
                    borderRadius: 1
                }}>
                    <Grid container xs={2} sm={2} md={2} lg={2}
                        sx={{
                            // bgcolor: 'blue',
                            // display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' }
                            alignItems: 'center',
                            borderRight: `2px solid ${PRIMARY_COLOR}`,
                            py: .5
                        }}>
                        <LocationOnIcon sx={{ color: PRIMARY_COLOR, ml: 2, fontSize: 25 }} />

                        <Typography sx={{
                            fontFamily: 'outfit',
                            fontSize: { xs: '', sm: 18, md: 18, lg: 18 },
                            ml: 2,
                            display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' }
                        }}>Banglore</Typography>


                    </Grid>



                    <Grid container xs={9} sm={9} md={9} lg={9.5} sx={{ bgcolor: '', alignItems: 'center' }}>
                        <Box sx={{ width: '95%', height: '100%', bgcolor: '', ml: 2, display: 'flex', alignItems: 'center' }}>
                            <input
                                type="text"
                                placeholder='Search for test ...'
                                style={{ fontSize: "18px" }}
                            />
                        </Box>
                    </Grid>

                    <Grid container xs={1} sm={1} md={1} lg={.5} sx={{ bgcolor: '', justifyContent: 'center', alignItems: "center", color: PRIMARY_COLOR }}>
                        <SearchIcon />
                    </Grid>
                </Grid>

                <Grid container>
                    <Typography sx={{
                        fontSize: { xs: 15, sm: 20, md: 22, lg: 18 },
                        color: '#FFF', fontFamily: 'outfit',
                        width: { xs: '80%', md: "60%", lg: '30%' },
                        lineHeight: 1.3,
                        my: { xs: 1.5, sm: 1, md: 2, lg: 2.5 }
                    }}>
                        We are associated with more than 25+ lab.
                    </Typography>
                </Grid>

            </Grid>
        </Grid>
    );
}

export default Banner;