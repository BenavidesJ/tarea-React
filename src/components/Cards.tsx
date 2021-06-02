import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  { Product } from './Table';

const useStyles = makeStyles({
    root: {
        width: 300,
        marginLeft:16,
        marginRight:15,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        marginTop: 16,
        padding: 16,
    }
  });

interface CardData {
    products: Product[];
}

export const Cards: React.FC<CardData> = ({products})=>{
    const classes = useStyles();
    
    return(
        <div className ={classes.container}>
            {products.map((products:Product)=>(
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className ={classes.title}>
                            {products.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {products.description}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            {products.quantity}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>

    )
}



export default Cards;