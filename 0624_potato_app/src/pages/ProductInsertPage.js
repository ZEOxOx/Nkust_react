import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ProductInsert from 'src/components/customer/ProductInsert';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';

const ProductInsertPage = () => (
  <>
    <Helmet>
      <title>ProductInsertPage</title>
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
          <ProductInsert />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductInsertPage;
