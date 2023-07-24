import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {TDishMutation} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {editDish, fetchOneDish} from "../../store/adminThuck";
import Form from "../../components/Form/Form";
import {selectDish} from "../../store/adminSlice";

const EditDish = () => {
    const {id} = useParams() as {id:string};
    const dispatch = useAppDispatch();
    const dish = useAppSelector(selectDish);

    const onSubmit = async(data:TDishMutation)=> {
       await dispatch(editDish({...data,id}))
    };

    useEffect(()=>{
        dispatch(fetchOneDish(id));
    },[dispatch,id]);

    return (
        <div>
            {dish && <Form onSubmit={onSubmit} editDish={dish}/>}
        </div>
    );
};

export default EditDish;