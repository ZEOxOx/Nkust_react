//顯示product畫面
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
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

const Report = () => {
  const { report } = useContext(AppContext);
  console.log(report);
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  #CustName
                </TableCell>
                <TableCell>
                  #CustId
                </TableCell>
                <TableCell>
                  #TotalSales
                </TableCell>
                <TableCell>
                  #TotalProfit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {report.map((rep) => (
                <TableRow
                  hover
                  key={rep.CustId}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={rep.CustId}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(rep.CustId)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {rep.CustName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {rep.CustId}
                  </TableCell>
                  <TableCell>
                    {rep.TotalSales}
                  </TableCell>
                  <TableCell>
                    {rep.TotalNets}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

export default Report;
