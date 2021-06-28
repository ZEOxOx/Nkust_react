import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SalesOrderResults from 'src/components/customer/SalesOrderResults';
import SalesOrderToolbar from 'src/components/customer/SalesOrderToolbar';
import customers from 'src/__mocks__/customers';

const SalesOrderList = () => (
  <>
    <Helmet>
      <title>SalesOrderList</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <SalesOrderToolbar />
        <Box sx={{ pt: 3 }}>
          <SalesOrderResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default SalesOrderList;
