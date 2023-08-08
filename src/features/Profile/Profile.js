import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CustomTextField from '../../ReusableComponents/textField'
import CustomButton from '../../ReusableComponents/button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import "./Profile.scss"
import Header from '../../shared/Header';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Profile = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleButtonClick = () => {
        console.log('Button clicked');
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='profile'>
            <Header />
            <h1>Hi John Miles,</h1>
            <p>Today's Update</p>
            <Grid container spacing={2}>
                <Grid item={6}>
                    <Card sx={{ maxWidth: 400, maxHeight: 800 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item={6}>
                    <Grid container spacing={2}>
                        <Grid item={3}>
                            <Card sx={{ maxWidth: 400, maxHeight: 800 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item={3}>
                            <Card sx={{ maxWidth: 400, maxHeight: 800 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Lizard
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>


                </Grid>
            </Grid>

            {/* <Grid container spacing={2}>
                <Grid item xs={8}>
                    <CustomTextField
                        label="Enter something"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        label="Enter something"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <CustomTextField
                        label="Enter something"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={8}>
                    <CustomButton label="Click me" onClick={handleButtonClick} />

                </Grid>
            </Grid> */}

        </div>
    )
}

export default Profile;