import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from 'src/components/settings/SettingsNotifications';
import SettingsPassword from 'src/components/settings/SettingsPassword';
import Report from 'src/components/settings/Report';
import customers from 'src/__mocks__/customers';

const ReportPage = () => (
  <>
    <Helmet>
      <title>ReportPage</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <SettingsPassword />
        <Box sx={{ pt: 3 }}>
          <Report />
        </Box>
      </Container>
    </Box>
  </>
);

export default ReportPage;
