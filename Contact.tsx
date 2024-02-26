import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, FormControlLabel, FormGroup, Checkbox, Typography } from '@mui/material'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { blue } from '@mui/material/colors';

function Contact() {

    const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto" }
    const headerStyle = { marginBottom: 0 }
    const marginTop = { marginTop: 5 }
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Paper elevation={20} style={paperStyle}>
                <Grid container direction="column" alignItems="center">
                    <Avatar sx={{ bgcolor: blue[700] }}>
                        <PermContactCalendarIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Contact Us</h2>
                    <Typography gutterBottom color='textSecondary' marginTop={1}>You can send us your queries by filling the form below...</Typography>
                </Grid>

                <form>
                    <TextField label='Full Name' margin='normal' type='text' fullWidth required />
                    <TextField label='Email' margin='normal' type='email' fullWidth required />
                    <TextField label='Message' margin='normal' type='text' multiline rows={4} fullWidth required />

                    <Button type='submit' variant='contained' color='primary' style={marginTop}>Send</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default Contact
