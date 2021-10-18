import React from 'react'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './Cards.css'
function ProductComponent() {
  const products = useSelector((state) => state.allproducts.products)

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <>
        <Grid item xs={1} sm={2} md={4}>

          <Card style={{width:"80%", marginLeft:"30px"}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
              

            />
            <CardContent>
          
              <Typography gutterBottom variant="h5" component="div">
                price: {price}
              </Typography>

            </CardContent>
            <CardActions>
              <Typography size="small" >
                {category}
              </Typography >
              <Button className="btn" variant="outlined" style={{marginLeft:"20px"}}>Outlined</Button>
            </CardActions>
          </Card>

        </Grid>
      </>
    )
  }
  )
  return (
    <div>

<Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 2, md: 12 }}>
        {renderList}
      </Grid>


    </div>
  )
}

export default ProductComponent
