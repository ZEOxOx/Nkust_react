import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import OrderDetailInsert from 'src/components/customer/OrderDetailInsert';
import OrderDetailToolbar from 'src/components/customer/OrderDetailToolbar';

const OrderDetailInsertPage = () => (
  <>
    <Helmet>
      <title>OrderDetailInsertPage</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <OrderDetailToolbar />
        <Box sx={{ pt: 3 }}>
          <OrderDetailInsert />
        </Box>
      </Container>
    </Box>
  </>
);

export default OrderDetailInsertPage;
