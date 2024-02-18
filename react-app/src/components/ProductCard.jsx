import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, CardMedia, Chip, Skeleton } from '@mui/material';

function ProductCard() {
  const [products, setProducts] = useState(null); // Initialized to null to check loading state

  useEffect(() => {
    // Replace 'your-backend-endpoint' with the actual backend URL from where you're fetching data
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => console.error("There was an error fetching the data:", error));
  }, []);

  return (
    <Grid container spacing={4}>
      {products ? (
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
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        // Skeleton placeholders
        Array.from(new Array(3)).map((item, index) => (
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
      )}
    </Grid>
  );
}

export default ProductCard;
