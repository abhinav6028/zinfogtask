"use client"
import { Box, Grid, p } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { PRIMARY_COLOR } from '@/utils';



export default function UserMobileHeader() {

    const [menu, setMenu] = useState(false)

    // const navigate = useNavigate()


    const navbarItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About ',
            path: '/about'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
        {
            name: 'Get the app',
            path: '/getapp'
        },
        {
            name: 'Add lab',
            path: '/addlab'
        },
    ]
    const MenuBar = () => {

        setMenu(!menu)

    }

    return (

        <Grid container sx={{
            display: { xs: "block", md: "none" },
            flexDirection: 'column-reverse', alignItems: "center",
            bgcolor: "",
            zIndex: 400,
        }}>

            <Grid container sx={{
                display: 'flex',
                position: "fixed",
                zIndex: "110", top: "0", left: "0",
                bgcolor: "#FFF",
                alignItems: 'center',
                py: 2,
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',

            }} >



                <Box
                    onClick={() => navigate('/')}
                    style={{ cursor: 'pointer' }}
                    component="img"
                    sx={{
                        bgcolor: "",
                        height: { xs: 35, lg: 50 },
                        width: 90,
                        ml: 2,
                    }}
                    alt=" Logo"
                    src="/Assets/user/userLogo.png"
                />

                <Box
                    // position="fixed" right="4px"
                    sx={{
                        bgcolor: '',
                        ml: 'auto',
                        mr: 2
                    }}>

                    {menu ? <CloseIcon sx={{ color: PRIMARY_COLOR, fontSize: { xs: '2rem' } }} onClick={() => setMenu(!menu)} /> :
                        <MenuIcon sx={{ color: PRIMARY_COLOR, fontSize: "2rem" }} onClick={() => setMenu(!menu)} />}

                </Box>

            </Grid>

            <Box sx={{
                transition: "0.5s",
                width: "100%", height: "fit-content",
                position: "fixed", zIndex: "100", left: "0%", top: menu ? "60px" : "-40%",
                bgcolor: "#FFFF"
                // bgcolor: "red"

            }}>

                {
                    navbarItems.map((data, index) =>

                        <Box key={index} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", bgcolor: "#FFF", ml: 1 }}>

                            <Box onClick={MenuBar} sx={{ display: "flex", justifyContent: "center", alignItems: "center", bgcolor: '', height: 'fit-content' }}>

                                <p style={{ color: "black", fontWeight: '', cursor: 'pointer', fontFamily: 'outfit' }} >{data.name}</p>

                            </Box>

                        </Box>
                    )}

            </Box>

        </Grid >
    )
}