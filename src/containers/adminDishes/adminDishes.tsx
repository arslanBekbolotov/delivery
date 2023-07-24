import React from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import Dish from "../../components/Dish/Dish";

const AdminDishes = () => {
    const dishes = [{
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKpQP9GefJRLHuTDa4NikTFqkKJIONy9uDg&usqp=CAU',
        name:'pizza',
        price:'450',
    },{
        src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzKpQP9GefJRLHuTDa4NikTFqkKJIONy9uDg&usqp=CAU',
        name:'pepperoni',
        price:'500',
    }]
    return (
        <Box>
            <Flex align="center" justify="space-between" mb="6">
                <Box fontSize="25px">Dishes</Box>
                <Link to="addDish">
                    <Button colorScheme='teal' size='md'>Add new dishes</Button>
                </Link>
            </Flex>
            <Box>
                {dishes.map(dish=>(
                    <Dish dish={dish}/>
                ))}
            </Box>
        </Box>
    );
};

export default AdminDishes;