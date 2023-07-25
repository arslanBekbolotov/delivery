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

    const findCount = (id: string) => {
        const findId = dishes.find((item) => item.id === id);

        if (findId) {
            console.log('work');
            return findId.count;
        }

        return 0;
    };

    const onClickAdd = (dish: IDish) => {
        dispatch(addUserDish(dish));
    };

    return (
        <div>
            {dishes && dishes.map(dish=>(
                <UserDish key={dish.id} dish={dish} count={findCount(dish.id)} onClickAdd={()=>onClickAdd(dish)}/>
            ))}
        </div>
    );
};

export default Home;