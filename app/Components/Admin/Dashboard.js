"use client"
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/utils'
import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import DownloadIcon from '@mui/icons-material/Download';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FilterSection from './FilterSection';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseIcon from '@mui/icons-material/Close';


function Dashboard({ setClickedItem, setPopUp }) {

    const [filterTouch, setFilterTouch] = useState(false)

    const jsonData = [
        {
            orderNo: 'A19023',
            date: '01/05/2023',
            patientName: 'Sankaranarayanan',
            hospitalId: 'DH2023/0001245',
            testName: 'Anti Leukemia 1 Serum ',
            docName: 'Dr. Arun K Thambi',
            eta: '03/05/2023',
            status: 'Ready',
            age: 30,
            gender: 'Male'
        },
        {
            orderNo: 'A19024',
            date: '01/06/2023',
            patientName: 'Baby. Alan',
            hospitalId: 'DH2023/0001242',
            testName: 'Anti Leukemia 1 Serum ',
            docName: 'Dr. Abdul Siddique',
            eta: '03/06/2023',
            status: 'Partial Report',
            age: 35,
            gender: 'Female'
        },
        {
            orderNo: 'A19025',
            date: '01/07/2023',
            patientName: 'Baby. Anirudh',
            hospitalId: 'DH2023/0001212',
            testName: 'Anti Leukemia 1 Serum ',
            docName: 'Dr. Raveendran',
            eta: '03/07/2023',
            status: 'Lab dropped',
            age: 40,
            gender: 'Male'
        },
        {
            orderNo: 'A19026',
            date: '01/08/2023',
            patientName: 'Sankaranarayanan Warrier',
            hospitalId: 'DH2023/0001247',
            testName: 'Comprehensive leukemia - Basic Lineage Panel  ',
            docName: 'Dr. Vignesh Muraleedharan',
            eta: '03/08/2023',
            status: 'Ready',
            age: 45,
            gender: 'Other'
        }
    ]

    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = jsonData.filter(data =>
        data.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.docName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.hospitalId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.testName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.orderNo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Grid container sx={{ justifyContent: "center", bgcolor: "rgba(228, 251, 251, 1)", mt: 1, height: '08' }}>

            <Grid container md={11.5} lg={11.5} sx={{ alignItems: "center", justifyContent: "space-between", my: 1 }}>
                <Typography sx={{
                    fontSize: 25,
                    fontWeight: 500,
                    fontFamily: "outfit",
                    color: PRIMARY_COLOR
                }}>Patient Reports</Typography>

                <Grid container md={5} lg={5}>
                    <Button onClick={() => setFilterTouch(!filterTouch)} variant="contained" sx={{ fontFamily: "outfit", color: '#FFF', display: 'flex', alignItems: 'center' }}>

                        <Typography >Apply Filter   </Typography>
                        <FilterAltIcon sx={{ bgcolor: "" }} />

                    </Button>

                    <Box sx={{ width: 400, bgcolor: '', ml: 'auto' }}>
                        <input
                            type="search"
                            className='dashboard-input'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search by Doctor Name/ Patient Name/ Test Name...'
                            style={{
                                borderRadius: 5,
                                border: '2px solid rgba(80, 80, 80, 0.7)'
                            }}
                        />
                    </Box>
                </Grid>

            </Grid>

            {

                filterTouch && <FilterSection
                    jsonData={jsonData}
                    setFilterTouch={setFilterTouch} />

            }


            <Grid container md={11.8} lg={11.8} sx={{ height: '70vh' }}>

                <TableContainer component={Paper}>

                    <Table sx={{}} >

                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>Order No</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>Date</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>Patient Name</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>Hospital ID</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>Test Name</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>Doctor Name</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>ETA</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }} >Status</TableCell>
                                <TableCell align="center" sx={{ fontWeight: 800, color: 'rgba(80, 80, 80, 1)', fontFamily: "outfit", }}>Action</TableCell>
                            </TableRow>
                        </TableHead>


                        <TableBody>


                            {
                                filteredData?.map((data, index) =>



                                    <TableRow
                                        sx={{}}
                                    >
                                        <TableCell

                                            sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        > {data?.orderNo}</TableCell>


                                        <TableCell align="center" sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        >{data?.date}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        >{data?.patientName}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        >{data?.hospitalId}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        >{data?.testName}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        >{data?.docName}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        >{data?.eta}</TableCell>
                                        <TableCell align="center" sx={{ fontFamily: "outfit", borderBottom: '2px solid rgba(0, 0, 0, 1)', cursor: 'pointer' }}
                                            onClick={() => {
                                                setPopUp(true)
                                                setClickedItem(filteredData[index])
                                            }}
                                        >

                                            <Typography sx={{
                                                fontSize: 15, fontFamily: "outfit",
                                                bgcolor: data?.status === "Ready" ? "rgba(137, 255, 170, 1)" : data?.status === "Partial Report" ? "rgba(231, 248, 128, 1)" : data?.status === "Lab dropped" ? "rgba(242, 163, 138, 1)" : "",
                                                p: .2, borderRadius: 2,

                                            }}> {data?.status}</Typography>

                                        </TableCell>



                                        <TableCell align="center" sx={{ borderBottom: '2px solid rgba(0, 0, 0, 1)' }}>
                                            <Box>

                                                <DownloadIcon
                                                    sx={{
                                                        cursor: 'pointer', mr: 1, color: PRIMARY_COLOR,
                                                        display: data?.status == "Lab dropped" ? 'none' : ''
                                                    }} />




                                                <Popup contentStyle={{ width: 400, background: "rgba(228, 251, 251, 1)" }} trigger={<ChatBubbleIcon sx={{ cursor: 'pointer', color: PRIMARY_COLOR }} />} position="left center">
                                                    <Grid container sx={{ bgcolor: 'rgba(228, 251, 251, 1)', justifyContent: 'center' }}>
                                                        <Grid container sx={{ justifyContent: 'space-between' }}>
                                                            <Typography sx={{ fontSize: 18, fontFamily: 'outfit', color: 'rgba(80, 80, 80, 1)', fontWeight: 'bold', ml: 1.5 }}>{data?.orderNo}</Typography>

                                                            <CloseIcon sx={{ color: '#FFF', bgcolor: PRIMARY_COLOR, borderRadius: 1 }} />
                                                        </Grid>

                                                        <Grid container lg={11.9} sx={{ mt: 1 }}>
                                                            <textarea
                                                                id="w3review"
                                                                placeholder='Type your messages here'
                                                                name="w3review"
                                                                rows="4"
                                                                cols="50"
                                                                style={{
                                                                    border: '0px solid red'
                                                                }}
                                                            />

                                                            <Typography sx={{ ml: 'auto', mr: 1, my: 1, fontWeight: 'bold', fontSize: 17, color: '#FFF', background: PRIMARY_COLOR, px: .5, borderRadius: 1, cursor: 'pointer' }} >Send</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Popup>


                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                )
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>

            <Grid container lg={10} sx={{ bgcolor: '', my: 3, justifyContent: 'space-between', alignItems: 'center' }}>


                <Typography sx={{ fontSize: 14, fontFamily: 'outfit', fontWeight: 400, cursor: 'pointer' }}>Copyright © 2023 Access Home Lab Solutions</Typography>


                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <LocalPhoneIcon sx={{ bgcolor: "", fontSize: 24, color: PRIMARY_COLOR, }} />
                    <Typography
                        sx={{
                            color: PRIMARY_COLOR,
                            fontSize: 17,
                            fontFamily: 'outfit',
                            textAlign: 'center',
                            bgcolor: "",
                            fontWeight: '700'
                        }}
                    >
                        (+91) 9288008801
                    </Typography>
                </Box>

                <Typography sx={{ fontSize: 14, fontFamily: 'outfit', fontWeight: 400, cursor: 'pointer' }}>All Rights Reserved | Terms and Conditions | Privacy Policy</Typography>
            </Grid>

        </Grid >
    )
}

export default Dashboard
