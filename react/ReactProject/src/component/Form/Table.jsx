import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { MaterialReactTable, useMaterialReactTable, MRT_GlobalFilterTextField, MRT_ToggleFiltersButton } from 'material-react-table';
import { Box, Button, lighten } from '@mui/material';

import { Link } from 'react-router-dom';

const ProductTable = () => {
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

  const columns = useMemo(
    () => [
      {
        id: 'product',
        header: 'Product',
        columns: [
          {
            accessorKey: 'title',
            header: 'Title',
            size: 250,
          },
          {
            accessorKey: 'description',
            header: 'Description',
            size: 300,
          },
          {
            accessorKey: 'price',
            header: 'Price',
            size: 200,
          },
          {
            accessorKey: 'discountPercentage',
            header: 'Discount %',
            size: 200,
          },
          {
            accessorKey: 'stock',
            header: 'Stock',
            size: 200,
          },
          {
            accessorKey: 'rating',
            header: 'Rating',
            size: 200,
          },
          {
            accessorKey: 'actions',
            header: 'Actions',
            size: 200,
            Cell: ({ row }) => (
              <Button component={Link} to={`/product/${row.original.id}`} variant="contained" color="primary">
                Buy Now
              </Button>
            ),
          },
        ],
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: useMemo(() => products, [products]),
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
    },
  });

  return (
    <MaterialReactTable
      table={table}
      renderTopToolbar={({ table }) => (
        <Box
          sx={(theme) => ({
            backgroundColor: lighten(theme.palette.background.default, 0.05),
            display: 'flex',
            gap: '0.5rem',
            p: '8px',
            justifyContent: 'space-between',
          })}
        >
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <MRT_GlobalFilterTextField table={table} />
            <MRT_ToggleFiltersButton table={table} />
          </Box>
        </Box>
      )}
    />
  );
};

export default ProductTable;

