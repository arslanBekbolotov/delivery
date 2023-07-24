import React from 'react';
import {Box, Button, Flex} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import Dish from "../../components/Dish/Dish";

const AdminDishes = () => {
    return (
        <Box>
            <Flex align="center" justify="space-between" mb="6">
                <Box fontSize="25px">Dishes</Box>
                <Link to="/addDish">
                    <Button colorScheme='teal' size='md'>Add new dishes</Button>
                </Link>
            </Flex>
            <Box>
                {/*{dishes && dishes.map(dish=>(*/}
                {/*    <Dish dish={dish}/>*/}
                {/*))}*/}
            </Box>
        </Box>
    );
};

export default AdminDishes;