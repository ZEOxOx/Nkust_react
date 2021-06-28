//顯示salesorder畫面
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

const SalesOrderResults = ({ customers, ...rest }) => {
  const navigate = useNavigate();
  const { salesorder } = useContext(AppContext);
  const { getOrderdetail } = useContext(AppContext);

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(salesorder.length + 1);
  const [page, setPage] = useState(0);

  //給予全域變數、方法
  const { oDelete, oSetDelete } = useContext(AppContext);
  const { oUpdate, oSetUpdate } = useContext(AppContext);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const addUpdate = (seq, OrderId, EmpId, CustId, OrderDate, Descript) => {
    window.localStorage.setItem('OrderId',OrderId);
    oSetUpdate({
      seq, OrderId, EmpId, CustId, OrderDate, Descript
    });
    console.log(oUpdate);
    getOrderdetail(OrderId);
    navigate('/app/oUpdate', { replace: true });
  };

  const addDelete = (seq, OrderId, EmpId, CustId, OrderDate, Descript) => {
    oSetDelete({
      seq, OrderId, EmpId, CustId, OrderDate, Descript
    });
    console.log(oDelete);
    navigate('/app/oDelete', { replace: true });
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
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
                  #View
                </TableCell>
                <TableCell>
                  #Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesorder.slice(0, limit).map((sales) => (
                <TableRow
                  hover
                  key={sales.seq}
                  selected={selectedCustomerIds.indexOf(sales.seq) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(sales.seq) !== -1}
                      onChange={(event) => handleSelectOne(event, sales.seq)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={sales.seq}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(sales.seq)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {sales.seq}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {sales.OrderId}
                  </TableCell>
                  <TableCell>
                    {sales.EmpId}
                  </TableCell>
                  <TableCell>
                    {sales.CustId}
                  </TableCell>
                  <TableCell>
                    {sales.OrderDate}
                  </TableCell>
                  <TableCell>
                    {sales.Descript}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={() => addUpdate(sales.seq, sales.OrderId, sales.EmpId, sales.CustId, sales.OrderDate, sales.Descript)}
                    >
                      View
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={() => addDelete(sales.seq, sales.OrderId, sales.EmpId, sales.CustId, sales.OrderDate, sales.Descript)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={salesorder.length + 1}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

SalesOrderResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default SalesOrderResults;
