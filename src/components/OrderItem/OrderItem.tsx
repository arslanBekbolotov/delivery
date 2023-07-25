import React from 'react';
import {Button, Card, CardBody, Flex,Text} from "@chakra-ui/react";
import {IDish} from "../../types";

interface Props{
    dish:IDish;
}
const OrderItem:React.FC<Props> = ({dish}) => {
    const dishName = dish.name.charAt(0).toUpperCase() + dish.name.slice(1);

    return (
        <Card mb="3" shadow="lg">
            <CardBody>
                <Flex align="center">
                    <Text>{dishName}</Text>
                    <Text ml="auto">{dish.count}x</Text>
                    <Text ml='15%'>{dish.price}kgz</Text>
                    <Button colorScheme="red" variant='outline' ml='10%'>X</Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default OrderItem;