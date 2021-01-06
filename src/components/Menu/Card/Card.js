import React from 'react';
import './Card.css'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    "food-image-container": {
        backgroundImage: "url('./masala-pasta-indian-street-style-9.jpg)",
        backgroundSize: "auto 100%",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(50px)"
    }
}

export default function MenuCard() {
  return (
    <Card style={{maxWidth:"22rem", margin: "0 auto"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Masala Indian Pasta"
          height="200"
          image="./masala-pasta-indian-street-style-9.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Masala Indian Pasta
          </Typography>
          <Typography variant="body2" color="textSecondary" align="left" component="p">
            If you love pasta, and you love Indian food, you won't be able to resist this Masala Pasta. A fiery red tomato sauce seasoned with cumin and garlic and mellowed with cashew cream makes every bite one to remember. A vegan, soy-free recipe, can be nut-free.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Add To cart
        </Button>
      </CardActions>
    </Card>
  );
}