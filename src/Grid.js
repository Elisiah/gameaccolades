import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import gclogo from './assets/gc.png';
import fifalogo from './assets/fifa.png';
import owlogo from './assets/ow.png';
import r6logo from './assets/r6.png';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const centeredText = {
    textAlign: 'center',
    margin: 'auto',
}

export default function ComplexGrid() {
    return (
        <div><br></br><h1 style={centeredText}>Ranks and Gaming Accolades</h1><br></br>
        <Paper
        sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
        >
            <Box sx={{ width: '100%' }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={gclogo} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                <b>Grand Champ (original)</b>
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                <b>Cars:</b> Breakouts, Octane, R3MX GXT (70)
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <br></br>Before Rocket League went free to play grand champ used to be the sole highest rank.
                                <br></br>I play duos with Elijah (Perish) and have played 3s a few times in a University team.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            -------------------------------------------------------------------------------
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            <b>Rocket League</b>
                        </Typography>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={fifalogo} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                <b>Elite (Co-op) | Division 1 (Solo)</b>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                I very rarely play Fifa by myself I always play it with Elijah (Perish) as a team, we have hit Elite a couple times and individually I am in Division 1.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                ---------------------------------------------------------------------------------
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            <b>Fifa 21 & 22</b>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={owlogo} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                <b>Diamond</b>
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                <b>Main:</b> Zen, Mercy
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                I didn't play Overwatch for very long, it was mostly just to play with friends. I hit diamond playing support.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                ---------------------------------------------------------------------------------
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            <b>Overwatch</b>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src={r6logo} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="div">
                                Platinum
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="div">
                                <b>Main:</b> Ela, Ash, Lesion, Valkyrie, Thermite 
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                            I play a range of operators usually flex picking whatever role is necessary but my favourite is Ela.
                            <br></br>I have hit Platinum playing in 3 or 4 stacks with friends: Nathan; Elijah and Jordan. 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                ------------------------------------------------------------------------------
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                            Rainbow 6 Siege
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            </Box>
        </Paper>
        </div>
    );
}
