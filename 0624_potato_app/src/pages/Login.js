import { useContext, useState } from "react";
import { Helmet } from 'react-helmet';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@material-ui/core';
import { AppContext } from "../Context";

const Login = () => {
  const { checkAccount } = useContext(AppContext);
  const { employee } = useContext(AppContext);
  const [login, setLogin] = useState({});

  const addLogin = (e, field) => {
    setLogin({
      ...login,
      [field]: e.target.value,
    });
  };
  
  const Submit = () => {
    console.log(login);
    checkAccount(login);
    console.log(employee);
  };

  return (
    <>
      <Helmet>
        <title>Login | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={() => Submit()}
          >
            {({
              errors,
              handleBlur,
              handleSubmit,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    LOGIN
                  </Typography>
                </Box>
                <TextField
                  id="email"
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="EmpId"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={(e) => addLogin(e, "account")}
                  type="text"
                  variant="outlined"
                />
                <TextField
                  id="password"
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Phone"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={(e) => addLogin(e, "password")}
                  type="password"
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    登入
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
