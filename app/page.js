import React from 'react'
import CustomerHeader from './Components/LandingPage/Header'
import { Grid } from '@mui/material'
import Banner from './Components/LandingPage/Banner'
import Section2 from './Components/LandingPage/Section2'
import WorkFlow from './Components/LandingPage/WorkFlow'
import PackageSection from './Components/UI/PackageSection'
import AddSection from './Components/LandingPage/AddSection'
import BlogSection from './Components/LandingPage/BlogSection'
import ContactUs from './Components/LandingPage/ContactUs'
import QuistionSection from './Components/LandingPage/QuistionSection'
import Footer from './Components/UI/Footer'
import UserMobileHeader from './Components/UI/UserMobileHeader'



function page() {
  return (
    <Grid container>

      <CustomerHeader />

      <UserMobileHeader />

      <Banner />

      <Section2 />

      <WorkFlow />

      <PackageSection
        title={"Pick where you left off"}
      />

      <PackageSection
        title={"Popular packages"}
        condition={"package"}
      />

      <AddSection />

      <PackageSection
        title={"Pick where you left off "}
      />

      <BlogSection />

      <ContactUs />

      <QuistionSection />

      <Footer />

    </Grid>
  )
}

export default page 
