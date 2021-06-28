import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductDelete from 'src/components/customer/ProductDelete';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';

const ProductDeletePage = () => (
  <>
    <Helmet>
      <title>ProductDeletePage</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ pt: 3 }}>
          <ProductDelete />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductDeletePage;
