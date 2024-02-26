import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel, FormGroup, Checkbox, Box, MenuItem, Select, InputLabel } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import { blue } from '@mui/material/colors';

function SignUp() {

    const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto" }
    const headerStyle = { marginBottom: 0 }
    const marginTop = { marginTop: 5 }

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Paper elevation={20} style={paperStyle}>
                <Grid container direction="column" alignItems="center">
                    <Avatar sx={{ bgcolor: blue[700] }}>
                        <FaceIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <h3>Create an Account</h3>
                </Grid>

                <form>
                    
                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <TextField label='First Name' margin='normal' required />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label='Last Name' margin='normal' required />
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <FormControl component="fieldset" style={marginTop}>
                                    <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup defaultValue="female" name="radio-buttons-group">
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel>Age</InputLabel>
                                    <Select label="Age">
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10-20}>10-20</MenuItem>
                                        <MenuItem value={20-30}>20-30</MenuItem>
                                        <MenuItem value={30-40}>30-40</MenuItem>
                                        <MenuItem value={40-50}>40-50</MenuItem>
                                        <MenuItem value={50-60}>50-60</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>

                    <TextField label='Phone Number' margin='normal' type='number' fullWidth required />
                    <TextField label='Email' margin='normal' type='email' fullWidth required />
                    <TextField label='Password' margin='normal' type='password' fullWidth required />
                    <TextField label='Confirm Password' margin='normal' type='password' fullWidth required />

                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox />
                            }
                            label="I accept all terms and conditions."
                        />
                    </FormGroup>

                    <Button type='submit' variant='contained' color='primary' style={marginTop}>Sign Up</Button>
                </form>

            </Paper>
        </Grid>
    )
}

export default SignUp
