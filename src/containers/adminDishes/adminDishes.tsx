import React, {useEffect} from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {fetchDishes} from "../../store/adminThuck";
import Dish from "../../components/Dish/Dish";

const AdminDishes = () => {
    const dispatch = useAppDispatch();
    const {dishes,loading} = useAppSelector(state => state.admin);

    useEffect(()=>{
        dispatch(fetchDishes());
    },[dispatch]);

    return (
        <Box>
            <Flex align="center" justify="space-between" mb="6">
                <Box fontSize="25px">Dishes</Box>
                <Link to="/addDish">
                    <Button colorScheme='teal' size='md'>Add new dishes</Button>
                </Link>
            </Flex>
            <Box>
                {dishes && dishes.map(dish=>(
                    <Dish dish={dish}/>
                ))}
            </Box>
        </Box>
    );
};

export default AdminDishes;