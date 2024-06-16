"use client"
import { PRIMARY_COLOR, SECONDARY_COLOR } from '@/utils'
import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const loginSchema = Yup.object().shape({
    user_name: Yup.string().trim().required("Email id is required").email("Invalid email").matches(emailRegex, 'Invalid email'),
    password: Yup.string()
        .min(8, 'Minimum 8 characters')
        .max(50, 'Maximum 50 characters')
        .required('Password is required'),
});

export default function Login({ setShowValidationMsg }) {



    const router = useRouter()

    const initialValues = {

        user_name: '',
        password: '',
    };

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        validateOnBlur: false,
        validateOnBlur: false,
        onSubmit: async (values, { setStatus, setSubmitting }) => {

            router.push('/')

        },
    });

    formik.errors.password || formik.errors.user_name ? setShowValidationMsg(true) : setShowValidationMsg(false)

    return (
        <Grid container justifyContent="center">
            <Typography sx={{ fontWeight: 700, color: PRIMARY_COLOR, fontSize: 22, fontFamily: 'outfit' }}>Report Downlad portal</Typography>



            <form action="" style={{ width: '100%', justifyContent: 'center', display: 'flex' }} onSubmit={formik.handleSubmit}>


                <Grid container xs={11} sm={10} md={9} lg={8} sx={{ bgcolor: SECONDARY_COLOR, my: 1, borderRadius: "18px", justifyContent: 'center' }}>

                    <Typography sx={{ color: PRIMARY_COLOR, fontSize: 22, fontFamily: 'outfit', textAlign: 'center', width: '100%', my: 2.5 }}>Login</Typography>

                    <Grid container sx={{ bgcolor: "" }} xs={11} sm={11} md={11} lg={10}>

                        <Grid container>
                            <Typography sx={{ color: PRIMARY_COLOR, fontSize: 18, fontFamily: 'outfit' }}>Username</Typography>
                            <Grid container sx={{ mt: .6, border: "2px solid #C4C4C4", borderRadius: 1 }}>

                                <Grid container xs={10} sm={10} md={10.5} lg={10.5} >
                                    <Box sx={{ width: '100%', height: 40 }}>
                                        <input
                                            type="email"
                                            placeholder='Enter email Id'
                                            name='user_name'
                                            value={formik.values.user_name}
                                            onChange={formik.handleChange}
                                        />
                                    </Box>
                                </Grid>
                                <Grid container xs={2} sm={2} md={1.5} lg={1.5} sx={{ justifyContent: "center", alignItems: 'center', bgcolor: '#FFF', height: "96%", borderRadius: 1 }}>
                                    <CloseIcon sx={{ color: '#C4C4C4', cursor: 'pointer' }} />
                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid container>
                            <Typography sx={{ color: PRIMARY_COLOR, fontSize: 18, fontFamily: 'outfit', my: .6 }}>Password</Typography>
                            <Grid container sx={{ border: "2px solid #C4C4C4", borderRadius: 1 }}>

                                <Grid container xs={10} sm={10} md={10.5} lg={10.5} >
                                    <Box sx={{ width: '100%', height: 40 }}>
                                        <input
                                            type="password"
                                            placeholder='Password'
                                            name='password'
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
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

                                type='submit' variant="contained" sx={{ my: 2, px: { xs: 2, sm: 2, md: 3, lg: 4 } }}
                            >SUBMIT</Button>
                        </Grid>

                        <Typography
                            onClick={() => router.push('/resetpassword')}
                            sx={{ width: "100%", textAlign: 'center', mb: 2, fontFamily: "outfit", textDecoration: 'underline ', cursor: "pointer", fontWeight: "600" }}>Reset Password</Typography>

                    </Grid>

                </Grid>
            </form>
        </Grid >
    )
}
