import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Chip, Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the product id from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('There was an error fetching the data:', error);
      }
    };

    fetchProduct();
  }, [id]); // Add id as a dependency to re-run the effect when it changes

  return (
    <Grid container justifyContent="center" spacing={2} marginTop={4}>
      <Grid item xs={12} md={6}>
        <Card sx={{ maxWidth: 400 }}>
          {product ? (
            <CardMedia
              component="img"
              width="100%"
              height="100%" // Adjust height to cover the grid
              image={product.thumbnail}
              alt={product.title}
              sx={{
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                objectFit: 'cover', // Ensure the image covers the grid
              }}
            />
          ) : (
            <Skeleton variant="rectangular" width="100%" height={250} />
          )}
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardContent>
          {product ? (
            <>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description: {product.description}
              </Typography>
              <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                ${product.price}
              </Typography>
              <Chip
                label={`${product.discountPercentage}% off`}
                color="success"
                sx={{ marginTop: 1, marginRight: 1 }}
              />
              <Chip
                label={`${product.rating} stars`}
                color="primary"
                sx={{ marginTop: 1, marginRight: 1 }}
              />
              <Chip
                label={`${product.stock} in stock`}
                color="info"
                sx={{ marginTop: 1, marginRight: 1 }}
              />
              <Typography variant="subtitle1" component="div" sx={{ marginTop: 1 }}>
                Brand: {product.brand}
              </Typography>
              <Typography variant="subtitle1" component="div" sx={{ marginTop: 1 }}>
                Category: {product.category}
              </Typography>
            </>
          ) : (
            <>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </>
          )}
        </CardContent>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
