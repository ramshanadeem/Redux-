import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardItem.css'
const CardItem = (props) => {
  return (
  
    <Card className="cards">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.img}
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Typography size="small">{props.price}</Typography>
        <button size="small">Add to cart</button>
      </CardActions>
    </Card>

  );
}


export default CardItem;