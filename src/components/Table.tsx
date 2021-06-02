import React from 'react';
import {Table} from '@material-ui/core';
import TableInfoBody from './TableInfoBody';
import THead from './THead';

export type Product = {
    name:string;
    id:number;
    quantity:number;
    description:string;
}

export interface TableData {
    products: Product[];
    buyProduct:(e:number) => void;
}

export const MainTable: React.FC<TableData> = ({products, buyProduct})=>{
    return(
    <Table>
        <THead/>
        <TableInfoBody products={products} buyProduct ={buyProduct}></TableInfoBody>
    </Table>
    )
}



export default MainTable;