
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Image from '../../Assets/Images/djy4.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
        [theme.breakpoints.between('2560', '3840')]: {
          //4k
          height: '97vh'
        },
        [theme.breakpoints.between('1920', '2560')]: {
          //2k
          height: '94vh'
        },
        [theme.breakpoints.between('1280', '1920')]: {
          //1080
          height: 880
        },
        [theme.breakpoints.between('960', '1280')]: {
          //ipad pro
          height: 1310
        },
        [theme.breakpoints.between('600', '960')]: {
          //ipad
          height: 967
        },
        [theme.breakpoints.between('0', '600')]: {
          //cell phone
          height: 300
        },
        
       
        
},
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Image}
          title="Daniel Yoder"
        />
        
      </CardActionArea>
    
    </Card>
  );
}