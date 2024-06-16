import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/utils'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function Password() {
    return (
        <Grid container justifyContent="center">



            <form action="" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>


                <Grid container xs={11} sm={10} md={9} lg={8} sx={{ bgcolor: SECONDARY_COLOR, my: 1, borderRadius: "18px", justifyContent: 'center' }}>

                    <Typography sx={{ color: PRIMARY_COLOR, fontSize: 22, fontFamily: 'outfit', textAlign: 'center', width: '100%', my: 2.5 }}>Change Password</Typography>

                    <Grid container sx={{ bgcolor: "" }} xs={11} sm={11} md={11} lg={10}>

                        <Grid container>
                            <Typography sx={{ color: PRIMARY_COLOR, fontSize: 15, fontFamily: 'outfit' }}>Enter New Password</Typography>
                            <Grid container sx={{ mt: .6, border: "2px solid #C4C4C4", borderRadius: 1 }}>

                                <Grid container xs={10} sm={10} md={10.5} lg={10.5} >
                                    <Box sx={{ width: '100%', height: 40 }}>
                                        <input
                                            type="text"
                                            placeholder='New password'
                                        />
                                    </Box>
                                </Grid>
                                <Grid container xs={2} sm={2} md={1.5} lg={1.5} sx={{ justifyContent: "center", alignItems: 'center', bgcolor: '#FFF', height: "96%", borderRadius: 1 }}>
                                    <CloseIcon sx={{ color: '#C4C4C4', cursor: 'pointer' }} />
                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid container>
                            <Typography sx={{ color: PRIMARY_COLOR, fontSize: 15, fontFamily: 'outfit', my: .6 }}>Re-enter New Password</Typography>
                            <Grid container sx={{ border: "2px solid #C4C4C4", borderRadius: 1 }}>

                                <Grid container xs={10} sm={10} md={10.5} lg={10.5} >
                                    <Box sx={{ width: '100%', height: 40 }}>
                                        <input
                                            type="text"
                                            placeholder='Re-enter New Password'
                                        />
                                    </Box>
                                </Grid>
                                <Grid container xs={2} sm={2} md={1.5} lg={1.5} sx={{ justifyContent: "center", alignItems: 'center', bgcolor: '#FFF', height: "96%", borderRadius: 1 }}>
                                    <CloseIcon sx={{ color: '#C4C4C4', cursor: 'pointer' }} />
                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid container sx={{ justifyContent: 'center' }}>
                            <Button
                                type='button' variant="contained" sx={{ my: 2, px: { xs: 2, sm: 2, md: 3, lg: 4 } }}
                            >SUBMIT</Button>
                        </Grid>


                    </Grid>

                </Grid>
            </form>
        </Grid >
    )
}
