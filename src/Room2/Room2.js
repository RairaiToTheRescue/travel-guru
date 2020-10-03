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
import './Room2.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  media: {
    width: 220,
    height: 150,
  },
}));

export default function Room2({ room }) {
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
          <h3 className="title-style">{room.title1}</h3>
          <p className="paragraph-style">{room.paragraph1}</p>
          <p className="paragraph-style2">{room.paragraph2}</p>
          <p className="paragraph-style3">{room.paragraph3}</p>
          <Link to="/schedule">
          <button className="book-button1">{room.button1}</button>
          <button className="book-button2">{room.button2}</button>
          <button className="book-button3">{room.button3}</button>
          </Link>
        </Card>
  );
}

