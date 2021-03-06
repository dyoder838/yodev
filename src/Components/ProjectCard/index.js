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
        width: "100%", 
    },
    media: {
        height: "100%",
    },
});

export default function MediaCard(prop) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    component= "img"
                    src={prop.image}
                    className={classes.media}
                    title={prop.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {prop.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {prop.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
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