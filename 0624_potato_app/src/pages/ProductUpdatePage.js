import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductUpdate from 'src/components/customer/ProductUpdate';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';

const ProductUpdatePage = () => (
  <>
    <Helmet>
      <title>ProductUpdatePage</title>
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
          <ProductUpdate />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductUpdatePage;
