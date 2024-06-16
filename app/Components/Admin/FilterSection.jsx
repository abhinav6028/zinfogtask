import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function FilterSection(props) {

    const { setFilterTouch } = props

    const jsonData = [
        {
            orderNo: 'A19023',
            date: '01/05/2023',
            patientName: 'Sankaranarayanan',
            hospitalId: 'DH2023/0001245',
            testName: 'Anti Leukemia 1 Serum ',
            docName: 'Dr. Arun K Thambi',
            eta: '03/05/2023',
            status: 'Ready'
        },
        {
            orderNo: 'A19024',
            date: '01/06/2023',
            patientName: 'Baby. Alan',
            hospitalId: 'DH2023/0001242',
            testName: 'Anti Leukemia 1 Serum ',
            docName: 'Dr. Abdul Siddique',
            eta: '03/06/2023',
            status: 'Partial Report'
        },
        {
            orderNo: 'A19025',
            date: '01/07/2023',
            patientName: 'Baby. Anirudh',
            hospitalId: 'DH2023/0001212',
            testName: 'Anti Leukemia 1 Serum ',
            docName: 'Dr. Raveendran',
            eta: '03/07/2023',
            status: 'Lab dropped'
        },
        {
            orderNo: 'A19026',
            date: '01/08/2023',
            patientName: 'Sankaranarayanan Warrier',
            hospitalId: 'DH2023/0001247',
            testName: 'Comprehensive leukemia - Basic Lineage Panel  ',
            docName: 'Dr. Vignesh Muraleedharan',
            eta: '03/08/2023',
            status: 'Ready'
        }
    ]

    return (
        <Grid container md={11.8} lg={11.8} sx={{ bgcolor: '', border: '1px solid rgba(0, 0, 0, 1)', justifyContent: 'center' }}>

            <Grid container lg={11} sx={{ py: 1 }}>
                <Grid container lg={4} sx={{ bgcolor: '', alignItems: 'center', height: 35, my: .6 }}>
                    <Grid container md={5} lg={4} sx={{ fontFamily: 'outfit' }}>From Date</Grid>
                    <Grid container bgcolor="" md={7} lg={8}>
                        <Box sx={{ width: 260, bgcolor: '', }}>
                            <input
                                type="date"
                                className='dashboard-input'
                                placeholder='Search'
                                style={{
                                    borderRadius: 3,
                                    height: 30,
                                    border: '2px solid rgba(80, 80, 80, 0.7)',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>



                <Grid container lg={4} sx={{ bgcolor: '', alignItems: 'center', height: 35, my: .6 }}>
                    <Grid container md={5} lg={4} sx={{ fontFamily: 'outfit' }}>To Date</Grid>
                    <Grid container bgcolor="" md={7} lg={8}>
                        <Box sx={{ width: 260, bgcolor: '', }}>
                            <input
                                type="date"
                                className='dashboard-input'
                                placeholder='Search'
                                style={{
                                    borderRadius: 3,
                                    height: 30,
                                    border: '2px solid rgba(80, 80, 80, 0.7)',

                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container lg={4} sx={{ bgcolor: '', alignItems: 'center', height: 35, my: .6 }}>
                    <Grid container md={5} lg={4} sx={{ fontFamily: 'outfit' }}>Refer By</Grid>
                    <Grid container bgcolor="" md={7} lg={8}>
                        <Box sx={{ width: 260, bgcolor: '', }}>
                            <select
                                type="text"
                                className='dashboard-input'
                                placeholder='Search'
                                style={{
                                    borderRadius: 3,
                                    height: 30,
                                    border: '2px solid rgba(80, 80, 80, 0.7)',
                                    width: '100%'
                                }}
                            >

                                <option>Doctor Name</option>
                                {
                                    jsonData?.map((data, index) =>
                                        <option value={data?.docName}>{data?.docName}</option>
                                    )
                                }

                            </select>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container lg={4} sx={{ bgcolor: '', alignItems: 'center', height: 35, my: .6 }}>
                    <Grid container md={5} lg={4} sx={{ fontFamily: 'outfit' }}>Patient Name</Grid>
                    <Grid container bgcolor="" md={7} lg={8}>
                        <Box sx={{ width: 260, bgcolor: '', }}>
                            <input
                                type="text"
                                className='dashboard-input'
                                placeholder='Patient Name'
                                style={{
                                    borderRadius: 3,
                                    height: 30,
                                    border: '2px solid rgba(80, 80, 80, 0.7)',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>


                <Grid container lg={4} sx={{ bgcolor: '', alignItems: 'center', height: 35, my: .6 }}>
                    <Grid container md={5} lg={4} sx={{ fontFamily: 'outfit' }}>Hospital Id</Grid>
                    <Grid container bgcolor="" md={7} lg={8}>
                        <Box sx={{ width: 260, bgcolor: '', }}>
                            <input
                                type="text"
                                className='dashboard-input'
                                placeholder='Hospital Id'
                                style={{
                                    borderRadius: 3,
                                    height: 30,
                                    border: '2px solid rgba(80, 80, 80, 0.7)',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>


                <Grid container lg={4} sx={{ bgcolor: '', alignItems: 'center', height: 35, my: .6 }}>
                    <Grid container md={5} lg={4} sx={{ fontFamily: 'outfit' }}>Status</Grid>
                    <Grid container bgcolor="" md={7} lg={8}>
                        <Box sx={{ width: 260, bgcolor: '', }}>
                            <select
                                type="text"
                                className='dashboard-input'
                                placeholder='Search'
                                style={{
                                    borderRadius: 3,
                                    height: 30,
                                    border: '2px solid rgba(80, 80, 80, 0.7)',
                                    width: '100%'
                                }}
                            >

                                <option >Status</option>
                                <option value="Ready">Ready</option>
                                <option value="Partial Report">Partial Report</option>
                                <option value="Lab dropped">Lab dropped</option>

                            </select>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container lg={4} sx={{ bgcolor: '', alignItems: 'center', height: 35, my: .6 }}>
                    <Grid container md={5} lg={4} sx={{ fontFamily: 'outfit' }}>Bill No</Grid>
                    <Grid container bgcolor="" md={7} lg={8}>
                        <Box sx={{ width: 260, bgcolor: '', }}>
                            <input
                                type="text"
                                className='dashboard-input'
                                placeholder='Bill No'
                                style={{
                                    borderRadius: 3,
                                    height: 30,
                                    border: '2px solid rgba(80, 80, 80, 0.7)',
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>


            </Grid>

            <Grid container sx={{ justifyContent: 'center', background: '', borderTop: '1px solid black' }}>
                <Grid container lg={11} sx={{ justifyContent: 'space-between', py: 2 }}>
                    <Typography sx={{ fontSize: 17, fontWeight: 400, fontFamily: 'outfit', color: 'rgba(158, 154, 154, 1)' }}>Please provide search criteria and hit search button.</Typography>



                    <Box sx={{ fontFamily: 'outfit' }}>
                        <Button variant="contained" sx={{ mr: 2 }}>
                            <SearchIcon />
                            <Typography>Search</Typography>
                        </Button>
                        <Button onClick={() => setFilterTouch(false)} variant="contained" sx={{ bgcolor: 'rgba(244, 108, 9, 1)' }}>
                            <CloseIcon />
                            <Typography>Clear</Typography>

                        </Button>
                    </Box>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default FilterSection
