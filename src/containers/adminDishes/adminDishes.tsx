import React, {useEffect} from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchDishes} from "../../store/adminThuck";
import Dish from "../../components/Dish/Dish";
import CircularProgress from "../../components/CircularProgress/CircularProgress";

const AdminDishes = () => {
    const dispatch = useAppDispatch();
    const {dishes,fetchLoading} = useAppSelector(state => state.admin);

    useEffect(()=>{
        dispatch(fetchDishes());
    },[dispatch]);

    return (
        <Box>
            <Flex align="center" justify="space-between" mb="6">
                <Box fontSize="25px">Dishes</Box>
                <Link to="/admin/addDish">
                    <Button colorScheme='teal' size='md'>Add new dishes</Button>
                </Link>
            </Flex>
            <Box>
                {fetchLoading ? <CircularProgress/> : <>
                    {dishes && dishes.map(dish=>(
                        <Dish key={dish.id} dish={dish}/>
                    ))}
                </>}
            </Box>
        </Box>
    );
};

export default AdminDishes;