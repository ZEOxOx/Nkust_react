import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export const Actions = () => {
  //欲回傳的所有資料
  let [users, setUsers] = useState([]);
  let [employee, setEmployee] = useState([]);
  let [product, setProduct] = useState([]);
  let [customer, setCustomer] = useState([]);
  let [salesorder, setSalesorder] = useState([]);
  let [report, setReport] = useState([]);
  let [orderdetail, setOrderdetail] = useState([]);

  //要給予新增、修改、刪除資料
  let [pDelete, pSetDelete] = useState({});
  let [pUpdate, pSetUpdate] = useState({});
  let [oDelete, oSetDelete] = useState({});
  let [oUpdate, oSetUpdate] = useState({});

  //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost/php-react/all-users.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
          setUserLength(true);
        } else {
          setUsers([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("http://localhost/php-react/all-product.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProduct(data.product);
        } else {
          setProduct([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("http://localhost/php-react/all-salesorder.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSalesorder(data.salesorder);
        } else {
          setSalesorder([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    fetch("http://localhost/php-react/all-customer.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setCustomer(data.customer);
        } else {
          setCustomer([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const resetProduct = () => {
    fetch("http://localhost/php-react/all-product.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setProduct(data.product);
        } else {
          setProduct([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetSalesorder = () => {
    fetch("http://localhost/php-react/all-salesorder.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSalesorder(data.salesorder);
        } else {
          setSalesorder([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSalesReport = (TheDate) => {
    fetch("http://localhost/php-react/report.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(TheDate),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //data是回傳的資料
        if (data.success) {
          alert("Success");
          setReport(data.report);
        } else {
          setReport([]);
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrderdetail = (TheOrder) => {
    fetch("http://localhost/php-react/one-orderdetail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ OrderId: TheOrder }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //data是回傳的資料
        if (data.success) {
          alert("Success");
          setOrderdetail(data.orderdetail);
        } else {
          setOrderdetail([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //emp傳進去
  const checkAccount = (Emp) => {
    fetch("http://localhost/php-react/checkAccount.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Emp),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //data是回傳的資料
        if (data.success) {
          alert("Success");
          setEmployee(data.employee[0]);
          navigate('/app/dashboard', { replace: true });
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editMode = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers(users);
  };

  // Cance the edit mode.
  const cancelEdit = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers(users);
  };

  // Inserting a new user into the database.
  const insertProduct = (prod) => {
    fetch("http://localhost/php-react/insert-product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          resetProduct();
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertSalesorder = (sales) => {
    fetch("http://localhost/php-react/insert-salesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sales),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          resetSalesorder();
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertOrderdetail = (detail) => {
    fetch("http://localhost/php-react/insert-orderdetail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detail),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          getOrderdetail(orderdetail[0].OrderId);
          navigate('/app/oUpdate', { replace: true });
          alert("Success");
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Updating a product.
  const updateProduct = (prod) => {
    fetch("http://localhost/php-react/update-product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          resetProduct();
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateOrderdetail = (detail) => {
    fetch("http://localhost/php-react/update-orderdetail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detail),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          navigate('/app/oUpdate', { replace: true });
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateSalesorder = (sales) => {
    fetch("http://localhost/php-react/update-salesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sales),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          resetSalesorder();
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Deleting a user.
  const deleteProduct = (theID) => {
    fetch("http://localhost/php-react/delete-product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ProdID: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          resetProduct();
          //setProduct(prodDeleted);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSalesorder = (theID) => {
    fetch("http://localhost/php-react/delete-salesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ OrderId: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          resetSalesorder();
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteOrderdetail = (theID) => {
    console.log(theID);
    fetch("http://localhost/php-react/delete-orderdetail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ seq: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert("Success");
          getOrderdetail(orderdetail[0].OrderId);
          navigate('/app/oUpdate', { replace: true });
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    users,
    customer,
    userLength,
    employee,
    product,
    salesorder,
    pDelete,
    pSetDelete,
    pUpdate,
    pSetUpdate,
    oDelete,
    oSetDelete,
    oUpdate,
    oSetUpdate,
    checkAccount,
    editMode,
    cancelEdit,
    getSalesReport,
    getOrderdetail,
    report,
    orderdetail,
    setReport,
    insertOrderdetail,
    updateOrderdetail,
    deleteOrderdetail,
    updateProduct,
    insertProduct,
    deleteProduct,
    updateSalesorder,
    insertSalesorder,
    deleteSalesorder,
  };
};
