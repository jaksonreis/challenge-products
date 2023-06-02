import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, List, ListItem, ListItemText } from '@mui/material';

function SalesScreen() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [totalTax, setTotalTax] = useState(0);

  const handleProductChange = (event) => {
    setCurrentProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddProduct = () => {
    const product = {
      name: currentProduct,
      quantity: parseInt(quantity),
      price: 10, // Replace with the actual price of the product
      tax: 0.1, // Replace with the actual tax percentage for the product
    };

    setProducts([...products, product]);
    setTotalValue((prevTotal) => prevTotal + product.price * product.quantity);
    setTotalTax((prevTotal) => prevTotal + product.price * product.quantity * product.tax);

    setCurrentProduct('');
    setQuantity('');
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Sales Screen</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Product"
            value={currentProduct}
            onChange={handleProductChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Quantity"
            value={quantity}
            onChange={handleQuantityChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Selected Products:</Typography>
          <List>
            {products.map((product, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={product.name}
                  secondary={`Quantity: ${product.quantity} - Value: ${product.price * product.quantity} - Tax: ${
                    product.price * product.quantity * product.tax
                  }`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Total Value: {totalValue}</Typography>
          <Typography variant="h6">Total Tax: {totalTax}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default SalesScreen;
