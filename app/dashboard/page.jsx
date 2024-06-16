"use client"
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Components/Admin/Header'
import Login from '../Components/Login/Login'
import Dashboard from '../Components/Admin/Dashboard'
import PatientPopUp from '../Components/Admin/PatientPopUp'

export default function page() {

  const [popUp, setPopUp] = useState(false)

  const [clickedItem, setClickedItem] = useState()

  return (
    <Grid container sx={{ height: "" }}>
      <Header />

      <PatientPopUp
        clickedItem={clickedItem}
        popUp={popUp}
        setPopUp={setPopUp}
      />

      <Dashboard
        setPopUp={setPopUp}
        setClickedItem={setClickedItem}
      />
    </Grid>
  )
}                                             