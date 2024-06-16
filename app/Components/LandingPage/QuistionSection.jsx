import { PRIMARY_COLOR } from '@/utils'
import { Grid, Typography } from '@mui/material'
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QUISTIONANSWERS } from '@/app/data';

function QuistionSection() {
    return (
        <Grid container sx={{
            justifyContent: 'center',
            bgcolor: '', my: { xs: 2, sm: 2, md: 3, lg: 4 }
        }}>
            <Grid container sx={{
                justifyContent: 'center',
                bgcolor: '',
            }}>

                <Grid container xs={10} sm={10} md={8} lg={7} sx={{ bgcolor: '', justifyContent: '' }}>

                    <Typography sx={{
                        fontSize: { xs: 25, sm: 27, md: 35, lg: 40 },
                        fontWeight: 'bold',
                        color: PRIMARY_COLOR,
                        fontFamily: 'outfit'
                    }}>Frequently Asked Questions
                    </Typography>

                    <Grid container>
                        {
                            QUISTIONANSWERS?.map((data, index) =>

                                <Accordion sx={{ bgcolor: "", width: '100%', my: { xs: .5, sm: .8, md: 1, lg: 1 }, border: "1px solid rgba(196, 196, 196, 1)" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography sx={{
                                            fontWeight: 600,
                                            fontSize: { xs: 12, sm: 17, md: 19, lg: 19 },
                                            fontFamily: 'outfit', width: '100%'
                                        }}>Q{index + 1}. {data?.qst}</Typography>

                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={{
                                            fontSize: { xs: 11, sm: 11, md: 15, lg: 16, fontFamily: "outfit" }, color: 'rgba(80, 80, 80, 1)',
                                            textAlign: 'start'
                                        }}>
                                            {data?.answr}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        }



                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default QuistionSection
