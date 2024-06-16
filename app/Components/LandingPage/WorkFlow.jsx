import { PRIMARY_COLOR } from '@/utils'
import { Height } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'

function WorkFlow() {
    return (
        <Grid container sx={{ bgcolor: 'rgba(239, 248, 255, 1)', justifyContent: 'center' }}>
            <Typography sx={{
                fontWeight: 'bold', fontFamily: "outfit",
                fontSize: { xs: 20, sm: 22, md: 23, lg: 25 }, width: '100%', textAlign: 'center', mt: 5,
                color: PRIMARY_COLOR
            }}>
                Popular Lab in your city
            </Typography>


            <Grid container xs={11} sm={11} md={10} lg={10} sx={{ bgcolor: '', justifyContent: 'center', my: { xs: 2, sm: 2, md: 3, lg: 3 } }}>
                {
                    [1, 2, 3]?.map((data, index) =>

                        <Grid
                            container xs={index == 1 ? 4 : 3.5} sm={index == 1 ? 4 : 3.5} md={index == 1 ? 4 : 3.5}
                            lg={index == 1 ? 4 : 3.5}
                            component='img'
                            src={`/Assets/user/workflowimages/image${index + 1}.png`}
                            sx={{ height: { xs: 90, sm: 200, md: 240, lg: 250 } }}

                        >
                        </Grid>

                    )

                }

            </Grid>
        </Grid >
    )
}

export default WorkFlow
