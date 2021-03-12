import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../../Components/Nav';
import BioCard from '../../Components/BioCard';
import ImageCard from '../../Components/ImageCard';

const useStyles = makeStyles((theme) => ({
    
    root: {
       height: '100%',
       width: '100%'
    },
    nav: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%'

    },
    bio: {
        [theme.breakpoints.between('2560','3840')]: {
            //4k
            position: 'absolute',
            top: '30%',
            left: '10%'
          },
        [theme.breakpoints.between('1920','2560')]: {
            //2k
            position: 'absolute',
            top: '20%',
            left: '10%'
          },
        [theme.breakpoints.between('1280', '1920')]: {
            //1080
            position: 'absolute',
            top: '28%',
            left: '10%'
          },
        [theme.breakpoints.between('960', '1280')]: {
            //ipad pro
            position: 'absolute',
            top: '25%',
            left: '5%'
          },
        [theme.breakpoints.between('600', '960')]: {
            //ipad
            position: 'absolute',
            top: '10%',
            left: '4%'
          },
        [theme.breakpoints.between('0', '600')]: {
            //cell phones
            background: 'white',
            
          },
    },
}));

export default function AboutMe() {

    const classes = useStyles();

    return (

        <Grid 
        className={classes.root}
        container 
        justify= 'flex-end'
        direction='row' 
        >

            <Grid className={classes.nav} item xs={12}>
                <Nav />
            </Grid>

            <Grid item xs={12}>
               

                    <Grid className={classes.imagecard} item xs={12}>
                        <ImageCard />
                    </Grid>

                    <Grid className={classes.bio} item xs={12} sm={7} md={7} lg={4}>
                        <BioCard />
                    </Grid>

                
            </Grid>
            
        </Grid>

    )
}
