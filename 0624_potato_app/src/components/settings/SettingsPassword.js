import { useState,useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
import { AppContext } from '../../Context';

const SettingsPassword = (props) => {
  const navigate = useNavigate();
  const { getSalesReport } = useContext(AppContext);
  const [values, setValues] = useState({
    start: '',
    end: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const doSubmit = () => {
    getSalesReport(values);
    navigate('/app/report', { replace: true });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="YYYY-MM-DD"
          title="Sales Report"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            margin="normal"
            name="start"
            onChange={handleChange}
            type="date"
            variant="outlined"
          />
          <center><h3>~</h3></center>
          <TextField
            fullWidth
            margin="normal"
            name="end"
            onChange={handleChange}
            type="date"
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => doSubmit()}
          >
            Search!
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
