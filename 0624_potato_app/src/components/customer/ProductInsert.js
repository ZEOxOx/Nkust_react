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

const ProductInsert = () => {
  const navigate = useNavigate();

  //取得前端顯示資料
  const { insertProduct } = useContext(AppContext);

  const doSubmit = () => {
    let ProdID = document.getElementById('ProdID').value;
    let ProdName = document.getElementById('ProdName').value;
    let UnitPrice = document.getElementById('UnitPrice').value;
    let Cost = document.getElementById('Cost').value;

    const data = {
      ProdID,ProdName,UnitPrice,Cost
    };
    console.log(data);
    insertProduct(data);
    navigate('/app/customers', { replace: true });
  };

  const doChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 1050 }}>
      <h2>請填寫新增資料：</h2>
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
                    id="ProdName"
                    label="ProdName"
                    onChange={(e) => doChange(e)}
                    type="text"
                    variant="outlined"
                  />
                </Typography>
              </Box>
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="ProdID"
                label="ProdID"
                onChange={(e) => doChange(e)}
                type="text"
                variant="outlined"
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="UnitPrice"
                label="UnitPrice"
                onChange={(e) => doChange(e)}
                type="text"
                variant="outlined"
              />
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                id="Cost"
                label="Cost"
                onChange={(e) => doChange(e)}
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

export default ProductInsert;
