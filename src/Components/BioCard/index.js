import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        background: "rgba(255,255,255, 0.6)",
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold', 
    },
    whois: {
        fontSize: 20, 
        fontWeight: 'bold',
    },
    story: {
        fontSize: 20,
        fontWeight: "bold", 
    },
});

export default function OutlinedCard() {
    const classes = useStyles();

    return (

        <Card className={classes.root} >
            <CardContent>
                
                <Typography className={classes.title}>
                    Hi, I'm Dan
                </Typography>
                <br />
                <Typography className={classes.whois}>
                    I am an aspiring Full-Stack Web Developer from Seattle, Washington.
                </Typography>
                <br />
                <Typography className={classes.story}>
                    I really enjoy the complex problem solving inherent in Web Development,
                    both on the back and front
                    end. I have always enjoyed building and creating; from Legos to landscaping to PC building -
                    and now I have a passion for Web Development.  
                </Typography>
                <br />
                <Typography className={classes.story}>
                    I incorporate my education in communications,
                    experience in Business Management, and adaptability from my service in the military; with a
                    certificate in Full Stack Web Development from the University of Washington.
                </Typography>
                <br />
                <Typography className={classes.story}>
                    I am known for extreme focus, outstanding team communication, and strong problem-solving skills using
                    JavaScript, HTML, CSS, NODE.js, MySQL, Bootstrap, Stackoverflow, React and Google search... I am
                    passionate about providing a world class user experience and streamlined functionality both
                    to developers and end users.
                </Typography>

            </CardContent>

        </Card>
    );
}