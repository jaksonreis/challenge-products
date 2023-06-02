import React, { useState } from 'react';
import { Typography, Button, Grid, TextField, Select, MenuItem, Alert, Modal, Box, FormControl, InputLabel } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'description', label: 'Descript', minWidth: 100 },
  { id: 'price', label: 'Price', minWidth: 100 },
  { id: 'type', label: 'Type', minWidth: 100 },
  { id: 'tax', label: 'Tax', minWidth: 100 },
];


export default function ProductsTable({products, setProducts, productTypes, setProductTypes}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [productName, setProductName] = useState('');
  const [selectValue, setSelectValue] = useState(null);
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setError(null);
    setOpen(false);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };
  const handleSelectValueChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleAddProduct = () => {
    setError(null)
    if(productName && productPrice && productDescription && selectValue != null) {
    const newProduct = {
      name: productName,
      price: productPrice,
      description: productDescription,
      type: productTypes.find(item=>item.id == selectValue).name,
      tax: parseFloat(productTypes.find(item=>item.id == selectValue).tax),
    };

    setProducts([...products, newProduct]);
    setOpen(false);
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setselectValue(null);
  } else {
    setError('Todos os campos são obrigatórios')
  }
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };
  

  return (
    <>
  <Box>
    <Button variant="contained" color="primary" onClick={handleOpen}>
  Add Product
</Button>
</Box>
<Modal open={open} onClose={handleClose}>
<Box
sx={{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
}}
>
{error && (
  <Alert severity="error" sx={{ mb: 2 }}>
    {error}
  </Alert>
)}

<Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <TextField
      label="Product Name"
      value={productName}
      onChange={handleProductNameChange}
      fullWidth
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      label="Price"
      value={productPrice}
      onChange={handleProductPriceChange}
      fullWidth
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      label="Description"
      value={productDescription}
      onChange={handleProductDescriptionChange}
      fullWidth
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <FormControl fullWidth>
      <InputLabel htmlFor="product-type-select">Product Type</InputLabel>
      <Select
        value={selectValue}
        onChange={handleSelectValueChange}
        inputProps={{
          name: 'productType',
          id: 'product-type-select',
        }}
      >
        {productTypes.map((item)=><MenuItem value={item.id}>{item.name}</MenuItem>)}
      </Select>
    </FormControl>
  </Grid>
  <Grid item xs={12}>
    <Button variant="contained" color="primary" onClick={handleAddProduct}>
      Add Product
    </Button>
  </Grid>
</Grid>
</Box>
</Modal>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
