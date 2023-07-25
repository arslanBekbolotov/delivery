import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchDishes} from "../../store/adminThuck";
import UserDish from "../../components/UserDish/UserDish";
import {IDish} from "../../types";
import {addUserDish} from "../../store/userSlice";

const Home = () => {
    const {dishes,loading} = useAppSelector(state=>state.admin);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(fetchDishes());
    },[dispatch]);


    const onClickAdd = (dish: IDish) => {
        dispatch(addUserDish(dish));
    };

    return (
        <div>
            {dishes && dishes.map(dish=>(
                <UserDish key={dish.id} dish={dish} onClickAdd={()=>onClickAdd(dish)}/>
            ))}
        </div>
    );
};

export default Home;