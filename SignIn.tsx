import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, FormGroup, Checkbox } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { blue } from '@mui/material/colors';

function SignIn() {

    const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto" }
    const headerStyle = { marginBottom: 0 }
    const marginTop = { marginTop: 5 }
    
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Paper elevation={20} style={paperStyle}>
                <Grid container direction="column" alignItems="center">
                    <Avatar sx={{ bgcolor: blue[700] }}>
                        <LockIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign In</h2>
                    <h3>Take a look at what's new!</h3>
                </Grid>

                <form>

                    <TextField label='Email' margin='normal' type='email' fullWidth required />
                    <TextField label='Password' margin='normal' type='password' fullWidth required />

                    <Button type='submit' variant='contained' color='primary' style={marginTop}>Sign In</Button>
                </form>

                <p>New here?</p>
                <Link to="/signup">Sign In</Link>

            </Paper>
        </Grid>
    )
}

export default SignIn
