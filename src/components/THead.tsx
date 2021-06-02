import React from 'react';
import { TableHead,TableCell,TableRow} from '@material-ui/core';

const THead: React.FC = ()=>{
    return (
        <TableHead>
            <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Id</TableCell>
                <TableCell>Qty</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default THead;