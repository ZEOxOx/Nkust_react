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

const CustomerListResults = ({ customers, ...rest }) => {
  const navigate = useNavigate();
  const { product } = useContext(AppContext);

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(product.length + 1);
  const [page, setPage] = useState(0);

  //給予全域變數、方法
  const { pSetDelete } = useContext(AppContext);
  const { pSetUpdate } = useContext(AppContext);

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

  const addUpdate = (ProdName, ProdID, UnitPrice, Cost) => {
    pSetUpdate({
      ProdName, ProdID, UnitPrice, Cost,
    });
    navigate('/app/pUpdate', { replace: true });
  };

  const addDelete = (ProdName, ProdID, UnitPrice, Cost) => {
    pSetDelete({
      ProdName, ProdID, UnitPrice, Cost,
    });
    navigate('/app/pDelete', { replace: true });
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
                  #Update
                </TableCell>
                <TableCell>
                  #Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.slice(0, limit).map((prod) => (
                <TableRow
                  hover
                  key={prod.ProdID}
                  selected={selectedCustomerIds.indexOf(prod.ProdID) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(prod.ProdID) !== -1}
                      onChange={(event) => handleSelectOne(event, prod.ProdID)}
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
                        src={prod.ProdID}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(prod.ProdName)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {prod.ProdName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {prod.ProdID}
                  </TableCell>
                  <TableCell>
                    {prod.UnitPrice}
                  </TableCell>
                  <TableCell>
                    {prod.Cost}
                  </TableCell>
                  <TableCell>
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={() => addUpdate(prod.ProdName, prod.ProdID, prod.UnitPrice, prod.Cost)}
                    >
                      Update
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      color="secondary"
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      onClick={() => addDelete(prod.ProdName, prod.ProdID, prod.UnitPrice, prod.Cost)}
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
        count={product.length + 1}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
