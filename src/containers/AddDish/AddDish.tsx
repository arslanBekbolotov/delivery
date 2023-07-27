import React from "react";
import Form from "../../components/Form/Form";
import { TDishMutation } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addDish } from "../../store/adminThuck";

const AddDish = () => {
  const dispatch = useAppDispatch();
  const addLoading = useAppSelector((state) => state.admin.addLoading);

  const onSubmit = async (data: TDishMutation) => {
    await dispatch(addDish(data));
  };

  return (
    <div>
      <Form onSubmit={onSubmit} isLoading={addLoading} />
    </div>
  );
};

export default AddDish;
