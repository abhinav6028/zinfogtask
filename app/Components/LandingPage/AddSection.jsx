import { Box, Grid } from '@mui/material'
import React from 'react'

function AddSection() {
    return (
        <Grid container sx={{ justifyContent: 'center', bgcolor: '#f5f7f8' }}>
            <Grid container item xs={11} sm={11} md={10} lg={10} sx={{ overflow: 'hidden' }}>
                <Box
                    component="img"
                    src='Assets/user/Advertisement.png'
                    width="100%"
                    sx={{
                        display: 'block',
                        maxWidth: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default AddSection
