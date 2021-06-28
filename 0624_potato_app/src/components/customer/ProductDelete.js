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

const ProductDelete = () => {
  const navigate = useNavigate();
  
  //取得前端顯示資料
  const { pDelete } = useContext(AppContext);
  const { deleteProduct } = useContext(AppContext);
  console.log(pDelete);

  const doSubmit = () => {
    deleteProduct(pDelete.ProdID);
    navigate('/app/customers', { replace: true });
  };

  return (
    <Box sx={{ minWidth: 1050 }}>
      <h2>請再次確定是否刪除下列資料：</h2>
      <hr />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              #ProdName
            </TableCell>
            <TableCell>
              #ProdID
            </TableCell>
            <TableCell>
              #UnitPrice
            </TableCell>
            <TableCell>
              #Cost
            </TableCell>
            <TableCell>
              #DoDelete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={pDelete.ProdID}
          >
            <TableCell>
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Avatar
                  src={pDelete.ProdID}
                  sx={{ mr: 2 }}
                >
                  {getInitials(pDelete.ProdName)}
                </Avatar>
                <Typography
                  color="textPrimary"
                  variant="body1"
                >
                  {pDelete.ProdName}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              {pDelete.ProdID}
            </TableCell>
            <TableCell>
              {pDelete.UnitPrice}
            </TableCell>
            <TableCell>
              {pDelete.Cost}
            </TableCell>
            <TableCell>
              <Button
                color="secondary"
                fullWidth
                size="large"
                type="button"
                variant="contained"
                onClick={() => doSubmit(pDelete.ProdID)}
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

export default ProductDelete;
