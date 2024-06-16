"use client"
import { Box, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { DATA1 } from '@/app/data';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PhotoSizeSelectLargeTwoTone } from '@mui/icons-material';
import RestoreIcon from '@mui/icons-material/Restore';

function BlogSection() {

    const [startingItem, setStartingItem] = useState(0)
    const [endingItem, setEndingItem] = useState(4)

    return (
        <Grid container sx={{ justifyContent: '', bgcolor: '#f5f7f8' }}>


            <Grid container xs={11} sm={11} md={10} lg={11} sx={{ my: { xs: 2, sm: 2, md: 3, lg: 3 }, bgcolor: '', ml: 'auto' }}>

                <Typography sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'outfit', width: '100%' }}>Latest blog</Typography>

                {
                    startingItem > 0 &&

                    <ArrowBackIcon
                        onClick={() => {
                            setStartingItem(startingItem - 4)
                            setEndingItem(endingItem - 4)
                        }}
                        sx={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: '1rem',
                            bgcolor: '#FFF',
                            zIndex: 200,
                            height: 'fit-content',
                            boxShadow: '0px 0px 48px 0px rgba(31, 108, 171, 0.1)',
                            p: { xs: 1, sm: 1.5, md: 2, lg: 2 },
                            borderRadius: "50%",
                            cursor: 'pointer',
                            color: 'rgba(31, 110, 174, 1)'
                        }}
                    />
                }

                {
                    endingItem < DATA1?.length &&

                    <ArrowForwardIcon
                        onClick={() => {
                            setStartingItem(startingItem + 4)
                            setEndingItem(endingItem + 4)
                        }}
                        sx={{
                            position: 'relative',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            right: '1rem',
                            bgcolor: '#FFF',
                            zIndex: 200,
                            height: 'fit-content',
                            ml: 'auto',
                            boxShadow: '0px 0px 48px 0px rgba(31, 108, 171, 0.1)',
                            p: { xs: 1, sm: 1.5, md: 2, lg: 2 },
                            borderRadius: "50%",
                            cursor: 'pointer',
                            color: 'rgba(31, 110, 174, 1)'
                        }}
                    />
                }




                <Grid container sx={{ width: '100%', flexWrap: 'nowrap', overflowX: 'hidden', mt: -5 }}>

                    {

                        DATA1?.slice(startingItem, endingItem)?.map((data, index) =>

                            <Grid container xs={5.5} sm={3} md={3.4} lg={3.4} style={{ flex: '0 0 auto', background: '', justifyContent: '' }}>

                                <Grid container xs={11} sm={11} md={11} lg={11} sx={{
                                    background: '#FFF', justifyContent: 'center',
                                    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
                                    borderRadius: 1,
                                    boxShadow: "0px 0px 15px 0px rgba(62, 193, 208, 0.05)"
                                }}>


                                    <Grid container xs={11} sm={11} md={11} lg={11} sx={{ background: '', justifyContent: 'center', py: 1.5 }}>

                                        <Grid container>
                                            <Box
                                                component="img"
                                                src="/Assets/user/blog.png"
                                                sx={{
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    objectFit: 'cover',
                                                }}
                                            >
                                            </Box>
                                        </Grid>

                                        <Typography sx={{
                                            fontSize: { xs: 12, sm: 12, md: 13, lg: 22 }, fontFamily: "outfit", fontWeight: 'bold', width: '100%',
                                            my: { xs: 1, sm: 1.2, md: 1.5, lg: 1.5 },
                                        }}>{data?.itemName}</Typography>


                                        <Grid container>
                                            <Typography sx={{
                                                width: '90%',
                                                fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit" }, color: 'rgba(128, 128, 128, 1)',
                                                textAlign: 'start'
                                            }}>
                                                is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been
                                            </Typography>
                                        </Grid>

                                        <Grid container sx={{ mt: 1, alignItems: 'center' }}>
                                            <RestoreIcon sx={{
                                                fontSize: { xs: 12, sm: 13, lg: 13, lg: 15 },
                                                color: 'rgba(128, 128, 128, 1)'
                                            }} />
                                            <Typography sx={{
                                                fontSize: { xs: 9, sm: 10, md: 13, lg: 13 },
                                                ml: { xs: .5, sm: .8, md: .8, lg: 1 },
                                                fontFamily: 'outfit', color: 'rgba(128, 128, 128, 1)'
                                            }}>30 mins ago</Typography>
                                        </Grid>

                                    </Grid>

                                </Grid>
                            </Grid>

                        )
                    }
                </Grid >

            </Grid>
        </Grid >
    )
}

export default BlogSection
