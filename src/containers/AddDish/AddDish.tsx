import React from 'react';
import Form from "../../components/Form/Form";
import {TDishMutation} from "../../types";
import {useAppDispatch} from "../../app/hooks";
import {addDish} from "../../store/adminThuck";

const AddDish = () => {
    const dispatch = useAppDispatch();

    const onSubmit = async(data:TDishMutation) => {
       await dispatch(addDish(data));
    };

    return (
        <div>
            <Form onSubmit={onSubmit}/>
        </div>
    );
};

export default AddDish;