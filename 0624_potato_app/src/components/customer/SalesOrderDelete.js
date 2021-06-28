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
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import { AppContext } from '../../Context';

const SalesOrderDelete = () => {
  const navigate = useNavigate();

  //取得前端顯示資料
  const { oDelete } = useContext(AppContext);
  const { deleteSalesorder } = useContext(AppContext);
  console.log(oDelete);

  const doSubmit = () => {
    deleteSalesorder(oDelete.OrderId);
    navigate('/app/products', { replace: true });
  };

  return (
    <Box sx={{ minWidth: 1050 }}>
      <h2>請再次確定是否刪除下列資料：</h2>
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
              #DoDelete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={oDelete.seq}
          >
            <TableCell>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Avatar
                  src={oDelete.seq}
                  sx={{ mr: 2 }}
                >
                  {getInitials(oDelete.seq)}
                </Avatar>
                <Typography
                  color="textPrimary"
                  variant="body1"
                >
                  {oDelete.seq}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              {oDelete.OrderId}
            </TableCell>
            <TableCell>
              {oDelete.EmpId}
            </TableCell>
            <TableCell>
              {oDelete.CustId}
            </TableCell>
            <TableCell>
              {oDelete.OrderDate}
            </TableCell>
            <TableCell>
              {oDelete.Descript}
            </TableCell>
            <TableCell>
              <Button
                color="secondary"
                fullWidth
                size="large"
                type="button"
                variant="contained"
                onClick={() => doSubmit()}
              >
                DELETE
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default SalesOrderDelete;
