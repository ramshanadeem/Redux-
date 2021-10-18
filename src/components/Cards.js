import React from 'react';
import CardData from './CardData';
import CardItem  from './CardItem';
import './Cards.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Cards() {

    return (
     <>
     
              
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
                {
                    CardData.productData.map((item,index)=>{
                        return(
                      
                           <Grid item xs={8} sm={4} md={4} >
                             <div className="justify">
                        <CardItem img={item.img} title={item.title} price={item.price}/>
                       </div>
                        </Grid>
                            )
                    })
                }
</Grid>
            </Box>
            
         </>
    
      
    );
  }