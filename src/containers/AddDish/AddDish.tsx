import React from 'react';
import Form from "../../components/Form/Form";
import {TDishMutation} from "../../types";
import {axiosApi} from "../../axiosApi";

const AddDish = () => {

    const onSubmit = async(data:TDishMutation) => {
        await axiosApi.post('dishes.json',data);
    };

    return (
        <div>
            <Form onSubmit={onSubmit}/>
        </div>
    );
};

export default AddDish;