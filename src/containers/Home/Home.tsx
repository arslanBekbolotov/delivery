import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchDishes} from "../../store/adminThuck";
import UserDish from "../../components/UserDish/UserDish";
import {IDish} from "../../types";
import {addUserDish, onClose, selectVisible} from "../../store/userSlice";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import CustomAlert from "../../components/Alert/CustomAlert";

const Home = () => {
    const {dishes,fetchLoading} = useAppSelector(state=>state.admin);
    const dispatch = useAppDispatch();
    const isVisible = useAppSelector(selectVisible);

    useEffect(()=>{
        dispatch(fetchDishes());
    },[dispatch]);


    const onClickAdd = (dish: IDish) => {
        dispatch(addUserDish(dish));
    };

    return (
        <div>
            {fetchLoading ? <CircularProgress/> : <>
                {dishes && dishes.map(dish=>(
                    <UserDish key={dish.id} dish={dish} onClickAdd={()=>onClickAdd(dish)}/>
                ))}
            </>}
            {isVisible && <CustomAlert onClose={()=>dispatch(onClose())} alertStatus={'success'} />}
        </div>
    );
};

export default Home;