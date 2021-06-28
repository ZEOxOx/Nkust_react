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

const OrderDetailInsert = () => {
  const navigate = useNavigate();

  //取得前端顯示資料
  const { insertOrderdetail, getOrderdetail } = useContext(AppContext);
  let { orderdetail } = useContext(AppContext);
  let { product } = useContext(AppContext);

  const doSubmit = () => {
    let OrderId = document.getElementById('OrderId').value;
    let ProdId = document.getElementById('ProdId').value;
    let Qty = document.getElementById('Qty').value;
    let Discount = document.getElementById('Discount').value;

    const data = {
      OrderId, ProdId, Qty, Discount,
    };
    console.log(data);
    insertOrderdetail(data);
  };

  const doChange = (e) => {
    console.log(e.target.value);
    product.map((prod) => {
      if (prod.ProdID === e.target.value) {
        console.log("bingo");
        document.getElementById('ProdName').value = prod.ProdName;
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
              #ProdId
            </TableCell>
            <TableCell>
              #ProdName
            </TableCell>
            <TableCell>
              #Qty
            </TableCell>
            <TableCell>
              #Discount
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
                    onChange={(e) => doChange(e)}
                    type="text"
                    variant="outlined"
                    //defaultValue={orderdetail[0].OrderId}
                    defaultValue={window.localStorage.getItem('OrderId')}
                    disabled
                  />
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                <select id="ProdId" value={product.ProdID} onChange={(e) => doChange(e)}>
                  {product.map((prod) => <option>{prod.ProdID}</option>)}
                </select>
              </Typography>
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="ProdName"
                type="text"
                variant="outlined"
                disabled
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="Qty"
                label="Qty"
                type="text"
                variant="outlined"
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="Discount"
                label="Discount"
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

export default OrderDetailInsert;
