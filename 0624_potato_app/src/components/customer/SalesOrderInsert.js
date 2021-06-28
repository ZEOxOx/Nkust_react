import { useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button,
  TextField,
} from '@material-ui/core';
import { AppContext } from '../../Context';

const SalesOrderInsert = () => {
  const navigate = useNavigate();

  //取得前端顯示資料
  const { insertSalesorder } = useContext(AppContext);
  const { employee, salesorder } = useContext(AppContext);
  const { customer } = useContext(AppContext);

  const doSubmit = () => {
    let OrderId = document.getElementById('OrderId').value;
    let EmpId = document.getElementById('EmpId').value;
    let CustId = document.getElementById('CustId').value;
    let OrderDate = document.getElementById('OrderDate').value;
    let Descript = document.getElementById('Descript').value;

    const data = {
      OrderId, EmpId, CustId, OrderDate, Descript
    };
    console.log(data);
    insertSalesorder(data);
    navigate('/app/products', { replace: true });
  };

  const doChange = (e) => {
    customer.map((cust) => {
      if (cust.CustId === e.target.value) {
        console.log("bingo");
        document.getElementById('CustName').value = cust.CustName;
      }
      return null;
    });
  };

  return (
    <Box sx={{ minWidth: 1050 }}>
      <h2>請填寫新增資料(seq 為自動累計)：</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              #OrderId
            </TableCell>
            <TableCell>
              #EmpId
            </TableCell>
            <TableCell>
              #CustId
            </TableCell>
            <TableCell>
              #CustName
            </TableCell>
            <TableCell>
              #OrderDate
            </TableCell>
            <TableCell>
              #Descript
            </TableCell>
            <TableCell>
              #DoInsert
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Avatar
                  sx={{ mr: 2 }}
                />
                <Typography
                  color="textPrimary"
                  variant="body1"
                >
                  <TextField
                    fullWidth
                    id="OrderId"
                    label="OrderId"
                    type="text"
                    variant="outlined"
                    defaultValue={salesorder.length + employee.EmpId}
                    disabled
                  />
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="EmpId"
                label="EmpId"
                type="text"
                variant="outlined"
                defaultValue={employee.EmpId}
              />
            </TableCell>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                <select id="CustId" value={customer.CustId} onChange={(e) => doChange(e)}>
                  {customer.map((cust) => <option>{cust.CustId}</option>)}
                </select>
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="CustName"
                type="text"
                variant="outlined"
                disabled
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="OrderDate"
                type="date"
                variant="outlined"
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="Descript"
                label="Descript"
                type="text"
                variant="outlined"
              />
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="button"
                variant="contained"
                onClick={() => doSubmit()}
              >
                Insert
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default SalesOrderInsert;
