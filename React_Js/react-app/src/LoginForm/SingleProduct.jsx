import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Skeleton,
} from "@mui/material";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, [id]);

  return (
    <Grid container justifyContent="center" spacing={10} marginTop={15}>
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="300"
          image={product?.thumbnail || <Skeleton />}
          alt={product?.title || ""}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.title || <Skeleton />}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product?.description || <Skeleton />}
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
            ${product?.price || <Skeleton />}
          </Typography>
          <Chip
            label={`${product?.discountPercentage}% off` || <Skeleton />}
            color="success"
            sx={{ marginTop: 1, marginRight: 1 }}
          />
          <Chip
            label={`${product?.rating} stars` || <Skeleton />}
            color="primary"
            sx={{ marginTop: 1, marginRight: 1 }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
