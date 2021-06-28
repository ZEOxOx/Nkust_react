import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SalesOrderInsert from 'src/components/customer/SalesOrderInsert';
import OrderDetailToolbar from 'src/components/customer/OrderDetailToolbar';

const SalesOrderInsertPage = () => (
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
        <OrderDetailToolbar />
        <Box sx={{ pt: 3 }}>
          <SalesOrderInsert />
        </Box>
      </Container>
    </Box>
  </>
);

export default SalesOrderInsertPage;
