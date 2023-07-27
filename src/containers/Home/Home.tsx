import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchDishes} from "../../store/adminThuck";
import UserDish from "../../components/UserDish/UserDish";
import {IDish} from "../../types";
import {addUserDish, onClose, selectStatus, selectVisible} from "../../store/userSlice";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import CustomAlert from "../../components/Alert/CustomAlert";
import {Grid} from "@chakra-ui/react";

const Home = () => {
    const {dishes,fetchLoading} = useAppSelector(state=>state.admin);
    const dispatch = useAppDispatch();
    const isVisible = useAppSelector(selectVisible);
    const alertStatus = useAppSelector(selectStatus);

    useEffect(()=>{
        dispatch(fetchDishes());
    },[dispatch,alertStatus]);

    const onClickAdd = (dish: IDish) => {
        dispatch(addUserDish(dish));
    };

    return (
        <div>
            {fetchLoading ? <CircularProgress/> : <Grid mb="10" templateColumns='repeat(4, 1fr)' gap={5}>
                {dishes && dishes.map(dish=>(
                    <UserDish key={dish.id} dish={dish} onClickAdd={()=>onClickAdd(dish)}/>
                ))}
            </Grid>}
            {isVisible && <CustomAlert onClose={()=>dispatch(onClose())} alertStatus={alertStatus} />}
        </div>
    );
};

export default Home;