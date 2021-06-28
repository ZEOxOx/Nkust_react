import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SalesOrderDelete from 'src/components/customer/SalesOrderDelete';
import CustomerListToolbar from 'src/components/customer/CustomerListToolbar';

const SalesOrderDeletePage = () => (
  <>
    <Helmet>
      <title>SalesOrderDeletePage</title>
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
          <SalesOrderDelete />
        </Box>
      </Container>
    </Box>
  </>
);

export default SalesOrderDeletePage;
