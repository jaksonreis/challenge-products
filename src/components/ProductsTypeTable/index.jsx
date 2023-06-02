import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import { Alert, Box, Button, Grid, Modal, TextField } from '@mui/material';

const columns = [
  { id: 'id', label: 'Id', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'tax', label: 'Tax', minWidth: 100 },
];

function createData(name, code, population) {
  
  return { name, id: code, tax: population };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365),
  createData('Italy', 'IT', 6048397),
  createData('United States', 'US', 327167434),
  createData('Canada', 'CA', 37602103),
  createData('Australia', 'AU', 25475400),
];

export default function ProductsTypeTable({productTypes, setProductTypes}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openProductType, setOpenProductType] = useState(false);
  const [error, setError] = useState(null);
  const [productType, setProductType] = useState('');
  const [productTax, setProductTax] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleProductTypeOpen = () => {
    setOpenProductType(true);
  };

  const handleProductTypeClose = () => {
    setError(null);
    setOpenProductType(false);
  };

  const handleProductTaxChange = (event) => {
    setProductTax(event.target.value);
  };

  const handleProductTypeChange = (event) => {
    setProductType(event.target.value);
  };

  const handleAddProductType = () => {
    setError(null);
    if(productType && productTax) {
    const newProductType = {
      id: Date.now(),
      name: productType,
      tax: parseFloat(productTax),
    };

    setProductTypes([...productTypes, newProductType]);
    setOpenProductType(false);
    setProductType('');
    setProductTax('');
  } else {
    setError('Todos os campos são obrigatórios')
  }
  };

  return (
    <>
    <Button variant="contained" color="primary" onClick={handleProductTypeOpen}>
      Add Product Type
    </Button>
    <Modal open={openProductType} onClose={handleProductTypeClose}>
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
            label="Product Type"
            value={productType}
            onChange={handleProductTypeChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Tax Percentage"
            type="number"        
            value={productTax}
            onChange={handleProductTaxChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddProductType}>
            Add Product Type
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
            {productTypes
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
        count={productTypes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}
