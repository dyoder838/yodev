import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../../Components/Nav';
import ProjectCard from '../../Components/ProjectCard';
import ProjectsDb from '../../Assets/Json/projects.json';
import './style.css';


const useStyles = makeStyles((theme) => ({
    
    root: {
        
    },
    nav: {
        position: 'absolute',
        top: 0,
        zIndex: 2,
        width: '100%'

    },
    projectcontainer: {
        marginBottom: '5%'
    },
    project: {
        
        [theme.breakpoints.between('2560','3840')]: {
            //4k
            position: 'absolute',
            top: '30%',
            left: '10%',
          },
        [theme.breakpoints.between('1920','2560')]: {
            //2k
            position: 'absolute',
            top: '10%',
            left: '4%',
          },
        [theme.breakpoints.between('1280', '1920')]: {
            //1080
            position: 'absolute',
            top: '10%',
            left: '1%',
          },
        [theme.breakpoints.between('960', '1280')]: {
            //ipad pro
            position: 'absolute',
            top: '5%',
            left: '5%',
          },
        [theme.breakpoints.between('600', '960')]: {
            //ipad
            position: 'absolute',
            top: '10%',
            left: '1%'
          },
        [theme.breakpoints.between('0', '600')]: {
            //cell phone
            
            
          },
    },
}));

export default function AboutMe() {

    const classes = useStyles();

    return (

        <Grid 
        className={classes.root}
        container
        direction='row' 
        >

            <Grid className={classes.nav} item xs={12}>
                <Nav />
            </Grid>

            <Grid className={classes.project} item xs={12} md={6} lg={6}>
                
                <Grid 
                className={classes.projectcontainer}
                container
                spacing= '2'
                alignItems= 'center'
                direction= 'column'
                >
                    {ProjectsDb.map((data, index) =>
                    <Grid key={index} item xs={12} >
                        <ProjectCard
                        image={data.image}
                        title={data.title}
                        description={data.description}
                        repository={data.repository} 
                        livelink={data.livelink}
                        />
                    </Grid>
                    )};
                </Grid>
            </Grid>
        </Grid>

    )
}
