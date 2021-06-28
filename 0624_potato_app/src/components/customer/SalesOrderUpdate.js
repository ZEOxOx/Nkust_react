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
import getInitials from 'src/utils/getInitials';
import { AppContext } from '../../Context';

const SalesOrderUpdate = () => {
  const navigate = useNavigate();

  //取得前端顯示資料
  const { oUpdate } = useContext(AppContext);
  const { updateSalesorder } = useContext(AppContext);
  const { orderdetail } = useContext(AppContext);
  const { updateOrderdetail } = useContext(AppContext);
  const { deleteOrderdetail } = useContext(AppContext);

  const doSalesUpdate = () => {
    let OrderId = document.getElementById('OrderId').value;
    let EmpId = document.getElementById('EmpId').value;
    let CustId = document.getElementById('CustId').value;
    let OrderDate = document.getElementById('OrderDate').value;
    let Descript = document.getElementById('Descript').value;

    const data = {
      OrderId, EmpId, CustId, OrderDate, Descript
    };
    console.log(data);
    updateSalesorder(data);
  };

  const doDetailUpdate = (seq, OrderId, ProdId, Qty, Discount) => {
    const data = {
      seq, OrderId, ProdId, Qty, Discount
    };
    console.log(data);
    updateOrderdetail(data);
  };

  const doDetailDelete = (seq) => {
    console.log(seq);
    deleteOrderdetail(seq);
  };

  const doSalesChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 1050 }}>
      <hr />
      <h2>訂單主檔</h2>
      <hr />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              #seq
            </TableCell>
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
              #OrderDate
            </TableCell>
            <TableCell>
              #Descript
            </TableCell>
            <TableCell>
              #DoUpdate
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={oUpdate.seq}
          >
            <TableCell>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Avatar
                  src={oUpdate.seq}
                  sx={{ mr: 2 }}
                >
                  {getInitials(oUpdate.seq)}
                </Avatar>
                <Typography
                  color="textPrimary"
                  variant="body1"
                >
                  <TextField
                    fullWidth
                    id="seq"
                    label="seq"
                    onChange={(e) => doSalesChange(e)}
                    type="text"
                    variant="outlined"
                    defaultValue={oUpdate.seq}
                    disabled
                  />
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="OrderId"
                label="OrderId"
                onChange={(e) => doSalesChange(e)}
                type="text"
                variant="outlined"
                defaultValue={oUpdate.OrderId}
                disabled
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="EmpId"
                label="EmpId"
                onChange={(e) => doSalesChange(e)}
                type="text"
                variant="outlined"
                defaultValue={oUpdate.EmpId}
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="CustId"
                label="CustId"
                onChange={(e) => doSalesChange(e)}
                type="text"
                variant="outlined"
                defaultValue={oUpdate.CustId}
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="OrderDate"
                label="OrderDate"
                onChange={(e) => doSalesChange(e)}
                type="date"
                variant="outlined"
                defaultValue={oUpdate.OrderDate}
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="Descript"
                label="Descript"
                onChange={(e) => doSalesChange(e)}
                type="text"
                variant="outlined"
                defaultValue={oUpdate.Descript}
              />
            </TableCell>
            <TableCell>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="button"
                variant="contained"
                onClick={() => doSalesUpdate()}
              >
                Update
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <hr />
      <h2>訂單明細</h2>
      <hr />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              #seq
            </TableCell>
            <TableCell>
              #OrderId
            </TableCell>
            <TableCell>
              #ProdId
            </TableCell>
            <TableCell>
              #Qty
            </TableCell>
            <TableCell>
              #Discount
            </TableCell>
            <TableCell>
              #Update
            </TableCell>
            <TableCell>
              #Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderdetail.map((detail) => (
            <TableRow
              key={detail.seq}
            >
              <TableCell>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Avatar
                    src={detail.seq}
                    sx={{ mr: 2 }}
                  >
                    {getInitials(detail.seq)}
                  </Avatar>
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    <TextField
                      fullWidth
                      id="dseq"
                      label="dseq"
                      type="text"
                      variant="outlined"
                      defaultValue={detail.seq}
                      disabled
                    />
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  id="dOrderId"
                  label="dOrderId"
                  type="text"
                  variant="outlined"
                  defaultValue={detail.OrderId}
                  disabled
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  id="ProdId"
                  label="ProdId"
                  type="text"
                  variant="outlined"
                  defaultValue={detail.ProdId}
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  id="Qty"
                  label="Qty"
                  type="text"
                  variant="outlined"
                  defaultValue={detail.Qty}
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="Discount"
                  type="text"
                  variant="outlined"
                  defaultValue={detail.Discount}
                />
              </TableCell>
              <TableCell>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="button"
                  variant="contained"
                  onClick={() => doDetailUpdate(detail.seq,detail.OrderId,detail.ProdId,detail.Qty,detail.Discount)}
                >
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  fullWidth
                  size="large"
                  type="button"
                  variant="contained"
                  onClick={() => doDetailDelete(detail.seq)}
                >
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default SalesOrderUpdate;
