import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: "100%",
        borderRadius: 0,
        height: 500,
        overflow: 'hidden',
        background: 'transparent'  
    },
    titleArea: {
        textAlign: 'center',
        background: 'white',
    },
    mediaContainer: {
        height: 215,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    media: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
    },
    textArea: {
        background: 'white',
    },
    buttonContainer: {
        background: 'white'
    },
});

export default function MediaCard(prop) {
    const classes = useStyles();
    return (
        <Card className={classes.root} border={0} elevation={0}>
            <CardContent className={classes.titleArea}>
                    <Typography variant="h5" component="h2">
                        {prop.title}
                    </Typography>
                </CardContent>
            <CardActionArea>
                <section className={classes.mediaContainer}>
                <CardMedia 
                    component= "img"
                    src={prop.image}
                    className={classes.media}
                    title={prop.title}
                />
                </section>
                <CardContent className={classes.textArea}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {prop.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.buttonContainer}>
                <Button size="small" color="primary" onClick={() => { window.open(prop.repository, "_blank") }}>
                    GitHib Repo
        </Button>
                <Button size="small" color="primary" onClick={() => { window.open(prop.liveLink, "_blank") }}>
                    Deployed App
        </Button>
            </CardActions>
        </Card>
    );
}