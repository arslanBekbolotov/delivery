import React from 'react';
import {Button, Card, CardBody, Flex, Text} from "@chakra-ui/react";
import {IDish} from "../../types";
import {useAppDispatch} from "../../app/hooks";
import {decrease, deleteUserDish, increase} from "../../store/userSlice";


interface Props{
    dish:IDish;
}

const OrderItem:React.FC<Props> = ({dish}) => {
    const dispatch = useAppDispatch();
    const dishName = dish.name.charAt(0).toUpperCase() + dish.name.slice(1);

    return (
        <Card mb="3" shadow="lg">
            <CardBody>
                <Flex align="center">
                    <Text>{dishName}</Text>
                    <Flex ml="auto" align="center">
                        <Button onClick={()=>dispatch(decrease(dish.id))}>-</Button>
                        <Text mx="3">
                         {dish.count}
                        </Text>
                        <Button onClick={()=>dispatch(increase(dish.id))}>+</Button>
                    </Flex>
                    <Text ml='15%'>{dish.price}kgz</Text>
                    <Button colorScheme="red" variant='outline' ml='10%' onClick={()=>dispatch(deleteUserDish(dish.id))}>X</Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default OrderItem;