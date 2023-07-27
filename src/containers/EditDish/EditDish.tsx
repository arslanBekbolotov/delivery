import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TDishMutation } from "../../types";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { editDish, fetchOneDish } from "../../store/adminThuck";
import Form from "../../components/Form/Form";
import { selectDish } from "../../store/adminSlice";
import CircularProgress from "../../components/CircularProgress/CircularProgress";

const EditDish = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();
  const fetchLoading = useAppSelector((state) => state.admin.fetchLoading);
  const editLoading = useAppSelector((state) => state.admin.editLoading);
  const dish = useAppSelector(selectDish);

  const onSubmit = async (data: TDishMutation) => {
    await dispatch(editDish({ ...data, id }));
  };

  useEffect(() => {
    dispatch(fetchOneDish(id));
  }, [dispatch, id]);

  return (
    <div>
      {fetchLoading ? (
        <CircularProgress />
      ) : (
        <>
          {dish && (
            <Form onSubmit={onSubmit} editDish={dish} isLoading={editLoading} />
          )}
        </>
      )}
    </div>
  );
};

export default EditDish;
