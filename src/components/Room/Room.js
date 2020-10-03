import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WcIcon from '@material-ui/icons/Wc';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useHistory } from 'react-router-dom';
import './Room.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  media: {
    width: 240,
    height: 380,
    left: 635,
  },
}));

export default function Room({room}){
  const classes = useStyles();
  const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }
  return (
   <Card onClick className={classes.root}>
      <CardMedia
        className={classes.media}
        image={room.imgUrl}
        title="Travel Now"
      /> 
      <Link to="/home1"><h3 className="title-text-style">{room.title1}</h3></Link>
      <Link to="/home2"><h3 className="title-text-style">{room.title2}</h3></Link>
      <Link to="/home3"><h3 className="title-text-style">{room.title3}</h3></Link>
    </Card>
);
}