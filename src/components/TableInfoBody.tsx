import React from 'react';
import {TableCell,TableRow,TableBody,Button } from '@material-ui/core';
import {Product, TableData} from './Table';

export interface TBodyInfoProps extends TableData {
    buyProduct:(e:number) => void;
}

export const TableInfoBody:React.FC<TBodyInfoProps> = ({products, buyProduct}) => {
    return (
    <TableBody>
        {products.map((products:Product,index)=>(
            <TableRow key={products.name}>
                <TableCell>{products.name}</TableCell>
                <TableCell>{products.id}</TableCell>
                <TableCell>{products.quantity}</TableCell>
                <TableCell>{products.description}</TableCell>
                <TableCell><Button color="secondary" variant="contained" onClick={() => buyProduct(index)}>Buy</Button></TableCell>
            </TableRow>
    ))}
    </TableBody>
    )
}



export default TableInfoBody;