import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { completeOrder, fetchOrders } from "../../store/ordersThuck";
import { selectLoading, selectOrders } from "../../store/ordersSlice";
import AdminOrderItems from "../../components/AdminOrderItems/AdminOrderItems";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import { IApiOrdersResponse } from "../../types";

const AdminOrders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(selectOrders);
  const loading = useAppSelector(selectLoading);

  const handleComplete = async (orders: IApiOrdersResponse) => {
    const id = orders[orders.length - 1]?.id;
    if (id) await dispatch(completeOrder(id));
    await dispatch(fetchOrders());
  };

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {orders &&
            orders.map((ordersItem) => (
              <AdminOrderItems
                key={Math.random()}
                orders={ordersItem}
                handleComplete={() => handleComplete(ordersItem)}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default AdminOrders;
