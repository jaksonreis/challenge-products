import React, { useState } from 'react';
import { Typography, Button, Grid, TextField, Select, MenuItem, Alert, Modal, Box, FormControl, InputLabel } from '@mui/material';
import ProductsTypeTable from '../../components/ProductsTypeTable';
import ProductsTable from '../../components/ProductsTable';

function ProductManagement({products, setProducts}) {
  const [productTypes, setProductTypes] = useState([]);

  

  return (
    <div>
      <Typography variant="h4">Product Management</Typography>
      <Button variant="contained" color="primary" onClick={()=>{}}>
      Sales
</Button>
      <Grid container spacing={2}>
              

      </Grid>
      <ProductsTable products={products} setProducts={setProducts} productTypes={productTypes} setProductTypes={setProductTypes}/>
      <ProductsTypeTable productTypes={productTypes}  setProductType={setProductTypes} setProductTypes={setProductTypes}/>
    </div>
  );
}

export default ProductManagement;
