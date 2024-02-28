import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardMedia, Chip, Skeleton, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={4}>
      {loading ? (
        // Skeleton placeholders during loading
        Array.from(new Array(3)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <Skeleton variant="rectangular" width="100%" height={140} />
              <CardContent>
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="rectangular" width="80%" height={20} />
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        // Render product cards
        products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.thumbnail}
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" component="div" marginTop={2}>
                  ${product.price}
                </Typography>
                <Chip label={`${product.discountPercentage}% off`} color="primary" />
                <Typography variant="body1" component="p" marginTop={1}>
                  Stock: {product.stock}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {product.rating}
                </Typography>
                <Button component={Link} to={`/product/${product.id}`} variant="contained" color="primary">Buy Now</Button>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ProductCard;
