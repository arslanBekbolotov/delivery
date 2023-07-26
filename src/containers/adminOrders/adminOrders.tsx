import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchOrders} from "../../store/ordersThuck";
import {selectLoading, selectOrders} from "../../store/ordersSlice";
import AdminOrderItems from "../../components/AdminOrderItems/AdminOrderItems";
import CircularProgress from "../../components/CircularProgress/CircularProgress";

const AdminOrders = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(selectOrders);
    const loading = useAppSelector(selectLoading);

    useEffect(()=>{
        dispatch(fetchOrders());
    },[dispatch,orders.length]);

    return (
        <div>
            {loading ? <CircularProgress/> : <>
                {orders  && orders.map((ordersItem,index)=>(
                    <AdminOrderItems key={Math.random()} orders={ordersItem} index={index}/>
                ))}
            </>}
        </div>
    );
};

export default AdminOrders;