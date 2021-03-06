import * as React from 'react';
import  { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {db} from '../firebase';
import  styles from './styles.module.css';
import Footer from '../components/Footer.js';




const theme = createTheme();
const auth = getAuth();

export const Login = () => {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);
    
    const handleSubmit = (event) => {
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        console.log(`the auth is ${auth}`)
        signInWithEmailAndPassword(auth, email, password)
        

            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                window.location.href="/Homepage"

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Wrong Password\nTry agian");
            });
    };

    return (
        <>
        <ThemeProvider theme={theme}>
            <a className={styles.LogoToHomepage1} href="/Homepage" onClick={closeMobileMenu} Center w="100%" style={{display:'flex',justifyContent:'center'}}>
                <i class="fab fa-invision"></i> <i class="fas fa-tshirt"></i>MODEST IN STYLE <i class="fas fa-tshirt"></i>  <i class="fab fa-invision"></i>
                </a>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/Signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <Box mt={20}/>

            </ThemeProvider>
            <Footer/>
           </>
    );
}