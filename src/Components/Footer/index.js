import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles({
    root: {
        width: '100%', 
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation className={classes.root} value={value} onChange={handleChange}>
            <BottomNavigationAction target="_blank" label="GitHub" value="GitHub" icon={<GitHubIcon onClick={event => window.open("https://github.com/dyoder838", "_blank")}/>} />
            <BottomNavigationAction target="_blank" label="LinkedIn" value="LinkedIn" icon={<LinkedInIcon onClick={event => window.open("https://linkedin.com/in/daniel-j-yoder", "_blank")}/>} />
            <BottomNavigationAction label="Email" href="mailto:dyoder838@gmail.com" value="dyoder838@gmail.com" icon={<AlternateEmailIcon />} />
            <BottomNavigationAction label="Resume" value="resume" icon={<DescriptionIcon onClick={event => window.open("https://docs.google.com/document/d/1NNEy3X9AE5V4LNTka-eusgzQYMPb_pQD-SuhQIw6kYU/edit?usp=sharing", "_blank")}/>} />
        </BottomNavigation>
    );
}