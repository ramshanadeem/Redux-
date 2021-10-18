import React,{useEffect} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent'
import CardData from './CardData';
import CardItem  from './CardItem';
import './Cards.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import {SetProduct} from '../Redux/Actions/ProductAction'
export default function ProductListing() {
    //access of a productStore we use useSelector
    const products= useSelector((state)=>state)
    const dispatch = useDispatch();
    const fetchProduct= async ()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
           console.log("err",err)
        })
    dispatch(SetProduct(response.data))
    }
    useEffect(() => {
        fetchProduct();
       
    }, [])
    console.log(products)
    return (
        <div>
          
        
                         
                             <div className="justifyone">
                             <ProductComponent/>
                       </div>
                        
                            
                
     
        </div>
    )
}
