import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchOrders} from "../../store/ordersThuck";
import {selectOrders} from "../../store/ordersSlice";
import AdminOrderItems from "../../components/AdminOrderItems/AdminOrderItems";

const AdminOrders = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(selectOrders);

    useEffect(()=>{
        dispatch(fetchOrders());
    },[dispatch,orders.length]);

    return (
        <div>
            {orders  && orders.map((ordersItem,index)=>(
                <AdminOrderItems key={Math.random()} orders={ordersItem} index={index}/>
            ))}
        </div>
    );
};

export default AdminOrders;